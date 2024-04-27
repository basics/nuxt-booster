import { btoa } from '../utils/base64';
import Deferred from './Deferred';

export default class Font {
  rootSelector;
  constructor(
    family,
    { src, type, fallbackFamily },
    { media, selector },
    weight = 400,
    style = 'normal'
  ) {
    this.family = family;
    this.style = style;
    this.weight = weight;
    this.src = src;
    this.type = `font/${type}`;
    this.fallbackFamily = fallbackFamily;
    this.rootSelector = '';
    this.selector = selector || '';
    this.media = media || null;
    this.loaded = new Deferred();
  }

  async load() {
    const fonts =
      'fonts' in window.document && (await window.document.fonts.ready);
    if (
      fonts &&
      !fonts.check(`${this.style} ${this.weight} 12px '${this.family}'`)
    ) {
      const result = Array.from(fonts).find(f => {
        return (
          fontFamilyNormalize(f.family) === this.family &&
          f.style === this.style &&
          weightNormalize(f.weight) === weightNormalize(this.weight)
        );
      });
      await result.load();
    }
  }

  getKey() {
    const data = { ...this };
    // Remove `src` and `rootSelector` from font-object for key generation
    delete data.src;
    delete data.rootSelector;
    return btoa(JSON.stringify(data));
  }

  getCSSText({ usedFontaine = false } = {}) {
    const selector = createSelector(this.rootSelector, this.selector);
    const family = `"${this.family}"`;
    return wrapByMedia(
      `${selector} {
        font-family: ${[getFontaineFallback(this.family, usedFontaine)]
          .filter(Boolean)
          .concat(this.fallbackFamily.join(', '))};
        font-weight: ${this.weight};
        font-style: ${this.style};
      }
      ${addFontActive(selector)} {
        font-family: ${[family].concat(this.fallbackFamily).join(', ')};
      }`,
      this.media
    );
  }

  getNoScriptCSSText() {
    const selector = createSelector(this.rootSelector, this.selector);
    const family = `"${this.family}"`;
    return wrapByMedia(
      `${selector} {
        font-family: ${[family].concat(this.fallbackFamily).join(', ')};
        font-weight: ${this.weight};
        font-style: ${this.style};
      }`,
      this.media
    );
  }

  setRootSelector(rootSelector) {
    this.rootSelector = `${rootSelector.name}="${rootSelector.value}"`;
  }
}

function createSelector(rootSelector, selector) {
  return joinSelectors(
    splitSelector(selector).map(splittedSelector => {
      return `[${rootSelector}] ${splittedSelector}`;
    })
  );
}

function addFontActive(selector) {
  return joinSelectors(
    splitSelector(selector).map(value => `.font-active${value}`)
  );
}

function splitSelector(selector) {
  return selector.split(',').map(value => value.trim());
}
function joinSelectors(selectors) {
  return selectors.join(', ').trim();
}

function wrapByMedia(style, media) {
  return (media && `@media ${media} { ${style} }`) || style;
}

function fontFamilyNormalize(fontFamily) {
  return fontFamily.replace(/"(.*)"/, '$1');
}

function weightNormalize(weight) {
  weight = String(weight);
  switch (weight) {
    case '400':
      return 'normal';
    case '700':
      return 'bold';
    default:
      return weight;
  }
}

function getFontaineFallback(family, usedFontaine) {
  if (usedFontaine) {
    return `"${family} fallback"`;
  }
  return '';
}
