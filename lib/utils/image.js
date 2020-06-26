import sortMediaQueries from 'sort-media-queries'
import srcset from 'srcset'
import timeoutFetch from './timeoutFetch'

export { sortMediaQueries }

const imageCache = new Map()

export function getMatchedSource (sources) {
  if (!process.server) {
    return sources.find(({ media }) => global.matchMedia(media).matches)
  } else {
    return sources[0]
  }
}

export function sortSourcesByMedia (sources) {
  sources = sources.map((source) => {
    source.media = source.media || 'all'
    return source
  })
  return sortMediaQueries(sources, 'media').reverse()
}

export function normalizeSrcsetOfSources (sources) {
  return sources.map((source) => {
    source.srcset = [].concat(source.srcset).map((value, i) => !/^.* +\dx$/.test(value) ? `${value} ${i + 1}x` : value)
    return source
  })
}

export async function getImageSize (url) {
  if (!imageCache.has(url)) {
    const { width, height } = await getSize(url)
    imageCache.set(url, { width, height })
  }
  return imageCache.get(url)
}

export async function getImageSizeOfSrc (url) {
  if (!imageCache.has(url)) {
    const { width, height } = await getSize(url)
    imageCache.set(url, { width, height })
  }
  return imageCache.get(url)
}

export function getImageSizeOfSrcset (list) {
  const config = srcset.parse(list.join(','))
  return getImageSizeOfSrc(config[0].url)
}

async function getSize (url) {
  if (process.server) {
    try {
      const sizeOf = (await import('buffer-image-size')).default
      const buffer = await getBuffer(url)
      return sizeOf(buffer)
    } catch (e) {
      return {}
    }
  } else {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve({ width: img.width, height: img.height })
      img.src = url
    })
  }
}

async function getBuffer (url) {
  const result = await timeoutFetch(url, { method: 'GET' })
  const blob = await result.blob()
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}
