import type {
  FontOption,
  FontVarianceOption,
  FontVarianceSourceOption
} from '../types';

const fontPrioritizationPreloadOrder = ['woff2', 'woff', 'truetype', 'svg'];
const fontDeclarationOrder = [
  'embedded-opentype',
  'woff2',
  'woff',
  'truetype',
  'svg'
];

export default class FontConfig {
  fonts: FontOption[];
  aliases: Record<string, string>;

  constructor(fonts: FontOption[], aliases: Record<string, string>) {
    this.fonts = fonts;
    this.aliases = aliases;
  }

  toJSON() {
    return this.fonts.map(font => ({
      ...font,
      variances: getVariances(font, this.aliases)
    })) as FontOption[];
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

function getVariances(font: FontOption, aliases: Record<string, string>) {
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
  variance: FontVarianceOption
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

function getPrioritizedFontPreloadSource(sources: FontVarianceSourceOption[]) {
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
  sources: FontVarianceSourceOption[],
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
