import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = []) {
    this.list = list.map(item => new FontFamily(item))
  }

  reset () {
    this.list.map(result => result.get()).flat().forEach(font => font.reset())
  }

  getFont (family, weight = 400, style = 'normal') {
    return getFontsBy(this.list, { family, variance: [{ weight, style }] })[0]
  }

  getFonts () {
    return this.list.map(result => result.get()).flat()
  }

  getCriticalFonts () {
    return this.list.map(result => result.getCritical()).flat()
  }
}

function getFontsBy (list, font) {
  const result = list
    .filter(declaration => declaration.family === font.family)
    .map(result => result.getByDeclarations(font.variance)).flat()
  return result
}
