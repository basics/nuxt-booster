import FontFamily from './FontFamily'
import { DEFAULT_SELECTOR } from './Font'

export default class FontList {
  constructor (list = []) {
    this.list = list.map(item => new FontFamily(item))
  }

  reset () {
    this.list.map(result => result.get()).flat().forEach(font => font.reset())
  }

  getFont (family, weight = 400, style = 'normal') {
    const font = getFontsBy(this.list, { family, variance: [{ weight, style }] })[0]
    font.currentMediaSelectors[0].selectors.add(DEFAULT_SELECTOR)
    return font
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
