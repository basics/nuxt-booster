export function createSVGPlaceholder (sources, getResources, critical) {
  return Promise.all(sources.map(async (source) => {
    const [{ url }, sizes, { placeholder, width, height }] = await getResources(source)
    const image = `<image href="${placeholder}" width="${width}" height="${height}"/>`
    return createSVG(url, width, height, getMinMaxSize(sizes), critical && image)
  })).then(sortByWidth)
}

export function createURLPlaceholder (sources, getResources) {
  return Promise.all(sources.map(async (source) => {
    const [{ url }, sizes] = await getResources(source)
    return createSourceDescription(url, getMinMaxSize(sizes))
  }))
    .then(sortByWidth)
}

function createSourceDescription (url, size) {
  const { media, breakpoint } = size.min
  const { width } = size.max
  return { size, media, breakpoint, width, url }
}

function createSVG (url, width, height, size, image) {
  let ref = { ref: url }
  if (image) {
    ref = {
      ref: [
        'data:image/svg+xml',
        encodeURI(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${image}</svg>
      `.trim())
      ].join(',')
    }
  }
  return Object.assign(createSourceDescription(url, size), ref)
}

function getMinMaxSize (sizes) {
  const sortedSizes = sizes.sort((a, b) => a.width > b.width ? 1 : -1)
  const min = sortedSizes.shift()
  const max = sortedSizes.pop() || min
  return { min, max }
}

function sortByWidth (list) {
  return list.sort((a, b) => a.width < b.width ? 1 : -1)
}
