const fontCache = new Map()

export function loadFont (font) {
  if (!fontCache.has(font.src) && !font.critical) {
    fontCache.set(font.src, new Promise((resolve) => {
      // global.requestIdleCallback(() => {
      resolve(font.load())
      // })
    }))
  }
  return fontCache.get(font.src)
}

export function registerFont (vnode, value, critical) {
  vnode.context.$fonts.registerFont(value, critical, vnode.context.$vnode.data.key)
}
