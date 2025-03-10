import { getExtension, getMeta } from '../utils/image';
import type { ImageModifiers } from '@nuxt/image';
import { toHashHex } from '../../../utils/string';
import type {
  BoosterProvide,
  CrossOrigin,
  HTMLCrossOriginAttribute,
  ISource
} from '../../../../module';
import type { Link } from '@unhead/vue';

export default class Source implements ISource {
  src: string;
  media?: string;
  sizes?: Record<string, string | number>;
  width?: number;
  height?: number;
  format?: string;
  quality?: number;
  preload?: boolean;
  modifiers?: Partial<ImageModifiers>;
  provider?: string;
  preset?: string;
  densities?: string;
  constructor({
    src,
    sizes,
    width,
    height,
    media = 'all',
    quality = 70,
    format = undefined,
    preload = false,
    modifiers = {},
    provider = undefined,
    preset = undefined,
    densities = undefined
  }: Source) {
    this.src = src;
    this.sizes = sizes;
    this.media = media;
    this.width = width;
    this.height = height;
    this.format = getFormat(src, format);
    this.quality = quality;
    this.preload = preload || false;
    this.modifiers = modifiers;
    this.provider = provider;
    this.preset = preset;
    this.densities = densities;
  }

  get key() {
    return toHashHex(JSON.stringify(this.toJSON()));
  }

  get ratio() {
    return (this.width ?? 0) / (this.height ?? 0);
  }

  get className() {
    return `image-${toHashHex(normalizeSrc(this.src))}`;
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

  getOptions($booster: BoosterProvide) {
    return {
      provider: this.provider,
      preset: this.preset,
      densities: this.densities || $booster.densities
    };
  }

  getMeta(compiledSrc: string, $booster: BoosterProvide) {
    return getMeta(
      new Source({ ...this.toJSON() } as Source),
      compiledSrc,
      $booster
    );
  }

  getPreload(srcset: string, sizes?: string, crossorigin?: CrossOrigin): Link {
    const preload: Link = {
      rel: 'preload',
      as: 'image',
      imagesrcset: srcset,
      imagesizes: sizes,
      media: this.media,
      crossorigin: crossorigin as HTMLCrossOriginAttribute
    };
    return preload;
  }

  modify(config: Partial<Source>) {
    return new Source({ ...this.toJSON(), ...config } as Source);
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

  static create(...args: [Source]) {
    return new this(...args);
  }
}

function getFormat(src: string, format: string | undefined) {
  const extension = getExtension(src);
  if (format?.includes(extension)) {
    return extension;
  }
  return format || extension;
}

export function normalizeSrc(src: string) {
  if (src.startsWith('/')) {
    return src;
  }
  const url = new URL(src);
  return url.pathname + url.search + url.hash;
}
