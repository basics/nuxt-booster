import { formatSelector, SEPARATOR, splitSelector } from '../utils/cssSelector'
import { convertCamelToKebab } from '../utils/string'
import { encode as base64Encode } from '../utils/base64'

const DEFAULT_SELECTOR = ''
const DEFAULT_MEDIA = 'all'

export default class Font {
  constructor ({ family, weight = 400, style = 'normal' }, src) {
    this.family = family
    this.style = style
    this.weight = weight
    this.src = src
    this.critical = false
    this.selectors = new Set([DEFAULT_SELECTOR])
    this.medias = new Set([DEFAULT_MEDIA])
  }

  addSelector (selector) {
    selector = splitSelector(formatSelector(selector))
    this.selectors.delete(DEFAULT_SELECTOR)
    selector.forEach(selector => this.selectors.add(selector))
    return this
  }

  addMedia (...media) {
    this.medias.delete(DEFAULT_MEDIA)
    media.forEach(media => this.medias.add(media))
    return this
  }

  isCritical () {
    this.critical = true
    return this
  }

  // #####

  getStyleObject () {
    return {
      fontFamily: `'${this.family}'`,
      fontStyle: this.style,
      fontWeight: this.weight
    }
  }

  getCSSClasses (media) {
    const selectors = this.getCSSSelectors(media)
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
    return Array.from(this.medias).map((media) => {
      if (media === DEFAULT_MEDIA) {
        return this.getCSSClasses(media) + '\n'
      }
      return `@media ${media} { ${this.getCSSClasses(media)}}\n`
    }).join('')
  }

  getCSSSelectors (media, selectors = Array.from(this.selectors)) {
    return [Array.from(selectors).map((selector) => {
      return `.${this.getClassName(media, selector)} ${selector}`.trim()
    }).join(SEPARATOR)]
  }

  getClassNames () {
    return Array.from(Array.from(this.medias).map((media) => {
      return Array.from(this.selectors).map(selector => this.getClassName(media, selector))
    })).flat()
  }

  getClassName (media, selector = '') {
    let prefix = []
    media !== DEFAULT_MEDIA && prefix.push(media)
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
