// import Vue from 'vue'
import timeoutFetch from '../utils/timeoutFetch'
import path from 'path'

const dir = <%= JSON.stringify(options.dir) %>;
console.log('alias', dir)

export default (context, inject) => {
  console.log('toll', context.app.nuxt.fetch)
  inject('getImageSizeFromUrl', getImageSizeFromUrl)
}

async function getImageSizeFromUrl (url) {
  console.log('getImageSizeFromUrl', 'server')
  const sizeOf = (await import('buffer-image-size')).default
  let buffer = null
  try {
    buffer = await getBufferFromRemote(url)
  } catch (e) {
    buffer = await getBufferFromLocal(url)
  } finally {
    if(buffer) {
      return sizeOf(buffer)
    } else {
      return {width: 0, height: 0}
    }
  }
}

async function getBufferFromRemote (url) {
  const result = await timeoutFetch(url, { method: 'GET' })
  const blob = await result.blob()
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

async function getBufferFromLocal(url) {
  const fs = (await import('fs')).promises
  const fullUrl = resolvePath(url)
  console.log(fullUrl)
  // TODO: identify project src folder
  const data = await fs.readFile(fullUrl);
  return Buffer.from(data);
}

function resolvePath(url) {
  console.log(dir + '/' + path.relative(url.replace('/_nuxt/', ''), dir));
  console.log(dir, url)
  if(url.startsWith('/_nuxt')) {
    return url.replace('/_nuxt', alias)
  } else {
    return '/' + url
  }
}
