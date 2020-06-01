import FontFamily from './FontFamily'

export default class FontList {
  constructor (list = []) {
    this.list = list.map(item => new FontFamily(item))
  }

  getCriticalFontDeclarations () {
    return this.list
      .map(result => result.getCriticalDeclarations())
      .flat()
      .map((font) => {
        return font.toJSON()
      })
  }

  getFont (family, weight = 400, style = 'normal') {
    const declarations = getFontDeclarations(this.list, { family, variance: [{ weight, style }] })
    const result = []
    declarations.forEach((declaration) => {
      declaration.critical = true
      result.push({ name: 'family', value: declaration.family })
      result.push({ name: 'weight', value: declaration.weight })
      result.push({ name: 'style', value: declaration.style })
    })
    return result
  }
}

function getFontDeclarations (list, font) {
  const result = list
    .filter(declaration => declaration.family === font.family)
    .map(result => result.getDeclaration(font.variance)).flat()
  return result
}
