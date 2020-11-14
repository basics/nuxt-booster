import Cache from '../classes/Cache'
import { convertToHashCode } from './string'
import { elementSupportsAttribute } from './support'

const imageCache = new Cache()

export function preloadImage (item, callback) {
  const hash = convertToHashCode(item.srcset)
  const entry = imageCache.getEntry(hash)
  entry.promise.then(() => callback())

  if (process.server || elementSupportsAttribute('link', 'imageSrcset')) {
    return {
      link: [preloadAsImageLink(item, hash, entry.resolve)]
    }
  } else {
    return preloadAsImage(item, entry.resolve)
  }
}

export function preloadAsImageLink (item, hash, resolve) {
  return {
    hid: hash,
    rel: 'preload',
    as: 'image',
    crossorigin: 'anonymous',
    callback: resolve,
    imageSrcset: item.srcset
  }
}

export function preloadAsImage (item, resolve) {
  const img = new Image()
  img.onload = resolve
  img.crossorigin = 'anonymous'
  img.srcset = item.srcset
}
