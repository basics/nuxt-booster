import { getExtension, getMeta } from '../utils/image';
import { toHashHex } from '#speedkit/utils/string';

export default class Source {
  src = null;
  sizes = null;
  media = null;
  width = null;
  height = null;
  format = null;
  quality = null;
  preload = false;
  modifiers = {}; // https://image.nuxt.com/usage/nuxt-img#modifiers
  provider = undefined; // https://image.nuxt.com/usage/nuxt-img#provider
  preset = undefined; // https://image.nuxt.com/usage/nuxt-img#preset
  densities = undefined; // https://image.nuxt.com/usage/nuxt-img#densities

  constructor({
    src,
    sizes,
    width,
    height,
    media = 'all',
    quality = 70,
    format = null,
    preload = false,
    modifiers = {},
    provider = undefined,
    preset = undefined,
    densities = undefined
  }) {
    this.src = src;
    this.sizes = sizes;
    this.media = media;
    this.width = width;
    this.height = height;
    this.format = getFormat(src, format);
    this.quality = quality;
    this.preload = preload;
    this.modifiers = modifiers;
    this.provider = provider;
    this.preset = preset;
    this.densities = densities;
  }

  get key() {
    return toHashHex(JSON.stringify(this.toJSON()));
  }

  get ratio() {
    return this.width / this.height;
  }

  get className() {
    return `image-${toHashHex(this.src)}`;
  }

  get style() {
    return `
      @supports (aspect-ratio: 1) {
        @media ${this.media} { .${this.className} { aspect-ratio: ${this.width} / ${this.height}; } }
      }
    `;
  }

  getModifiers() {
    return { ...this.modifiers, format: this.format, quality: this.quality };
  }

  getOptions($speedkit) {
    return {
      provider: this.provider,
      preset: this.preset,
      densities: this.densities || $speedkit.densities
    };
  }

  getMeta(compiledSrc, $speedkit) {
    return getMeta(new Source({ ...this.toJSON() }), compiledSrc, $speedkit);
  }

  getPreload(srcset, sizes, crossorigin) {
    const preload = {
      rel: 'preload',
      as: 'image',
      imagesrcset: srcset,
      imagesizes: sizes,
      media: this.media
    };
    crossorigin && (preload.crossorigin = crossorigin);
    return preload;
  }

  modify(config) {
    return new Source({ ...this.toJSON(), ...config });
  }

  toJSON() {
    return {
      src: this.src,
      sizes: this.sizes,
      media: this.media,
      width: this.width,
      height: this.height,
      format: this.format,
      quality: this.quality,
      preload: this.preload,
      modifiers: this.modifiers,
      provider: this.provider,
      preset: this.preset,
      densities: this.densities
    };
  }

  static create(...args) {
    return new this(...args);
  }
}

function getFormat(src, format) {
  const extension = getExtension(src);
  if (format?.includes(extension)) {
    return extension;
  }
  return format || extension;
}
