import { toHashHex } from 'nuxt-speedkit/utils/string'

export function getPreloadDescription (source, crossorigin, callback = () => {}) {
  return {
    hid: toHashHex(source.srcset),
    rel: 'preload',
    as: 'image',
    crossorigin,
    imageSrcset: source.srcset,
    imageSizes: source.sizes,
    callback
  }
}

export function doPreloadFallback (source, crossorigin, callback = () => {}) {
  const img = new Image()
  img.onload = callback
  img.crossorigin = crossorigin
  img.sizes = source.sizes
  img.srcset = source.srcset
}
