import type { BoosterContext } from './../../../../types';
import { parseURL, withBase, hasProtocol, parseFilename } from 'ufo';
import { useRequestURL } from '#imports';
import type { Nuxt } from 'nuxt/schema';
import type Source from '../classes/Source';

const SOURCE_FORMATS = ['avif', 'webp', 'png', 'jpg', 'gif'];
const FALLBACK_FORMAT = 'jpg';

export const getExtension = (url: string) => {
  const { pathname } = parseURL(url);

  const filename = parseFilename(pathname, { strict: false }) || '';
  const match = filename.match(/\.([^.]+)$/);
  const value = match ? match[1] : '';

  if (value && SOURCE_FORMATS.includes(value)) {
    return value;
  }
  if (SOURCE_FORMATS.includes(value)) {
    return value;
  }
  return FALLBACK_FORMAT;
};

export const isStaticAsset = (context: Nuxt, url: string) => {
  return (
    url.startsWith('/') &&
    !Object.keys(context.options.alias).find(alias => url.startsWith(alias))
  );
};

export async function getMeta(
  source: Source,
  compiledSrc: string,
  $booster: BoosterContext
) {
  if (!import.meta.server && window.Image) {
    source = source.modify({ src: compiledSrc });
  } else {
    source = source.modify({
      src: hasProtocol(compiledSrc)
        ? compiledSrc
        : withBase(compiledSrc, useRequestURL().origin)
    });
  }

  const { width, height } = await $booster.getImageSize(source.src);

  return source.modify({ width, height });
}
