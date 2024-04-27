export function createPlaceholder(sources, getResources, critical) {
  return Promise.all(
    sources.map(async source => {
      const [{ url }, sizes, { placeholder }] = await getResources(source);
      return {
        ...createSourceDescription(url, getMinMaxSize(sizes)),
        dataURI: critical && placeholder
      };
    })
  ).then(sortByWidth);
}

export function createURLPlaceholder(sources, getResources) {
  return Promise.all(
    sources.map(async source => {
      const [{ url }, sizes] = await getResources(source);
      return createSourceDescription(url, getMinMaxSize(sizes));
    })
  ).then(sortByWidth);
}

function createSourceDescription(url, size) {
  const { media, breakpoint } = size.min;
  const { width } = size.max;
  return { size, media, breakpoint, width, url };
}

function getMinMaxSize(sizes) {
  const sortedSizes = Array.from(sizes).sort((a, b) =>
    a.width > b.width ? 1 : -1
  );
  const min = sortedSizes.shift();
  const max = sortedSizes.pop() || min;
  return { min, max };
}

function sortByWidth(list) {
  return list.sort((a, b) => (a.width < b.width ? 1 : -1));
}
