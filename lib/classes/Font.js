import { convertCamelToKebab } from '../utils/string'
import { encode as base64Encode } from '../utils//base64'

import { SEPARATOR, formatSelector, splitSelector } from '../utils/cssSelector'
import Critical from './Critical'

export const DEFAULT_SELECTOR = ''
export const DEFAULT_MEDIA_QUERY = 'all'

class MediaSelector {
  constructor (media = DEFAULT_MEDIA_QUERY, selectors = []) {
    this.media = media
    this.selectors = new Set([].concat(selectors))
  }

  addSelector (...args) {
    args.forEach(arg => this.selectors.add(arg))
    return this
  }
}

export default class Font {
  constructor (family, { style = 'normal', weight = 400, src }, critical = new Critical(), mediaSelectors = [], usedMediaSelectors) {
    this.family = family
    this.style = style
    this.weight = weight
    this.src = src
    this.critical = critical
    this.mediaSelectors = new Set([].concat(mediaSelectors))
    this.usedMediaSelectors = usedMediaSelectors || this.mediaSelectors
  }

  get currentMediaSelectors () {
    const mediaSelectors = Array.from(this.mediaSelectors)
    if (mediaSelectors.length < 1) {
      mediaSelectors.push(new MediaSelector(DEFAULT_MEDIA_QUERY, [DEFAULT_SELECTOR]))
    }
    return mediaSelectors
  }

  reset () {
    this.critical.set(false)
    this.mediaSelectors.clear()
    this.usedMediaSelectors = this.mediaSelectors
  }

  byMedia (media) {
    const selectors = Array.from(this.mediaSelectors).map(mediaSelector => Array.from(mediaSelector.selectors)).flat()
    if (selectors.length < 1) {
      selectors.push(DEFAULT_SELECTOR)
    }
    const mediaSelector = new MediaSelector(media, selectors)
    this.usedMediaSelectors.add(mediaSelector)
    return new Font(this.family, { style: this.style, weight: this.weight, src: this.src }, this.critical, [mediaSelector], this.usedMediaSelectors)
  }

  addSelector (selector) {
    const mediaSelector = new MediaSelector(this.currentMediaSelectors[0].media)
    mediaSelector.addSelector(...splitSelector(formatSelector(selector)))
    this.usedMediaSelectors.add(mediaSelector)
    return new Font(this.family, { style: this.style, weight: this.weight, src: this.src }, this.critical, [mediaSelector], this.usedMediaSelectors)
  }

  isCritical () {
    this.critical.set(true)
    return this
  }

  toJSON () {
    const { src } = this
    return this.currentMediaSelectors.map((mediaSelector) => {
      const className = this.getClassName(mediaSelector.media)
      return {
        hid: `${className}`,
        href: src,
        type: 'font/woff2',
        rel: 'preload',
        as: 'font',
        media: mediaSelector.media,
        crossorigin: 'anonymous'
      }
    })
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

  getCSSClasses (mediaSelector) {
    const selectors = this.getCSSSelectors(mediaSelector)
    const style = this.getStyleObject()
    const keys = Object.keys(style)
    return selectors.map((selector) => {
      const props = keys.map((key) => {
        return `${convertCamelToKebab(key)}: ${style[key]};`
      }).join(' ')
      return `${selector} { ${props} }`
    }).join(' \n')
  }

  getMediaWithClasses () {
    return this.currentMediaSelectors.map((mediaSelector) => {
      if (mediaSelector.media === DEFAULT_MEDIA_QUERY) {
        return this.getCSSClasses(mediaSelector) + '\n'
      }
      return `@media ${mediaSelector.media} { ${this.getCSSClasses(mediaSelector)}}\n`
    }).join('')
  }

  getCSSSelectors (mediaSelector) {
    return [Array.from(mediaSelector.selectors).map((selector) => {
      return `.${this.getClassName(mediaSelector.media, selector)} ${selector}`.trim()
    }).join(SEPARATOR)]
  }

  getClassNames () {
    return Array.from(this.currentMediaSelectors.map((mediaSelector) => {
      return Array.from(mediaSelector.selectors).map(selector => this.getClassName(mediaSelector.media, selector))
    })).flat()
  }

  getClassName (media, selector = '') {
    let prefix = []
    media !== DEFAULT_MEDIA_QUERY && prefix.push(media)
    selector !== DEFAULT_SELECTOR && prefix.push(selector)

    if (prefix.length > 0) {
      prefix = base64(`${prefix.join('-')}`).toLowerCase().replace(/[^\w-_]/g, '')
    }

    return `font-${this.family.toLowerCase().replace(' ', '-')}-${this.weight}-${this.style}${prefix}`
  }
}

function base64 (data) {
  if (data) {
    return '-'.concat(base64Encode(data))
  }
  return ''
}
