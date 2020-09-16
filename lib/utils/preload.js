
export function getPreloadTags (fonts) {
  fonts = Array.from(fonts).filter(font => font.critical)

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
