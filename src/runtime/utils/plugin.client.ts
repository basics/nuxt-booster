const dimensionCache = new Map();

export async function getImageSize(src: string) {
  if (!dimensionCache.has(src)) {
    const { width, height } = (await new Promise(resolve => {
      let img: HTMLImageElement | undefined = new global.Image();

      const resolvePromise = () => {
        const dimension = {
          width: img?.naturalWidth || 0,
          height: img?.naturalHeight || 0
        };
        img = undefined;
        resolve(dimension);
      };

      img.onload = () => resolvePromise();
      img.onerror = () => resolvePromise();
      img.src = src;
    })) as { width: number; height: number };
    dimensionCache.set(src, { width, height });
  }
  return dimensionCache.get(src);
}
