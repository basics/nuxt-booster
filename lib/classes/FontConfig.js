const fontPrioritizationPreloadOrder = ['woff2', 'woff', 'truetype', 'svg'];
const fontDeclarationOrder = ['embedded-opentype', 'woff2', 'woff', 'truetype', 'svg'];

module.exports = class FontConfig {
  constructor (fonts, aliases) {
    this.fonts = fonts;
    this.aliases = aliases;
  }

  toJSON () {
    return JSON.stringify(this.fonts.map(font => Object.assign({}, font, {
      variances: getVariances(font, this.aliases)
    }))).replace(/"require\(\\"([^)]+)\\"\)"/g, 'require("$1")');
  }

  toCSS () {
    return [
      ...Array.from(this.fonts).map((font) => {
        return font.variances.map(variance => getFontFaceDeclaration(font, variance));
      }).flat()
    ].join(' ');
  }
};

function getVariances (font, aliases) {
  return font.variances.map((variance) => {
    variance = Object.assign({}, variance);
    const source = getPrioritizedFontPreloadSource(variance.sources);
    // TODO: How do you deal with absolute paths, without webpack? (e.g. /fonts/…)
    if (Object.keys(aliases).find(alias => source.src.startsWith(alias))) {
      variance.src = `require("${source.src}")`;
      variance.type = source.type;
    }
    return variance;
  });
}

function getFontFaceDeclaration (font, variance) {
  return `
    @font-face {
      font-family: '${font.family}';
      font-style: ${variance.style};
      font-weight: ${variance.weight};
      font-display: swap;
      src: ${getPrioritizedFontSources(variance.sources, font.locals)};
    }
  `;
}

function getPrioritizedFontPreloadSource (sources) {
  return [...sources.sort(function (a, b) {
    return fontPrioritizationPreloadOrder.indexOf(a.type) - fontPrioritizationPreloadOrder.indexOf(b.type);
  })].shift();
}

function getPrioritizedFontSources (sources, locals = []) {
  return locals.map(local => `local('${local}')`).concat(
    sources.sort(function (a, b) {
      return fontDeclarationOrder.indexOf(a.type) - fontDeclarationOrder.indexOf(b.type);
    }).map((source) => {
      return `url('${source.src.replace(/@\//, '~')}') format('${source.type}')`;
    })).join(',');
}
