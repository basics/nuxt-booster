export function isSupportedBrowser (browserSupport) {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(browserSupport.regex).test(window.navigator.userAgent);
}

export function isFirefox () {
  return typeof InstallTrigger !== 'undefined';
}

export const isTouchSupported = () =>
  typeof window !== 'undefined' &&
  !!(
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
  );
