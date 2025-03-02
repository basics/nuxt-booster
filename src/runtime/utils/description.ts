import type Font from '#booster/classes/Font';
import type Source from '#booster/components/BoosterImage/classes/Source';
import type { ClassNames as SourceListClassNames } from '#booster/components/BoosterPicture/classes/SourceList';
import type SourceList from '#booster/components/BoosterPicture/classes/SourceList';
import { toHashHex, minify } from './string';

export interface Description {
  key?: string;
}

export interface StyleDescription extends Description {
  key?: string;
  type: string;
  children: string;
}
export interface NoScriptDescription extends Description {
  key?: string;
  innerHTML: string;
}

export function getImageStyleDescription(source: Source) {
  return {
    key: source.className,
    type: 'text/css',
    children: minify(source.style)
  };
}

export function getPictureStyleDescription(
  metaSources: SourceList,
  classNames: SourceListClassNames
): StyleDescription {
  return {
    key: classNames.picture as string,
    type: 'text/css',
    children: minify(metaSources.style)
  };
}

export function getImagePreloadDescription(
  { srcset, sizes, type }: HTMLSourceElement,
  fetchpriority = 'high',
  crossorigin = 'anonymous',
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
  font: Font,
  media: string,
  fetchpriority = 'high',
  crossorigin = 'anonymous',
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

export function getStyleDescription(
  children: string,
  noScript = false,
  key?: string
): StyleDescription | NoScriptDescription {
  if (noScript) {
    return getNoScriptDescription(`<style>${children}</style>`, key);
  } else {
    return {
      key,
      type: 'text/css',
      children: minify(children)
    };
  }
}

export function getNoScriptDescription(
  textContent: string,
  key?: string
): NoScriptDescription {
  return {
    key,
    innerHTML: minify(textContent)
  };
}
