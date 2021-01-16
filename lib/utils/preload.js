import Cache from '../classes/Cache';
import { toHashCode } from './string';
import { elementSupportsAttribute } from './support';

const imageCache = new Cache();

export function preloadImage (item, callback, crossorigin) {
  const hash = toHashCode(item.srcset);
  const entry = imageCache.getEntry(hash);
  entry.promise.then(() => callback());

  if (process.server || elementSupportsAttribute('link', 'imageSrcset')) {
    return {
      link: [preloadImageSrcsetByLink(item, hash, entry.resolve, crossorigin)]
    };
  } else {
    return ppreloadImageSrcsetByImage(item, entry.resolve, crossorigin);
  }
}

export function preloadImageSrcsetByLink (item, hash, resolve, crossorigin) {
  return {
    hid: hash,
    rel: 'preload',
    as: 'image',
    crossorigin,
    callback: resolve,
    imageSrcset: item.srcset
  };
}

export function ppreloadImageSrcsetByImage (item, resolve, crossorigin) {
  const img = new Image();
  img.onload = resolve;
  img.crossorigin = crossorigin;
  img.srcset = item.srcset;
}

export function preconnectUrl (url = '') {
  const hash = toHashCode(url);
  return {
    link: [{
      hid: hash,
      rel: 'preconnect',
      href: new URL(url).origin
    }]
  };
}
