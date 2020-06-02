export default class Font {
  constructor (family, { style = 'normal', weight = 400, src }) {
    this.family = family
    this.style = style
    this.weight = weight
    this.src = src
    this.critical = false
  }

  toJSON () {
    const { weight, style, src } = this
    const family = this.family.toLowerCase().replace(' ', '-')
    return {
      'data-font-family': this.family,
      'data-font-weight': weight,
      'data-font-style': style,
      hid: `${family}-${weight}-${style}`,
      href: src,
      type: 'font/woff2',
      rel: 'preload',
      as: 'font',
      crossorigin: 'anonymous'
      // onload: `document.documentElement.classList.add("${family}", "${family}-${weight}", "${family}-${style}", "${family}-${weight}-${style}")`
    }
  }

  toCSSVars () {
    return {
      '--font-family': `'${this.family}'`,
      '--font-weight': String(this.weight),
      '--font-style': this.style
    }
  }

  toCSSFontFace () {
    return `
      @font-face {
        font-family: '${this.family}';
        font-style: ${this.style};
        font-weight: ${this.weight};
        font-display: fallback;
        src: url(${this.src}) format('woff2');
      }
    `
  }
}
