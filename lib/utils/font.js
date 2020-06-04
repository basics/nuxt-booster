const fontCache = new Map()

export async function loadFont (font) {
  if (!fontCache.has(font.src)) {
    await new Promise((resolve) => {
      global.requestIdleCallback(() => {
        resolve(font.load())
      })
    })
    fontCache.set(font.src, true)
  }
}
