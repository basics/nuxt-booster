import sortMediaQueries from 'sort-media-queries'

export function sortByMediaQuery (sources) {
  sources = sources.map((source) => {
    source.media = source.media || 'all'
    return source
  })
  return sortMediaQueries(sources, 'media').reverse()
}
