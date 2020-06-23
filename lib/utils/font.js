const fontCache = new Map()

export function loadFont (font) {
  if (!fontCache.has(font.src)) {
    fontCache.set(font.src, new Promise((resolve) => {
      // global.requestIdleCallback(() => {
      resolve(font.load())
      // })
    }))
  }
  return fontCache.get(font.src)
}
