import Font from './Font'
import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = []) {
    this.list = list.map(item => new FontFamily(item))
    this.definitions = new Set()
  }

  reset () {
    this.definitions.clear()
  }

  getFont (family, weight = 400, style = 'normal') {
    const options = { family, weight, style }
    const { src } = this.getFontFamily(options).getVariance(options)
    const font = new Font(options, src)
    this.addDefinition(font)
    return font
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

  getFontFamily (font) {
    return this.list.find(definition => definition.family === font.family)
  }
}
