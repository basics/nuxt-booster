import timeoutFetch from './timeoutFetch'

const imageCache = new Map()

export async function getImageSize (url) {
  if (!imageCache.has(url)) {
    const { width, height } = await getSize(url)
    imageCache.set(url, { width, height })
  }
  return imageCache.get(url)
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
