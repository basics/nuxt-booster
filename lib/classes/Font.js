import { btoa } from '../utils/base64';
import Deferred from './Deferred';

export default class Font {
  #rootSelector
  constructor (family, weight = 400, style = 'normal', { src = null, type = null, fallbackFamily = null }, { media = null, selector = null }) {
    this.family = family;
    this.style = style;
    this.weight = weight;
    this.src = src;
    this.type = `font/${type}`;
    this.fallbackFamily = fallbackFamily;
    this.#rootSelector = '';
    this.selector = selector || '';
    this.media = media || null;
    this.loaded = new Deferred();
  }

  async load () {
    if (!global.document.fonts.check(`${this.style} ${this.weight} 12px '${this.family}'`)) {
      const result = Array.from(global.document.fonts.keys()).find((f) => {
        return f.family === this.family && f.style === this.style && f.weight === String(this.weight);
      });
      await result.load();
    }
  }

  getKey () {
    const data = Object.assign({}, this);
    // Remove src from font-object for key generation
    delete data.src;
    return btoa(JSON.stringify(data));
  }

  getCSSText () {
    const selector = createSelector(this.#rootSelector, this.selector).trim();
    return wrapByMedia(`${selector} {
        font-family: ${this.fallbackFamily.join(', ')};
        font-weight: ${this.weight};
        font-style: ${this.style};
      }
      .font-active${selector} {
        font-family: ${[`"${this.family}"`].concat(this.fallbackFamily).join(', ')};
      }`, this.media);
  }

  setRootSelector (rootSelector) {
    this.#rootSelector = rootSelector;
  }
}

function createSelector (rootSelector, selector) {
  return selector.split(', ').map((splittedSelector) => {
    return `[${rootSelector}] ${splittedSelector.trim()}`;
  }).join(', ');
}

function wrapByMedia (style, media) {
  return (media && `@media ${media} { ${style} }`) || style;
}
