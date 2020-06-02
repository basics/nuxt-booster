import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = [], canBeCritical = false) {
    this.canBeCritical = canBeCritical
    this.list = list.map(item => new FontFamily(item))
  }

  reset () {
    this.list.map(result => result.get()).flat().forEach((font) => {
      font.critical = false
    })
  }

  getFonts () {
    return this.list.map(result => result.get()).flat()
  }

  getCriticalFonts () {
    return this.list.map(result => result.getCritical()).flat()
  }

  getFont (family, weight = 400, style = 'normal') {
    return getFonts(this.list, { family, variance: [{ weight, style }] })
      .reduce((r, declaration) => {
        declaration.critical = this.canBeCritical
        r.style = declaration.toCSSVars()
        r.class = declaration.getFamilyAsClassName()
        return r
      }, { style: {} })
  }

  getFontFamilies () {
    return this.list.map(item => item)
  }

  getCSSDeclaration () {
    return `
      .font {
        --font-family: var(--family);
        --font-weight: var(--weight);
        --font-style: var(--height)
      }
    `
  }
}

function getFonts (list, font) {
  const result = list
    .filter(declaration => declaration.family === font.family)
    .map(result => result.getByDeclarations(font.variance)).flat()
  return result
}
