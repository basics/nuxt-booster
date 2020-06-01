export default class Font {
  constructor (family, { style = 'normal', weight = 300, src }) {
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
}
