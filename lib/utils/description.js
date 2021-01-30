import { toHashHex } from 'nuxt-speedkit/utils/string';

export function getImagePreloadDescription ({ srcset, sizes }, crossorigin = 'anonymous', callback = () => {}) {
  return {
    hid: toHashHex(srcset),
    rel: 'preload',
    as: 'image',
    crossorigin,
    imageSrcset: srcset,
    imageSizes: sizes,
    callback
  };
}

export function getFontPreloadDescription (font, media, crossorigin = 'anonymous', callback = () => {}) {
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
    return getNoScriptDescription(`<style type="text/css">${cssText}</style>`);
  } else {
    return {
      hid: toHashHex(cssText),
      type: 'text/css',
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
