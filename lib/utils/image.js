// import timeoutFetch from './timeoutFetch'
import { sortSrcset } from './srcset'

const imageCache = new Map()

export function getImageSize (value, func) {
  if (Array.isArray(value)) {
    return getImageSizeOfSrcset(value, func)
  } else {
    return getImageSizeOfSrc(value, func)
  }
}

export async function getImageSizeOfSrc (url, func) {
  if (!imageCache.has(url)) {
    const { width, height } = await func(url)
    imageCache.set(url, { width, height })
  }
  return imageCache.get(url)
}

export function getImageSizeOfSrcset (list) {
  return getImageSizeOfSrc(sortSrcset(list)[0].url)
}
