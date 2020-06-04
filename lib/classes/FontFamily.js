import Font from './Font'

export default class FontFamily {
  constructor (config) {
    this.family = config.family
    this.className = this.family.toLowerCase().replace(' ', '-')
    this.fallback = config.fallback.map(family => `'${family}'`)
    this.variance = config.variance.map((item) => {
      return new Font(this.family, item)
    })
  }

  get () {
    return this.variance.map(font => font)
  }

  getCritical () {
    return this.variance.filter(font => font.critical)
  }

  getUsed () {
    return this.variance.filter(font => font.used)
  }

  getByDeclarations (declarations) {
    return declarations
      .map(declaration =>
        this.variance.filter(font =>
          font.style === declaration.style &&
          String(font.weight) === String(declaration.weight)
          // && (!('required' in declaration) || declaration.required)
        )
      )
      .flat()
  }

  getCSSDeclaration () {
    return `
      .font-${this.className} {
        font-family: var(--family, ${this.fallback});
        font-style: var(--font-style, normal);
        font-weight: var(--font-weight, 400);
      }
    `
  }
}
