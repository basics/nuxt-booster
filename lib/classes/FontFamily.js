import Font from './Font'

export default class FontFamily {
  constructor (config) {
    this.family = config.family
    this.className = this.family.toLowerCase().replace(' ', '-')
    this.fallback = config.fallback.map(family => `'${family}'`)
    this.variances = config.variances
  }

  getFontVariance (weight, style) {
    const { src } = this.variances.find(variance => variance.weight === weight && variance.style === style)
    return new Font(this.family, weight, style, src)
  }

  getCSSFontFaces () {
    return this.variances.map((variance) => {
      return `
      @font-face {
        font-family: '${this.family}';
        font-style: ${variance.style};
        font-weight: ${variance.weight};
        font-display: swap;
        src: url(${variance.src}) format('woff2');
      }
    `
    })
  }
}
