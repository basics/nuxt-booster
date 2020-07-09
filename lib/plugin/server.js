// import Vue from 'vue'
import timeoutFetch from '../utils/timeoutFetch'

export default (context, inject) => {
  inject('getImageSizeFromUrl', getImageSizeFromUrl)
}

async function getImageSizeFromUrl (url) {
  console.log('getImageSizeFromUrl', 'server')
  try {
    const sizeOf = (await import('buffer-image-size')).default
    const buffer = await getBuffer(url)
    return sizeOf(buffer)
  } catch (e) {
    return { width: 480, height: 480 }
  }
}

async function getBuffer (url) {
  const result = await timeoutFetch(url, { method: 'GET' })
  const blob = await result.blob()
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}
