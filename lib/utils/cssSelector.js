export function selectorExists (selector) {
  return getAllSelectors().find(sel => sel === selector || splitSelector(sel).includes(selector))
}

function getAllSelectors () {
  const ret = []
  for (let i = 0; i < document.styleSheets.length; i++) {
    const rules = getCSSRules(document.styleSheets[i].rules || document.styleSheets[i].cssRules)
    for (const x in rules) {
      if (typeof rules[x].selectorText === 'string') { ret.push(rules[x].selectorText) }
    }
  }
  return ret
}

function getCSSRules (rules) {
  return Array.from(rules).map((rule) => {
    if (rule instanceof CSSMediaRule) {
      return Array.from(rule.rules || rule.cssRules)
    } else {
      return [rule]
    }
  }).flat()
}

export const SEPARATOR = ', '

export function formatSelector (selector, separator = SEPARATOR) {
  return splitSelector(String(selector).replace(/ {2}/g, '')).join(separator)
}

export function splitSelector (selector) {
  return selector.split(',').map(s => s.trim())
}
