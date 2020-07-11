export function selectorExists (selector) {
  const selectors = getAllSelectors()
  for (let i = 0; i < selectors.length; i++) {
    if (selectors[i] === selector) { return true }
  }
  return false
}

function getAllSelectors () {
  const ret = []
  for (let i = 0; i < document.styleSheets.length; i++) {
    const rules = document.styleSheets[i].rules || document.styleSheets[i].cssRules
    for (const x in rules) {
      if (typeof rules[x].selectorText === 'string') { ret.push(rules[x].selectorText) }
    }
  }
  return ret
}

export const SEPARATOR = ', '

export function formatSelector (selector, separator = SEPARATOR) {
  return String(selector).replace(/ {2}/g, '').split(',').map(s => s.trim()).join(separator)
}
