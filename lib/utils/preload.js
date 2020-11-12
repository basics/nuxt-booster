import { convertToHashCode } from './string'
import { elementSupportsAttribute } from './support'

export function preload (item, callback) {
  if (process.server || elementSupportsAttribute('link', 'imageSrcset')) {
    return {
      link: [preloadAsLink(item, callback)]
    }
  } else {
    return preloadAsImage(item, callback) && {}
  }
}

export function preloadAsLink (item, callback) {
  return {
    hid: convertToHashCode(item.srcset),
    rel: 'preload',
    as: 'image',
    crossorigin: 'anonymous',
    callback,
    imageSrcset: item.srcset
  }
}

export function preloadAsImage (item, callback) {
  const img = new Image()
  img.onload = callback
  img.crossorigin = 'anonymous'
  img.srcset = item.srcset
}
