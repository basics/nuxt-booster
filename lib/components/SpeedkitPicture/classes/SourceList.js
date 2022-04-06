import createSort from 'sort-css-media-queries/lib/create-sort';
import { toHashHex } from 'nuxt-speedkit/utils/string';
import Source from '../../SpeedkitImage/classes/Source';

const sortByMediaQueries = createSort();

export default class SourceList {
  #list = [];

  constructor (list) {
    this.#list = this.#list.concat(Array.from(list || this.#list).map(item => new Source(item)));
  }

  [Symbol.iterator] () {
    return this.#list.values();
  }

  get key () { return this.#list.map(source => source.key).join('-'); }

  get list () { return this.#list; }

  get sorted () {
    return this.#list.sort((a, b) => sortByMediaQueries(a.media, b.media));
  }

  get style () {
    return this.#list.map(({ media, width, height, style: sourceStyle }) => `
      @media ${media} { .${this.className}::before { padding-top: calc((1 / (${width} / ${height})) * 100%); } }
      @supports (aspect-ratio: 1) {
        @media ${media} { .${this.className} { aspect-ratio: ${width} / ${height}; } }
      }
      ${sourceStyle}
    `).reverse().join(' ');
  }

  get className () {
    return `picture-${toHashHex(this.sorted.map(({ src }) => src).join(','))}`;
  }

  get classNames () {
    return {
      picture: this.className,
      image: this.#list.map(source => source.className)
    };
  }

  getFormats (formats, preloadFormat, isCritical) {
    return this.sorted.reduce((result, source) => result.concat(formats.map((format) => {
      return source.modify({ format, preload: format.includes(preloadFormat) && isCritical });
    })), []);
  }

  async getMeta ($img, ssrContext) {
    const result = await Promise.all(this.sorted.map((source) => {
      const config = $img.getSizes(source.src, {
        sizes: source.sizes,
        modifiers: source.getModifiers(),
        ...source.getOptions()
      });
      return source.getMeta(config.src, ssrContext?.nuxt?._img);
    }));
    return new SourceList(result);
  }

  toJSON () {
    return this.#list;
  }

  static create (...args) {
    return new this(...args);
  }
}
