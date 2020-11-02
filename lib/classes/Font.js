import { formatSelector, SEPARATOR, splitSelector } from '../utils/cssSelector'
import { convertCamelToKebab } from '../utils/string'
import { btoa } from '../utils/base64'

const DEFAULT_SELECTOR = ''
const DEFAULT_MEDIA = 'all'

export default class Font {
  constructor (family, weight = 400, style = 'normal', { critical, src, fallbackFamily }) {
    this.family = family
    this.style = style
    this.weight = weight
    this.src = src
    this.fallbackFamily = fallbackFamily
    this.critical = critical
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
    this.critical.set(true)
    return this
  }

  // #####

  getStyleObject (active) {
    if (active) {
      return {
        fontFamily: `'${this.family}'`
      }
    } else {
      return {
        fontFamily: this.fallbackFamily.join(', '),
        fontStyle: this.style,
        fontWeight: this.weight
      }
    }
  }

  getCSSClasses (media, active = false) {
    const selectors = this.getCSSSelectors(media, Array.from(this.selectors), active)
    const style = this.getStyleObject(active)
    const keys = Object.keys(style)
    return selectors.map((selector) => {
      const props = keys.map((key) => {
        return `${convertCamelToKebab(key)}: ${style[key]};`
      }).join(' ')
      return `${selector} { ${props} }`
    })
  }

  getMediaWithClasses () {
    return Array.from(this.medias).map((media) => {
      if (media === DEFAULT_MEDIA) {
        return [this.getCSSClasses(media), this.getCSSClasses(media, true)].join('\n')
      }
      return `@media ${media} { ${[this.getCSSClasses(media), this.getCSSClasses(media, true)].join('\n')}}\n`
    }).join('')
  }

  getCSSSelectors (media, selectors = Array.from(this.selectors), active) {
    return [Array.from(selectors).map((selector) => {
      return `.${this.getClassName(media, selector, active)} ${selector}`.trim()
    }).join(SEPARATOR)]
  }

  getClassNames (active) {
    return Array.from(Array.from(this.medias).map((media) => {
      return Array.from(this.selectors).map(selector => this.getClassName(media, selector, active))
    })).flat()
  }

  getClassName (media, selector = '', active) {
    let prefix = []
    active && prefix.push('active')
    media !== DEFAULT_MEDIA && prefix.push(media)
    selector !== DEFAULT_SELECTOR && prefix.push(selector)
    if (prefix.length > 0) {
      prefix = base64(`${prefix.join('-')}`).toLowerCase().replace(/[^\w-_]/g, '')
    }
    return `font-${this.family.toLowerCase().replace(' ', '-')}-${this.weight}-${this.style}${prefix}`
  }

  // Fallback

  getFallbackClassName (...args) {
    const PREFIX_CLASS_NAME_FALLBACK = 'fallback'
    return this.getClassName(...args) + '-' + PREFIX_CLASS_NAME_FALLBACK
  }

  getFallbackClassNames () {
    return Array.from(Array.from(this.medias).map((media) => {
      return Array.from(this.selectors).map(selector => this.getFallbackClassName(media, selector))
    })).flat()
  }
}

function base64 (data) {
  if (data) {
    return '-'.concat(btoa(data))
  }
  return ''
}
