import { toHashHex } from '../utils/string';
import {
  getFontPreloadDescription,
  getStyleDescription,
  type Description
} from '../utils/description';
import type Font from './Font';
import type {
  Link,
  TagUserProperties,
  UserTagConfigWithoutInnerContent
} from '@unhead/schema';
import type { ModulePublicRuntimeConfig } from '../../types';

export default class FontCollection {
  list: Font[];
  constructor() {
    this.list = [];
  }

  getKey() {
    return toFontHex(JSON.stringify(this.list.map(font => font.getKey())));
  }

  add(fonts: Font[]) {
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

  getPreloadDescriptions(
    critical: boolean,
    crossorigin = 'anonymous'
  ): Link<UserTagConfigWithoutInnerContent>[] {
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

  getStyleDescriptions(
    options: ModulePublicRuntimeConfig
  ): Link<TagUserProperties>[] {
    return getRelevantDescriptions([
      getStyleDescription(
        this.list.map(font => font.getCSSText(options)).join(' '),
        false,
        this.getKey()
      )
    ]);
  }

  getNoScriptStyleDescriptions(): TagUserProperties[] {
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

function toFontHex(value: string) {
  return toHashHex(value).padStart(9, '-');
}

function getRelevantDescriptions(descriptions: Description[]) {
  return descriptions.filter(item => item.key !== '0');
}
