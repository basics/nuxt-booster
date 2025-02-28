import { btoa } from '../utils/base64';
import Deferred from './Deferred';

export default class Font {
  family: string;
  style: string;
  weight: number | string;
  src: string;
  type: string;
  fallbackFamily: string[];
  rootSelector: string;
  selector: string;
  media?: string;
  loaded: Deferred<boolean>;

  constructor(
    family: string,
    {
      src,
      type,
      fallbackFamily
    }: { src: string; type: string; fallbackFamily: string[] },
    { media, selector }: { media?: string; selector?: string } = {},
    weight?: string | number,
    style?: string
  ) {
    this.family = family;
    this.style = style || 'normal';
    this.weight = weight || 400;
    this.src = src;
    this.type = `font/${type}`;
    this.fallbackFamily = fallbackFamily;
    this.rootSelector = '';
    this.selector = selector || '';
    this.media = media;
    this.loaded = new Deferred();
  }

  toJSON() {
    return {
      family: this.family,
      style: this.style,
      weight: this.weight,
      src: this.src,
      type: this.type,
      fallbackFamily: this.fallbackFamily,
      rootSelector: this.rootSelector,
      selector: this.selector,
      media: this.media
    };
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
      await result?.load();
    }
  }

  getKey() {
    const data: Partial<Font> = { ...this };
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

  setRootSelector(rootSelector: { name: string; value: string }) {
    this.rootSelector = `${rootSelector.name}="${rootSelector.value}"`;
  }
}

function createSelector(rootSelector: string, selector: string) {
  return joinSelectors(
    splitSelector(selector).map(splittedSelector => {
      return `[${rootSelector}] ${splittedSelector}`;
    })
  );
}

function addFontActive(selector: string) {
  return joinSelectors(
    splitSelector(selector).map((value: string) => `.font-active${value}`)
  );
}

function splitSelector(selector: string) {
  return selector.split(',').map((value: string) => value.trim());
}
function joinSelectors(selectors: string[]) {
  return selectors.join(', ').trim();
}

function wrapByMedia(style: string, media?: string) {
  return (media && `@media ${media} { ${style} }`) || style;
}

function fontFamilyNormalize(fontFamily: string) {
  return fontFamily.replace(/"(.*)"/, '$1');
}

function weightNormalize(weight: string | number) {
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

function getFontaineFallback(family: string, usedFontaine: boolean) {
  if (usedFontaine) {
    return `"${family} fallback"`;
  }
  return '';
}
