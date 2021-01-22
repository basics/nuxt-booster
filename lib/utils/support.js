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
  if (process.client) {
    const relList = global.document.createElement('link').relList;
    return !!(relList && relList.supports && relList.supports('preload'));
  } else {
    return true;
  }
}

export function elementSupportsAttribute (element, attribute) {
  let test = {};
  if (global.document) {
    test = global.document.createElement(element);
  }

  if (attribute in test) {
    return true;
  }

  return false;
}
