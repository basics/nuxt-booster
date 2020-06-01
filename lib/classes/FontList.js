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
    return declarations.reduce((r, declaration) => {
      declaration.critical = true
      return declaration.toCSSVars()
    }, {})
  }

  getFontFaces () {
    return this.list
      .map(result => result.getCriticalDeclarations())
      .flat()
      .map((font) => {
        return font.getFontFace()
      })
  }
}

function getFontDeclarations (list, font) {
  const result = list
    .filter(declaration => declaration.family === font.family)
    .map(result => result.getDeclaration(font.variance)).flat()
  return result
}
