export default class ImageList {
  list = new Set();

  getPreloadTags () {
    return Array.from(this.list).map(path => ({
      // hid: `${className}`,
      href: path,
      type: 'font/woff2',
      rel: 'preload',
      as: 'image',
      // media,
      crossorigin: 'anonymous'
    }))
  }

  add (sources) {
    sources = sources.map(source => Object.assign({ density: 1 }, source)).filter(source => source.density === 1)
    this.list.add(sources)
  }

  reset () {
    this.list.clear()
  }
}
