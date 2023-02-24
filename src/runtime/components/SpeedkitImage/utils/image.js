import { joinURL, parseURL, withBase, hasProtocol } from 'ufo';

const SOURCE_FORMATS = ['avif', 'webp', 'png', 'jpg', 'gif'];
const FALLBACK_FORMAT = 'jpg';

export const getExtension = (url) => {
  const { pathname } = parseURL(url);
  const value = /[.]/.exec(pathname) && /[^.]+$/.exec(pathname)[0];
  if (SOURCE_FORMATS.includes(value)) {
    return value;
  }
  return FALLBACK_FORMAT;
};

export const isStaticAsset = (context, url) => {
  return url.startsWith('/') && !Object.keys(context.options.alias).find(alias => url.startsWith(alias));
};

export const resolveUrl = (context, url) => {
  const provider = getProvider(context);
  if (provider.supportsAlias) {
    let resolvedUrl = url;
    for (const base in context.options.alias) {
      if (url.startsWith(base)) {
        resolvedUrl = joinURL(context.options.alias[String(base)], url.substr(base.length));
      }
    }
    return resolvedUrl;
  }
  return url;
};

const getProvider = (context) => {
  return context.options.providers[context.options.provider].provider;
};

export const getMeta = async (source, compiledSrc, ssrNuxtImage) => {
  if (global.Image) {
    source = source.modify({ src: compiledSrc });
    const result = await new Promise((resolve) => {
      const img = new global.Image();
      img.onload = () => resolve(img);
      img.src = source.src;
    });
    return source.modify({ width: result.naturalWidth, height: result.naturalHeight });
  } else {
    let src = compiledSrc;
    if (Object.entries(ssrNuxtImage || {}).length) {
      src = Object.entries(ssrNuxtImage || {}).find(([, compiledPath]) => compiledPath.endsWith(src))[0];
    }
    source = source.modify({ src: hasProtocol(src) ? src : withBase(src, process.env.NUXT_SPEEDKIT_INTERAL_URL) });
    const resp = await fetch(source.src);
    const sizeOf = (await import('buffer-image-size')).default;
    const { width, height } = sizeOf(await resp.buffer());
    return source.modify({ width, height });
  }
};
