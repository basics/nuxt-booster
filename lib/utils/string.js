export function convertCamelToKebab (value) {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

export function getRandomHash (count = 8) {
  return Math.random().toString(36).slice(-(count))
}
