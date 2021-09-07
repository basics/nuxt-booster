import { joinURL } from 'ufo';

export const getExtension = (url) => {
  if (/[.]/.exec(url)) {
    return /[^.]+$/.exec(url)[0];
  }
  return undefined;
};

export const resolveUrl = (context, url) => {
  const provider = getProvider(context);
  if (provider.supportsAlias) {
    let resolvedUrl = null;
    for (const base in context.options.alias) {
      if (url.startsWith(base)) {
        resolvedUrl = joinURL(context.options.alias[String(base)], url.substr(base.length));
      }
    }
    return resolvedUrl;
  }
  return url;
};

export const getMeta = async (source) => {
  if (global.Image) {
    const result = await new Promise((resolve) => {
      const img = new global.Image();
      img.onload = () => resolve(img);
      img.src = source.src;
    });
    return source.modify({ width: result.naturalWidth, height: result.naturalHeight });
  } else {
    const resp = await fetch(source.src);
    const sizeOf = (await import('buffer-image-size')).default;
    const { width, height } = sizeOf(await resp.buffer());
    return source.modify({ width, height });
  }
};

const getProvider = (context) => {
  return context.options.providers[context.options.provider].provider;
};
