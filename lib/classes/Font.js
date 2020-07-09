import { convertCamelToKebab } from '../utils/string'
import Critical from './Critical'

const DEFAULT_SELECTOR = ''

export default class Font {
  constructor (family, { style = 'normal', weight = 400, src }, critical = new Critical(), selector = DEFAULT_SELECTOR) {
    this.family = family
    this.style = style
    this.weight = weight
    this.src = src
    this.critical = critical
    this.selectors = new Set([selector])
  }

  reset () {
    this.critical.set(false)
    this.selectors = new Set([DEFAULT_SELECTOR])
  }

  bySelector (selector) {
    this.selectors.add(selector)
    return new Font(this.family, { style: this.style, weight: this.weight, src: this.src }, this.critical, selector)
  }

  isCritical () {
    this.critical.set(true)
    return this
  }

  toJSON () {
    const { src } = this
    const className = this.getClassName()
    return {
      hid: `${className}`,
      href: src,
      type: 'font/woff2',
      rel: 'preload',
      as: 'font',
      crossorigin: 'anonymous'
    }
  }

  getCSSFontFace () {
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

  getStyleObject () {
    return {
      fontFamily: `'${this.family}'`,
      fontStyle: this.style,
      fontWeight: this.weight
    }
  }

  getCSSClasses (selectors = this.getCSSSelectors()) {
    const style = this.getStyleObject()
    const keys = Object.keys(style)

    return selectors.map((selector) => {
      const props = keys.map((key) => {
        return `${convertCamelToKebab(key)}: ${style[key]};`
      }).join(' ')
      return `${selector} { ${props} }`
    }).join(' ')
  }

  getCSSSelectors () {
    return Array.from(this.selectors).map((selector) => {
      return `.${this.getClassName(selector)} ${selector}`.trim()
    })
  }

  getClassNames () {
    return Array.from(this.selectors).map((selector) => {
      return this.getClassName(selector)
    })
  }

  getClassName (selector = '') {
    return `font-${this.family.toLowerCase().replace(' ', '-')}-${this.weight}-${this.style}${base64(selector).replace(/=/g, '')}`
  }
}

function base64 (data) {
  let prefix = ''
  if (data) {
    prefix = '-'
  }
  if ('btoa' in global) {
    return prefix + global.btoa(data)
  } else {
    return prefix + Buffer.from(data).toString('base64')
  }
}
