import Font from './Font'

export default class FontFamily {
  constructor (config) {
    this.fallback = config.fallback
    this.family = config.family
    this.className = this.family.toLowerCase().replace(' ', '-')
    this.fallback = config.fallback
    this.variances = config.variances.map((variance) => {
      return Object.assign({
        style: 'normal',
        weight: 400
      }, variance)
    })
  }

  getFontVariance (weight, style, options = { selector: null, media: null }) {
    const { src } = this.variances.find(variance => variance.weight === weight && variance.style === style)
    return new Font(this.family, weight, style, { src, fallbackFamily: this.fallback }, options)
  }

  getCSSFontFaces () {
    return this.variances.map((variance) => {
      return `
      @font-face {
        font-family: '${this.family}';
        font-style: ${variance.style};
        font-weight: ${variance.weight};
        font-display: swap;
        src: url(${variance.src.replace(/@\//, '~')}) format('woff2');
      }
    `
    })
  }
}
