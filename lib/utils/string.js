export function convertCamelToKebab (value) {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

export function getRandomHash (count = 8) {
  return Math.random().toString(36).slice(-(count))
}

export function convertToHashCode (value) {
  let hash = 0
  if (value.length === 0) { return hash }
  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}
