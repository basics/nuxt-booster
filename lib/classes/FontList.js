import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = []) {
    this.list = list.map(item => new FontFamily(item))
  }

  reset () {
    this.list.map(result => result.get()).flat().forEach((font) => {
      font.critical = false
      font.used = false
      font.view = null
      font.layout = false
    })
  }

  resetByViewKey (view) {
    this.list.map(result => result.get()).flat().filter(font => !font.layout && font.view === view).forEach((font) => {
      font.critical = false
      font.used = false
      font.view = null
    })
  }

  getFonts () {
    return this.list.map(result => result.get()).flat()
  }

  getCriticalFonts () {
    return this.list.map(result => result.getCritical()).flat()
  }

  getUsedFonts () {
    return this.list.map(result => result.getUsed()).flat()
  }

  getFont (family, weight = 400, style = 'normal') {
    return getFontsBy(this.list, { family, variance: [{ weight, style }] })[0]
  }

  registerFont (declaration, critical = false, view) {
    declaration.critical = declaration.critical || critical
    declaration.used = true
    declaration.view = view
    declaration.layout = declaration.layout || !view
  }

  getFontFamilies () {
    return this.list.reduce((result, item) => {
      if (item.getUsed().length) {
        result.push(item)
      }
      return result
    }, [])
  }

  getCSSDeclaration () {
    return `
      .font {
        --family: var(--font-family);
      }
    `
  }
}

function getFontsBy (list, font) {
  const result = list
    .filter(declaration => declaration.family === font.family)
    .map(result => result.getByDeclarations(font.variance)).flat()
  return result
}
