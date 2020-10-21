import fs from 'fs-extra'

const { resolve } = require('path')
const normalizeStylesheet = fs.readFileSync(resolve(__dirname, '../', './normalize.css'), 'utf-8')

export function getStyleString (fonts) {
  const style = [
    normalizeStylesheet,
    ...fonts.getFontFamilies().map(fontFamily => fontFamily.getCSSFontFaces()).flat(),
    ...fonts.getDefinitions().map(font => font.getMediaWithClasses())
  ]
  return `<style>${style.join(' ')}</style>`
}

export function getNoscriptStyleString () {
  return '<noscript><style>.noscript-hide {display: none;}</style></noscript>'
}

export function prepareFontConfig (fonts, alias) {
  return JSON.stringify(fonts.map((font) => {
    font.variance = font.variances.map((variance) => {
      // static or non-static asset
      if (isAliasPath(variance.src, alias)) {
        variance.src = `require("${variance.src}")`
      }
      return variance
    })
    return font
  }))
    .replace(/"require\(\\"([^)]+)\\"\)"/g, 'require("$1")')
}

function isAliasPath (path, aliases) {
  return Object.keys(aliases).find(alias => path.startsWith(alias))
}

export function getPreloadString (fonts) {
  return getPreloadTags(fonts.getDefinitions()).join('\n')
}

function getPreloadTags (fonts) {
  fonts = Array.from(fonts).filter(font => font.critical.get())

  return Array.from(getPreloadFonts(fonts).values()).map(([font]) => {
    return Array.from(font.medias).map((media) => {
      const className = font.getClassName(media)
      return {
        hid: `${className}`,
        href: font.src,
        type: 'font/woff2',
        rel: 'preload',
        as: 'font',
        media,
        crossorigin: 'anonymous'
      }
    })
  }).map(([font]) => {
    const attr = Object.keys(font).map(key => `${key}="${font[key]}"`).join(' ')
    return `<link ${attr}/>`
  })
}

function getPreloadFonts (fonts) {
  const groupedFonts = groupByFonts(fonts)
  groupedFonts.forEach((fonts, key, map) => {
    if ('all' in fonts) {
      map.set(key, [fonts.all.shift()])
    } else {
      map.set(key, Object.keys(fonts).map((key) => {
        return fonts[key].shift()
      }))
    }
  })
  return groupedFonts
}

function groupByFonts (fonts, flat) {
  const flatResult = new Map()
  const groupedByFamilies = groupBy(fonts, 'family')
  Object.keys(groupedByFamilies).reduce((result, family) => {
    // weight
    const groupedByWeight = groupBy(groupedByFamilies[family], 'weight')
    result[family] = Object.keys(groupedByWeight).reduce((result, weight) => {
    // style
      const groupedByStyle = groupBy(groupedByWeight[weight], 'style')
      result[weight] = Object.keys(groupedByStyle).reduce((result, style) => {
      // media
        result[style] = groupBy(groupedByStyle[style], 'medias')
        flatResult.set(`${family}_${weight}_${style}`, result[style])
        return result
      }, {})
      return result
    }, {})
    return result
  }, {})

  return flatResult
}

function groupBy (fonts, property) {
  return fonts.reduce((result, font) => {
    const key = [].concat(font[property] instanceof Set ? Array.from(font[property]) : font[property]).join('_')
    result[key] = result[key] || []
    result[key].push(font)
    return result
  }, {})
}
