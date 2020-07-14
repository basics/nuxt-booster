import { convertCamelToKebab } from '../utils/string'
import { encode as base64Encode } from '../utils//base64'

import { formatSelector, SEPARATOR } from '../utils/cssSelector'
import Critical from './Critical'

const DEFAULT_SELECTOR = ''

export default class Font {
  constructor (family, { style = 'normal', weight = 400, src }, critical = new Critical(), selector = []) {
    this.family = family
    this.style = style
    this.weight = weight
    this.src = src
    this.critical = critical
    this.selectors = new Set([].concat(selector))
  }

  reset () {
    this.critical.set(false)
    this.selectors = new Set()
  }

  bySelector (selector) {
    selector = formatSelector(selector).split(SEPARATOR).map((s) => {
      this.selectors.add(s.trim())
      return s
    })
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
        font-display: swap;
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
    }).join(' \n')
  }

  getCSSSelectors () {
    if (this.selectors.size < 1) {
      this.selectors.add(DEFAULT_SELECTOR)
    }
    return [Array.from(this.selectors).map((selector) => {
      return `.${this.getClassName(selector)} ${selector}`.trim()
    }).join(SEPARATOR)]
  }

  getClassNames () {
    return Array.from(this.selectors).map((selector) => {
      return this.getClassName(selector)
    })
  }

  getClassName (selector = '') {
    return `font-${this.family.toLowerCase().replace(' ', '-')}-${this.weight}-${this.style}${base64(selector).toLowerCase().replace(/[^\w-_]/g, '')}`
  }
}

function base64 (data) {
  let prefix = ''
  if (data) {
    prefix = '-'
  }
  return prefix + base64Encode(data)
}
