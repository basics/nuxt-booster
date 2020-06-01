import Font from './Font'

export default class FontFamily {
  constructor (config) {
    this.family = config.family
    this.variance = config.variance.map((item) => {
      return new Font(this.family, item)
    })
  }

  getCriticalDeclarations (declarations) {
    return this.variance.filter((font) => {
      return font.critical
    })
  }

  getDeclaration (declarations) {
    return declarations
      .map((declaration) => {
        return this.variance.filter((font) => {
          return font.style === declaration.style && String(font.weight) === String(declaration.weight) && (!('required' in declaration) || declaration.required)
        })
      })
      .flat()
  }
}
