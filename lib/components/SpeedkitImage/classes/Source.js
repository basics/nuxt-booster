import { toHashHex } from 'nuxt-speedkit/utils/string';
import { getExtension, getMeta } from '../utils/image';

export default class Source {
  #src = null;
  #sizes = null;
  #media = null;
  #width = null;
  #height = null;
  #format = null;
  #quality = null;
  #preload = false

  constructor ({ src, sizes, width, height, media = 'all', quality = 70, format = null, preload = false }) {
    this.#src = src;
    this.#sizes = sizes;
    this.#media = media;
    this.#width = width;
    this.#height = height;
    this.#format = format;
    this.#quality = quality;
    this.#preload = preload;
  }

  get key () {
    return toHashHex(JSON.stringify(this.toJSON()));
  }

  get src () {
    return this.#src;
  }

  get sizes () {
    return this.#sizes;
  }

  get media () {
    return this.#media;
  }

  get width () {
    return this.#width;
  }

  get height () {
    return this.#height;
  }

  get ratio () {
    return this.#width / this.#height;
  }

  get format () {
    return this.#format || getExtension(this.#src);
  }

  get quality () {
    return this.#quality;
  }

  get preload () {
    return this.#preload;
  }

  get className () {
    return `image-${toHashHex(this.src)}`;
  }

  get style () {
    return `
      @supports (aspect-ratio: 1) {
        @media ${this.media} { .${this.className} { aspect-ratio: ${this.width} / ${this.height}; } }
      }
    `;
  }

  getModifiers () {
    return { format: this.format, quality: this.quality };
  }

  getMeta (compiledSrc, ssrNuxtImage) {
    return getMeta(new Source({ ...this.toJSON() }), compiledSrc, ssrNuxtImage);
  }

  getPreload (srcset, sizes, crossorigin) {
    return { rel: 'preload', as: 'image', imagesrcset: srcset, imagesizes: sizes, media: this.media, crossorigin };
  }

  modify (config) {
    return new Source({ ...this.toJSON(), ...config });
  }

  toJSON () {
    return {
      src: this.#src,
      sizes: this.#sizes,
      media: this.#media,
      width: this.#width,
      height: this.#height,
      format: this.#format,
      quality: this.#quality,
      preload: this.#preload
    };
  }

  static create (...args) {
    return new this(...args);
  }
}
