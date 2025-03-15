import { useRequestHeaders, useRequestURL, useRequestFetch } from '#imports';

const dimensionCache = new Map();

export async function getImageSize(src: string) {
  const isNitroPrerender = 'x-nitro-prerender' in useRequestHeaders();

  const requestUrl = useRequestURL();

  try {
    let url = src;
    if (isNitroPrerender) {
      url = url.replace(requestUrl.origin, '');
    }

    if (!dimensionCache.has(url)) {
      const blob = (await useRequestFetch()(url)) as Blob;
      const { imageMeta } = await import('image-meta');

      const objectUrl = URL.createObjectURL(blob);
      const dimension = await fetch(objectUrl)
        .then(res => res.arrayBuffer())
        .then(Buffer.from)
        .then(imageMeta);

      URL.revokeObjectURL(objectUrl);

      dimensionCache.set(url, dimension);
    }

    return dimensionCache.get(url);
  } catch (error) {
    console.error('getImageSize: ' + src, error);
    return { width: 0, height: 0 };
  }
}
