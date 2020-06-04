import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = [], canBeCritical = false) {
    this.canBeCritical = canBeCritical
    this.list = list.map(item => new FontFamily(item))
  }

  reset () {
    this.list.map(result => result.get()).flat().forEach((font) => {
      font.critical = false
      font.used = false
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
    return getFontsBy(this.list, { family, variance: [{ weight, style }] })
      .reduce((result, declaration) => registerFont(result, declaration, this.canBeCritical), { style: {} })
  }

  getFontFamilies () {
    return this.list.map(item => item)
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

function registerFont (result, declaration, canBeCritical) {
  declaration.critical = canBeCritical || declaration.critical
  declaration.used = true
  return declaration
}
