import { toHashHex } from '#speedkit/utils/string';

export function getImagePreloadDescription(
  { srcset, sizes, type },
  fetchpriority = 'high',
  crossorigin,
  callback = () => {}
) {
  return {
    tagPriority: 2,
    fetchpriority,
    key: toHashHex(srcset),
    rel: 'preload',
    as: 'image',
    crossorigin,
    imageSrcset: srcset,
    imageSizes: sizes,
    type,
    callback
  };
}

export function getFontPreloadDescription(
  font,
  media,
  fetchpriority = 'high',
  crossorigin,
  callback = () => {}
) {
  return {
    tagPriority: 2,
    fetchpriority,
    key: toHashHex(
      `${font.family}-${font.weight}-${font.style}-${media}`.toLowerCase()
    ),
    rel: 'preload',
    as: 'font',
    crossorigin,
    href: font.src,
    type: font.type,
    media,
    callback
  };
}

export function getStyleDescription(children, noScript = false) {
  if (noScript) {
    return getNoScriptDescription(`<style>${children}</style>`);
  } else {
    return {
      type: 'text/css',
      children
    };
  }
}

export function getNoScriptDescription(innerHTML) {
  return {
    innerHTML
  };
}
