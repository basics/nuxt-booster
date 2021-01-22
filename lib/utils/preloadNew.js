import { toHashHex } from 'nuxt-speedkit/utils/string';

export function getPreloadDescription ({ srcset, sizes }, crossorigin, callback = () => {}) {
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

export function doPreloadFallback ({ srcset, sizes }, crossorigin, callback = () => {}) {
  const img = new Image();
  img.onload = callback;
  img.crossorigin = crossorigin;
  img.sizes = sizes;
  img.srcset = srcset;
}
