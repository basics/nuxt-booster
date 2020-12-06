import Deferred from 'nuxt-speedkit/classes/Deferred'
import { btoa } from '../utils/base64'

export default class Font {
  #rootSelector
  constructor (family, weight = 400, style = 'normal', { src, fallbackFamily }, { media, selector }) {
    this.family = family
    this.style = style
    this.weight = weight
    this.src = src
    this.type = `font/${src.split('.').pop()}`
    this.fallbackFamily = fallbackFamily
    this.#rootSelector = ''
    this.selector = selector || ''
    this.media = media || null
    this.loaded = new Deferred()
  }

  async load () {
    if (!global.document.fonts.check(`${this.style} ${this.weight} 12px '${this.family}'`)) {
      const result = Array.from(global.document.fonts.keys()).find((f) => {
        return f.family === this.family && f.style === this.style && f.weight === String(this.weight)
      })
      await result.load()
    }
  }

  getKey () {
    return btoa(JSON.stringify(this))
  }

  getCSSText () {
    const selector = createSelector(this.#rootSelector, this.selector)
    return wrapByMedia(`${selector} {
        font-family: ${this.fallbackFamily.join(', ')};
        font-weight: ${this.weight};
        font-style: ${this.style};
      }
      .font-active${selector} {
        font-family: ${[`"${this.family}"`].concat(this.fallbackFamily).join(',')};
      }`, this.media)
  }

  setRootSelector (rootSelector) {
    this.#rootSelector = rootSelector
  }
}

function createSelector (rootSelector, selector) {
  return selector.split(',').map((selector) => {
    return `[${rootSelector}] ${selector.trim()}`
  }).join(',')
}

function wrapByMedia (style, media) {
  return (media && `@media ${media} { ${style} }`) || style
}
