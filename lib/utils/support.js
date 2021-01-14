let webpSupport;

export function isWebpSupported () {
  if (!webpSupport) {
    webpSupport = new Promise((resolve) => {
      const img = new global.Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
    });
  }
  return webpSupport;
}

export function elementSupportsAttribute (element, attribute) {
  let test = {};
  if (global.document) {
    test = global.document.createElement(element);
  }

  if (attribute in test) {
    return true;
  } else {
    return false;
  }
}
