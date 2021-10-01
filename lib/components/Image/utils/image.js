import { joinURL } from 'ufo';

export const getExtension = (url) => {
  if (/[.]/.exec(url)) {
    return /[^.]+$/.exec(url)[0];
  }
  return undefined;
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

export const getMeta = async (source, config, ssrContext) => {
  if (global.Image) {
    source = source.modify({ src: config.src });
    const result = await new Promise((resolve) => {
      const img = new global.Image();
      img.onload = () => resolve(img);
      img.src = source.src;
    });
    return source.modify({ width: result.naturalWidth, height: result.naturalHeight });
  } else {
    let src = config.src;
    if (Object.keys(ssrContext?.nuxt?._img || {}).length) {
      src = Object.entries(ssrContext.nuxt._img).find(([, compiledPath]) => compiledPath.endsWith(src))[0];
    }
    source = source.modify({ src: joinURL(process.env.NUXT_SPEEDKIT_INTERAL_URL, src) });
    const resp = await fetch(source.src);
    const sizeOf = (await import('buffer-image-size')).default;
    const { width, height } = sizeOf(await resp.buffer());
    return source.modify({ width, height });
  }
};
