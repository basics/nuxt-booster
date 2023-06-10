import createSort from 'sort-css-media-queries/lib/create-sort';
import Source from '../../SpeedkitImage/classes/Source';
import { toHashHex } from '#speedkit/utils/string';

const sortByMediaQueries = createSort();

export default class SourceList {
  list = [];
  sort = false;

  constructor(list, options = {}) {
    options = options || {};
    this.sort = options.sort || false;
    this.list = this.list.concat(
      Array.from(list || this.list).map(item => new Source(item))
    );
  }

  get length() {
    return this.list.length;
  }

  [Symbol.iterator]() {
    return this.list.values();
  }

  get key() {
    return this.list.map(source => source.key).join('-');
  }

  get sorted() {
    if (this.sort) {
      return this.list.sort((a, b) => sortByMediaQueries(a.media, b.media));
    } else {
      return this.list;
    }
  }

  get style() {
    return this.list
      .map(
        ({ media, width, height, style: sourceStyle }) => `
      @media ${media} { .${this.className}::before { padding-top: calc((1 / (${width} / ${height})) * 100%); } }
      @supports (aspect-ratio: 1) {
        @media ${media} { .${this.className} { aspect-ratio: ${width} / ${height}; } }
      }
      ${sourceStyle}
    `
      )
      .reverse()
      .join(' ');
  }

  get className() {
    return `picture-${toHashHex(this.sorted.map(({ src }) => src).join(','))}`;
  }

  get classNames() {
    return {
      picture: this.className,
      image: this.list.map(source => source.className)
    };
  }

  getFormats(formats, preloadFormat, isCritical) {
    return this.sorted.reduce(
      (result, source) =>
        result.concat(
          formats.map(format => {
            return source.modify({
              format,
              preload: format.includes(preloadFormat) && isCritical
            });
          })
        ),
      []
    );
  }

  async getMeta($img, $speedkit) {
    const result = await Promise.all(
      this.sorted.map(source => {
        const config = $img.getSizes(source.src, {
          sizes: source.sizes,
          modifiers: source.getModifiers(),
          ...source.getOptions()
        });
        return source.getMeta(config.src, $speedkit);
      })
    );
    return new SourceList(result);
  }

  toJSON() {
    return this.list;
  }

  static create(...args) {
    return new this(...args);
  }
}
