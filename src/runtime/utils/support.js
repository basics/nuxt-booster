import { isFirefox } from './browser';

function hasWebpSupport() {
  if (import.meta.server) {
    return true;
  }
  const elem = window.document.createElement('canvas');
  if (elem.getContext?.('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } else {
    return false;
  }
}

export const webpSupport = hasWebpSupport();

export function isPreloadSupported() {
  if (isFirefox()) {
    // Attribute imageSrcset is Supported, but does not appear to be active. No preload is started.
    return false;
  } else if (import.meta.client) {
    const relList = window.document.createElement('link').relList;
    return (
      elementSupportsAttribute('link', 'imageSrcset') &&
      !!relList?.supports?.('preload')
    );
  } else {
    return true;
  }
}

export function isPictureSupported() {
  return 'HTMLPictureElement' in global;
}

export function elementSupportsAttribute(element, attribute) {
  let test = {};
  if (window.document) {
    test = window.document.createElement(element);
  }

  return attribute in test;
}
