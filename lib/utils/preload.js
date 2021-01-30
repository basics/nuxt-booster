import { toHashHex } from 'nuxt-speedkit/utils/string';

export function getImagePreloadDescription ({ srcset, sizes }, crossorigin = 'anonymous', callback = () => {}) {
  return {
    hid: toHashHex(srcset),
    rel: 'preload',
    as: 'image',
    crossorigin,
    imageSrcset: srcset,
    imageSizes: sizes,
    callback
  };
}

export function getFontPreloadDescription (font, media, crossorigin = 'anonymous', callback = () => {}) {
  return {
    hid: toHashHex(`${font.family}-${font.weight}-${font.style}-${media}`.toLowerCase()),
    rel: 'preload',
    as: 'font',
    crossorigin,
    href: font.src,
    type: font.type,
    media,
    callback
  };
}

export function doPreloadFallback ({ srcset, sizes }, crossorigin, callback = () => {}) {
  const img = new Image();
  img.onload = callback;
  img.crossorigin = crossorigin;
  img.sizes = sizes;
  img.srcset = srcset;
}
