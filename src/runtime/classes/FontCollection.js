import { toHashHex } from '../utils/string';
import {
  getFontPreloadDescription,
  getStyleDescription
} from '../utils/description';

export default class FontCollection {
  constructor() {
    this.list = [];
  }

  getKey() {
    return toFontHex(JSON.stringify(this.list.map(font => font.getKey())));
  }

  add(fonts) {
    const rootSelector = {
      name: 'data-font',
      value: `${toFontHex(JSON.stringify(fonts.map(font => font.getKey())))}`
    };
    this.list = [
      ...this.list,
      ...fonts.map(font => {
        font.setRootSelector(rootSelector);
        return font;
      })
    ];
    return rootSelector;
  }

  getPreloadDescriptions(critical, crossorigin = 'anonymous') {
    return Array.from(
      this.list
        .reduce((result, font) => {
          if (critical && import.meta.server) {
            const media = font.media || 'all';
            const description = getFontPreloadDescription(
              font,
              media,
              crossorigin
            );
            result.set(description.key, description);
          }
          return result;
        }, new Map())
        .values()
    );
  }

  getStyleDescriptions(options) {
    return getRelevantDescriptions([
      getStyleDescription(
        this.list.map(font => font.getCSSText(options)).join(' '),
        false,
        this.getKey()
      )
    ]);
  }

  getNoScriptStyleDescriptions() {
    return getRelevantDescriptions([
      getStyleDescription(
        this.list.map(font => font.getNoScriptCSSText()).join(' '),
        true,
        this.getKey()
      )
    ]);
  }

  get size() {
    return this.list.length;
  }

  toJSON() {
    return {
      list: this.list.map(font => font.toJSON())
    };
  }
}

function toFontHex(tag, fonts) {
  return toHashHex(`${tag}_${fonts}`).padStart(9, '-');
}

function getRelevantDescriptions(descriptions) {
  return descriptions.filter(item => item.key !== '0');
}
