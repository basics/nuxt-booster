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

  getPreloadDescriptions (critical) {
    return Array.from(this.list.reduce((result, font) => {
      if ((critical && process.server)) {
        const media = font.media || 'all';
        const description = getFontPreloadDescription(font, media);
        result.set(description.hid, description);
      }
      return result;
    }, new Map()).values());
  }

  getStyleDescriptions () {
    if (this.list.length) {
      const cssText = this.list.map(font => font.getCSSText()).join(' ');
      return [getStyleDescription(cssText)];
    } else {
      return [];
    }
  }

  getNoScriptStyleDescriptions () {
    if (this.list.length) {
      const cssText = this.list.map(font => font.getNoScriptCSSText()).join(' ');
      return [getStyleDescription(cssText, true)];
    } else {
      return [];
    }
  }

  // has to be declared -> https://github.com/vuex-orm/vuex-orm/issues/255
  toJSON () {
    return this.list;
  }
}

function toFontHex (tag, fonts) {
  return toHashHex(`${tag}_${fonts}`).padStart(9, '-');
}
