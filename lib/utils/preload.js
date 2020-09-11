import { DEFAULT_MEDIA_QUERY } from '../classes/Font'

export function getPreloadsString (fonts) {
  let preloads = fonts.getCriticalFonts().map(font => font.toJSON()).flat()
  preloads = filterPreloadsByMedia(preloads)

  // uniq by hid
  preloads = uniqPreloads(preloads)

  preloads = Object.values(preloads).map(preloads => Object.values(preloads)).flat()

  return preloads.map((font) => {
    const attr = Object.keys(font).map(key => `${key}="${font[key]}"`).join(' ')
    return `<link ${attr}/>`
  }).join('')
}

function uniqPreloads (preloads) {
  return Object.values(preloads.reduce((result, preload) => {
    result[preload.media] = result[preload.media] || {}
    result[preload.media][preload.href] = preload
    return result
  }, {}))
}

/**
 * Remove unused default media definitions.
 */
function filterPreloadsByMedia (preloads) {
  preloads = preloads.reduce((result, preload) => {
    result[preload.href] = (result[preload.href] || [])
    result[preload.href].push(preload)
    return result
  }, {})
  return Object.keys(preloads).map((key) => {
    const fonts = preloads[key]
    const defaultMediaFonts = fonts.find(preload => preload.media === DEFAULT_MEDIA_QUERY)
    if (defaultMediaFonts) {
      return [defaultMediaFonts]
    }
    return fonts
  }).flat()
}
