import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = []) {
    this.list = list.map(item => new FontFamily(item))
    this.definitions = new Set()
  }

  reset () {
    this.list.forEach(fontFamily => fontFamily.reset())
    this.definitions.clear()
  }

  getFont (family, weight = 400, style = 'normal') {
    const fontVariance = this.getFontFamilyVariance(family, weight, style)
    this.addDefinition(fontVariance)
    return fontVariance
  }

  getFontFamilies () {
    return Array.from(this.list)
  }

  getDefinitions () {
    return Array.from(this.definitions)
  }

  addDefinition (definition) {
    this.definitions.add(definition)
  }

  getFontFamilyVariance (family, weight, style) {
    const fontFamily = this.list.find(definition => definition.family === family)
    if (!fontFamily) {
      throw new Error(`font family ${family} not found, please define in module options`)
    }
    return fontFamily.getFontVariance(weight, style)
  }
}
