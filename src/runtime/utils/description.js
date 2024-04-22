import { minify } from './string';
import { toHashHex } from '#booster/utils/string';
import Source from '#booster/components/BoosterImage/classes/Source';

export function getImageStyleDescription(meta, className) {
  return {
    key: className,
    type: 'text/css',
    children: minify(new Source(meta.value).style)
  };
}

export function getPictureStyleDescription(metaSources, classNames) {
  return {
    key: classNames.picture,
    type: 'text/css',
    children: minify(metaSources.style)
  };
}

export function getImagePreloadDescription(
  { srcset, sizes, type },
  fetchpriority = 'high',
  crossorigin,
  onload = () => {}
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
    onload
  };
}

export function getFontPreloadDescription(
  font,
  media,
  fetchpriority = 'high',
  crossorigin,
  onload = () => {}
) {
  return {
    tagPriority: 2,
    fetchpriority,
    'data-key': toHashHex(
      `${font.family}-${font.weight}-${font.style}-${media}`.toLowerCase()
    ),
    key: toHashHex(
      `${font.family}-${font.weight}-${font.style}-${media}`.toLowerCase()
    ),
    rel: 'preload',
    as: 'font',
    crossorigin,
    href: font.src,
    type: font.type,
    media,
    onload
  };
}

export function getStyleDescription(children, noScript = false, key) {
  if (noScript) {
    return getNoScriptDescription(`<style>${children}</style>`, key);
  } else {
    return {
      key: key,
      type: 'text/css',
      children: minify(children)
    };
  }
}

export function getNoScriptDescription(textContent, key) {
  return {
    key: key,
    innerHTML: minify(textContent)
  };
}
