export default class ImageList {
  list = new Set();

  getPreloadString () {
    return getRelevantImages(this.list).map((image) => {
      return `<link rel="preload" as="image" crossorigin="crossorigin" imagesrcset="${image.srcset}">`
    })
  }

  add (sources) {
    sources = sources.map(source => Object.assign({ density: 1 }, source)).filter(source => source.density === 1)
    this.list.add(sources)
  }

  reset () {
    this.list.clear()
  }
}

function getRelevantImages (list) {
  return Array.from(list).map((sources) => {
    return sources.reduce((result, item) => {
      if (item.type === 'image/webp') {
        result = item
      } else if ((!result || result.type !== 'image/webp') && (item.type === 'image/jpeg' || item.type === 'image/jpg' || item.type === 'image/png')) {
        result = item
      }
      return result
    })
  })
}
