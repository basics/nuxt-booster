export function sortSrcset (srcset) {
  return [].concat(srcset).sort((a, b) => (a.density - b.density || a.width - b.width))
}
