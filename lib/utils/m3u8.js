import { encode } from './base64'
const dataHeader = 'data:application/vnd.apple.mpegURL;base64,'
// const dataHeader = 'data:application/x-mpegurl;base64,'

export async function adapt (url, orientation) {
  const content = await loadFile(url)
  const baseUrl = getAbsoluteUrl(url, window.location.href)
  const result = adaptSources(content, orientation, baseUrl)
  return `${dataHeader}${encode(result)}`
}

async function loadFile (url) {
  return (await fetch(url)).text()
}

function getAbsoluteUrl (url, origin) {
  return new global.URL(url, origin)
}

function adaptSources (content, orientation, baseUrl) {
  const result = content.replace(/^#EXT.*RESOLUTION=(\d+)x(\d+).*[\s]?[^.]*\.m3u8.*\s/gm, (match, width, height) => {
    if (orientation === getOrientation(width, height)) {
      return match
    }
    return ''
  })
  return adaptUrlsInSources(result, baseUrl)
}

function getOrientation (width, height) {
  const videoRatio = width / height
  return (videoRatio - 1) / Math.abs(videoRatio - 1)
}

function adaptUrlsInSources (content, baseUrl) {
  return content.replace(/([\w/-]*.m3u8)/gm, (match) => {
    return getAbsoluteUrl(match, baseUrl).href
  })
}
