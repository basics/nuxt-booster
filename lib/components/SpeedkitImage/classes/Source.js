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
  #preload = false;
  #modifiers = {};
  #provider = undefined; // https://image.nuxtjs.org/api/options#providers
  #preset = undefined; // https://image.nuxtjs.org/api/options#presets

  constructor ({
    src, sizes, width, height, media = 'all', quality = 70, format = null, preload = false, modifiers = {}, provider = undefined, preset = undefined
  }) {
    this.#src = src;
    this.#sizes = sizes;
    this.#media = media;
    this.#width = width;
    this.#height = height;
    this.#format = format;
    this.#quality = quality;
    this.#preload = preload;
    this.#modifiers = modifiers;
    this.#provider = provider;
    this.#preset = preset;
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
    const extension = getExtension(this.#src);
    if (this.#format?.includes(extension)) {
      return extension;
    }
    return this.#format || extension;
  }

  get quality () {
    return this.#quality;
  }

  get preload () {
    return this.#preload;
  }

  get modifiers () {
    return this.#modifiers;
  }

  get provider () {
    return this.#provider;
  }

  get preset () {
    return this.#preset;
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
    return { ...this.modifiers, format: this.format, quality: this.quality };
  }

  getOptions () {
    return { provider: this.provider, preset: this.preset };
  }

  getMeta (compiledSrc, ssrNuxtImage) {
    return getMeta(new Source({ ...this.toJSON() }), compiledSrc, ssrNuxtImage);
  }

  getPreload (srcset, sizes, crossorigin) {
    const preload = { rel: 'preload', as: 'image', imagesrcset: srcset, imagesizes: sizes, media: this.media };
    crossorigin && (preload.crossorigin = crossorigin);
    return preload;
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
      preload: this.#preload,
      modifiers: this.#modifiers,
      provider: this.#provider,
      preset: this.#preset
    };
  }

  static create (...args) {
    return new this(...args);
  }
}
