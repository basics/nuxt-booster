import { joinURL, parseURL, withBase, hasProtocol } from 'ufo';
import { useRequestURL } from '#imports';

const SOURCE_FORMATS = ['avif', 'webp', 'png', 'jpg', 'gif'];
const FALLBACK_FORMAT = 'jpg';

export const getExtension = url => {
  const { pathname } = parseURL(url);
  const value = /[.]/.exec(pathname) && /[^.]+$/.exec(pathname)[0];
  if (SOURCE_FORMATS.includes(value)) {
    return value;
  }
  return FALLBACK_FORMAT;
};

export const isStaticAsset = (context, url) => {
  return (
    url.startsWith('/') &&
    !Object.keys(context.options.alias).find(alias => url.startsWith(alias))
  );
};

export const resolveUrl = (context, url) => {
  const provider = getProvider(context);
  if (provider.supportsAlias) {
    let resolvedUrl = url;
    for (const base in context.options.alias) {
      if (url.startsWith(base)) {
        resolvedUrl = joinURL(
          context.options.alias[String(base)],
          url.substr(base.length)
        );
      }
    }
    return resolvedUrl;
  }
  return url;
};

const getProvider = context => {
  return context.options.providers[context.options.provider].provider;
};

export async function getMeta(source, compiledSrc, $booster) {
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
