import { isFirefox } from './browser';

function hasWebpSupport () {
  if (process.server) {
    return true;
  }
  const elem = global.document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } else {
    return false;
  }
}

export const webpSupport = hasWebpSupport();

export function isPreloadSupported () {
  if (isFirefox()) {
    // Attribute imageSrcset is Supported, but does not appear to be active. No preload is started.
    return false;
  } else if (process.client) {
    const relList = global.document.createElement('link').relList;
    return elementSupportsAttribute('link', 'imageSrcset') && !!(relList && relList.supports && relList.supports('preload'));
  } else {
    return true;
  }
}

export function isPictureSupported () {
  return 'HTMLPictureElement' in global;
}

export function elementSupportsAttribute (element, attribute) {
  let test = {};
  if (global.document) {
    test = global.document.createElement(element);
  }

  return attribute in test;
}
