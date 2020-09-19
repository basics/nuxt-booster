import Critical from './Critical'
import Font from './Font'

export default class FontFamily {
  constructor (config) {
    this.fallback = config.fallback
    this.family = config.family
    this.className = this.family.toLowerCase().replace(' ', '-')
    this.fallback = config.fallback
    this.variances = this.prepareVariances(config.variances)
  }

  prepareVariances (variances) {
    return variances.map((variance) => {
      variance = Object.assign({
        style: 'normal',
        weight: 400
      }, variance, {
        critical: new Critical()
      })
      return variance
    })
  }

  reset () {
    this.variances.forEach(({ critical }) => critical.set(false))
  }

  getFontVariance (weight, style) {
    const { src, critical } = this.variances.find(variance => variance.weight === weight && variance.style === style)
    return new Font(this.family, weight, style, { critical, src, fallbackFamily: this.fallback })
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
