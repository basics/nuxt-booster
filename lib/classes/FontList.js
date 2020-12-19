
import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = []) {
    this.list = list.map(item => new FontFamily(item))
  }

  getFont (family, weight = 400, style = 'normal', options) {
    return this.getFontFamilyVariance(family, weight, style, options)
  }

  getFontCSS () {
    return [
      ...Array.from(this.list).map(fontFamily => fontFamily.getCSSFontFaces()).flat()
    ].join(' ')
  }

  getFontStyleTag () {
    return `<style>${this.getFontCSS()}</style>`
  }

  getFontFamilyVariance (family, weight, style, options) {
    const fontFamily = this.list.find(definition => definition.family === family)
    if (!fontFamily) {
      throw new Error(`font family ${family} not found, please define in module options`)
    }
    return fontFamily.getFontVariance(weight, style, options)
  }
}
