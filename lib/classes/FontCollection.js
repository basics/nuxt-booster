import { toHashHex } from '../utils/string';
import { getFontPreloadDescription, getStyleDescription } from '../utils/description';

export default class FontCollection {
  constructor () {
    this.list = [];
  }

  add (vnode, fonts) {
    const rootSelector = { name: 'data-font', value: `${toFontHex(vnode.tag, JSON.stringify(fonts.map(font => font.getKey())))}` };
    this.list = [].concat(this.list).concat(fonts.map((font) => {
      font.setRootSelector(rootSelector);
      return font;
    }));
    return rootSelector;
  }

  getHeadDescription (critical, crossorigin) {
    return {
      link: this.getPreloadDescriptions(critical, crossorigin),
      style: this.getStyleDescriptions(),
      noscript: this.getNoScriptStyleDescriptions(),
      __dangerouslyDisableSanitizers: ['style', 'noscript']
    };
  }

  getPreloadDescriptions (critical, crossorigin) {
    return Array.from(this.list.reduce((result, font) => {
      if ((critical && process.server)) {
        const media = font.media || 'all';
        const description = getFontPreloadDescription(font, media, crossorigin);
        result.set(description.hid, description);
      }
      return result;
    }, new Map()).values());
  }

  getStyleDescriptions () {
    return getRelevantDescriptions([getStyleDescription(this.list.map(font => font.getCSSText()).join(' '))]);
  }

  getNoScriptStyleDescriptions () {
    return getRelevantDescriptions([getStyleDescription(this.list.map(font => font.getNoScriptCSSText()).join(' '), true)]);
  }

  // has to be declared -> https://github.com/vuex-orm/vuex-orm/issues/255
  toJSON () {
    return this.list;
  }
}

function toFontHex (tag, fonts) {
  return toHashHex(`${tag}_${fonts}`).padStart(9, '-');
}

function getRelevantDescriptions (descriptions) {
  return descriptions.filter(item => item.hid !== '0');
}
