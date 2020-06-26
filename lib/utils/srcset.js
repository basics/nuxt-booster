export function sortSrcset (srcset) {
  return srcset.sort((a, b) => (a.density - b.density || a.width - b.width))
}
