import { toHashHex } from 'nuxt-speedkit/utils/string';

export function getImagePreloadDescription ({ srcset, sizes, type }, crossorigin, callback = () => {}) {
  return {
    hid: toHashHex(srcset),
    rel: 'preload',
    as: 'image',
    crossorigin,
    imageSrcset: srcset,
    imageSizes: sizes,
    type,
    callback
  };
}

export function getFontPreloadDescription (font, media, crossorigin, callback = () => {}) {
  return {
    hid: toHashHex(`${font.family}-${font.weight}-${font.style}-${media}`.toLowerCase()),
    rel: 'preload',
    as: 'font',
    crossorigin,
    href: font.src,
    type: font.type,
    media,
    callback
  };
}

export function getStyleDescription (cssText, noScript = false) {
  if (noScript) {
    return getNoScriptDescription(`<style>${cssText}</style>`);
  } else {
    return {
      hid: toHashHex(cssText),
      cssText
    };
  }
}

export function getNoScriptDescription (html) {
  return {
    hid: toHashHex(html),
    innerHTML: html
  };
}
