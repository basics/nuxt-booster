import createSort from 'sort-css-media-queries/lib/create-sort';
import ImageSource from '../../Image/classes/ImageSource';
import { toHashHex } from '../../../utils/string';

const sortByMediaQueries = createSort();

export default class ImageSourceList {
  #list = [];

  constructor (list) {
    this.#list = this.#list.concat(list.map(item => new ImageSource(item)));
  }

  get list () { return this.#list; }

  get sorted () {
    return this.#list.sort((a, b) => sortByMediaQueries(a.media, b.media));
  }

  get style () {
    return this.#list.map(({ media, width, height, style: sourceStyle }) => `
      @media ${media} { .${this.className} { padding-top: calc((1 / (${width} / ${height})) * 100%); } }
      @supports (aspect-ratio: 1) {
        @media ${media} { .${this.className} { aspect-ratio: ${width} / ${height}; padding-top: initial; } }
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
      return source.modify({ format, preload: format === preloadFormat && isCritical });
    })), []);
  }

  async getMeta (context) {
    const result = await Promise.all(this.sorted.map(source => source.getMeta(context)));
    return new ImageSourceList(result);
  }

  toJSON () {
    return this.#list;
  }
}
