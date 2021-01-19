export function createSVGPlaceholder (sources, getResources, critical) {
  return Promise.all(sources.map(async (source) => {
    const [{ url }, sizes, meta] = await getResources(source)
    const image = `<image href="${meta.placeholder}" width="${meta.width}" height="${meta.height}"/>`
    return createSVG(url, meta.width, meta.height, getMinMaxSize(sizes), critical && image)
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
  return {
    size,
    media: size.min.media,
    breakpoint: size.min.breakpoint,
    width: size.max.width,
    url
  }
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
  return {
    min: sortedSizes.shift(),
    max: sortedSizes.pop()
  }
}

function sortByWidth (list) {
  return list.sort((a, b) => a.width < b.width ? 1 : -1)
}
