export function isSupportedBrowser (regExpString) {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(regExpString).test(global.navigator.userAgent);
}
