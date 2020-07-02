import sortMediaQueries from 'sort-media-queries'

export function sortByMediaQuery (sources) {
  sources = sources.map((source) => {
    source.media = source.media || 'all'
    return source
  })
  return sortMediaQueries(sources, 'media').reverse()
}

export function sortByType (sources, type) {
  return sources.sort((a, b) => {
    if (a.media === b.media && a.type === type) {
      return -1
    } else {
      return null
    }
  })
}
