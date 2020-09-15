export default class FontFamily {
  constructor (config) {
    this.family = config.family
    this.className = this.family.toLowerCase().replace(' ', '-')
    this.fallback = config.fallback.map(family => `'${family}'`)
    this.variance = config.variance
  }

  getVariance (font) {
    return this.variance.find(variance => variance.weight === font.weight && variance.style === font.style)
  }

  getCSSFontFaces () {
    return this.variance.map((variance) => {
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
