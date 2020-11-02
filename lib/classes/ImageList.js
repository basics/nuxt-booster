export default class ImageList {
  constructor () {
    this.list = new Set()
  }

  getPreloadString () {
    return Array.from(this.list).reduce((result, source) => {
      if (source) {
        result.push(`<link rel="preload" as="image" crossorigin imagesrcset="${source.srcset}">`)
      }
      return result
    }, []).join('\n')
  }

  add (source) {
    this.list.add(source)
  }

  reset () {
    this.list.clear()
  }
}
