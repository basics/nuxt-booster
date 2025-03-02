import type {
  FontOption,
  FontOptionVariance,
  FontOptionVarianceSource,
  PreparedFontOption
} from '../module';

const fontPrioritizationPreloadOrder = ['woff2', 'woff', 'truetype', 'svg'];
const fontDeclarationOrder = [
  'embedded-opentype',
  'woff2',
  'woff',
  'truetype',
  'svg'
];

export default class FontConfig {
  fonts: PreparedFontOption[];
  aliases: Record<string, string>;

  constructor(fonts: PreparedFontOption[], aliases: Record<string, string>) {
    this.fonts = fonts;
    this.aliases = aliases;
  }

  toJSON() {
    return this.fonts.map(font => ({
      ...font,
      variances: getVariances(font, this.aliases)
    })) as PreparedFontOption[];
  }

  toCSS() {
    return [
      ...Array.from(this.fonts)
        .map((font: FontOption) => {
          return font.variances.map(variance =>
            getFontFaceDeclaration(font, variance)
          );
        })
        .flat()
    ].join(' ');
  }
}

function getVariances(
  font: PreparedFontOption,
  aliases: Record<string, string>
) {
  return font.variances.map(variance => {
    variance = { ...variance };
    const source = getPrioritizedFontPreloadSource(variance.sources);
    if (
      source &&
      Object.keys(aliases).find(alias => source.src.startsWith(alias))
    ) {
      variance.src = source.src;
      variance.type = source.type;
    }
    return variance;
  });
}

function getFontFaceDeclaration(
  font: FontOption,
  variance: FontOptionVariance
) {
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

function getPrioritizedFontPreloadSource(sources: FontOptionVarianceSource[]) {
  return [
    ...sources.sort(function (a, b) {
      return (
        fontPrioritizationPreloadOrder.indexOf(a.type) -
        fontPrioritizationPreloadOrder.indexOf(b.type)
      );
    })
  ].shift();
}

function getPrioritizedFontSources(
  sources: FontOptionVarianceSource[],
  locals: string[] = []
) {
  return locals
    .map(local => `local('${local}')`)
    .concat(
      sources
        .sort(function (a, b) {
          return (
            fontDeclarationOrder.indexOf(a.type) -
            fontDeclarationOrder.indexOf(b.type)
          );
        })
        .map(source => {
          return `url('${source.src}') format('${source.type}')`;
        })
    )
    .join(',');
}
