import { toHashHex } from '../utils/string'

export default class FontCollection {
  constructor () {
    this.list = []
  }

  add (vnode, fonts) {
    const rootSelector = `data-f${toFontHex(vnode.tag, JSON.stringify(fonts))}`
    this.list = [].concat(this.list).concat(fonts.map((font) => {
      font.setRootSelector(rootSelector)
      return font
    }))
    return rootSelector
  }

  getPreloadLinks (critical) {
    return this.list.map((font) => {
      if ((critical && process.server)) {
        return {
          hid: toHashHex(font.src),
          href: font.src,
          type: font.type,
          rel: 'preload',
          as: 'font',
          media: 'all',
          crossorigin: 'anonymous',
          callback: () => {}
        }
      }
      return {}
    })
  }

  getStyleTag () {
    if (this.list.length) {
      const cssText = this.list.map(font => font.getCSSText()).join(' ')
      return [{
        hid: toHashHex(cssText),
        type: 'text/css',
        cssText
      }]
    } else {
      return []
    }
  }

  // has to be declared -> https://github.com/vuex-orm/vuex-orm/issues/255
  toJSON () {
    return this.list
  }
}

function toFontHex (tag, fonts) {
  return toHashHex(`${tag}_${fonts}`).padStart(9, '-')
}
