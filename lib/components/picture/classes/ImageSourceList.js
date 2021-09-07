import units from 'units-css';
import createSort from 'sort-css-media-queries/lib/create-sort';
import ImageSource from '../../image/classes/ImageSource';
import { cyrb53 } from '../../../utils/hash';

const sortByMediaQueries = createSort();
const defaultRetinaOptions = { pixelRatio: 2, quality: 30 };

export default class ImageSourceList {
  #list = [];
  #options= { retina: false };

  constructor (list, options) {
    this.#list = this.#list.concat(list.map(item => new ImageSource(item)));
    this.#options = Object.assign(this.#options, options);
  }

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
    return `picture-${cyrb53(this.sorted.map(({ src }) => src).join(','))}`;
  }

  get classNames () {
    return {
      picture: this.className,
      image: this.#list.map(source => source.className)
    };
  }

  getFormats (formats) {
    let sortedList = this.sorted.reduce((result, source) => result.concat(formats.map(format => source.modify({ format }))), []);
    if (this.#options.retina) {
      sortedList = createRetinaFormats(sortedList, Object.assign(defaultRetinaOptions, this.#options.retina)).concat(sortedList);
    }
    return sortedList;
  }

  async getMeta (context) {
    const result = await Promise.all(this.sorted.map(source => source.getMeta(context)));
    return new ImageSourceList(result);
  }

  toJSON () {
    return this.#list;
  }
}

const createRetinaFormats = (list, retinaOptions) => {
  return list.map((source) => {
    const { sizes, media, ...options } = source.toJSON();
    return new ImageSource({
      ...options,
      sizes: Object.keys(sizes).reduce((result, key) => {
        result[String(key)] = calcRetinaSize(sizes[String(key)], retinaOptions.pixelRatio);
        return result;
      }, {}),
      media: [`(min-device-pixel-ratio: ${retinaOptions.pixelRatio})`, media].join(' and '),
      quality: retinaOptions.quality
    });
  });
};

const calcRetinaSize = (value, multi) => {
  const unitValue = units.parse(value);
  return `${unitValue.value * multi}${unitValue.unit}`;
};
