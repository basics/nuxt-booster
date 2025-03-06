import type { CrossOrigin, HTMLCrossOriginAttribute } from '../../module';

export function isSupportedBrowser(browserSupport: { regex: string }) {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(browserSupport.regex).test(window.navigator.userAgent);
}

export function isFirefox() {
  return /firefox/i.test(window.navigator.userAgent);
}

export const isTouchSupported = () =>
  typeof window !== 'undefined' &&
  !!('ontouchstart' in window || navigator.maxTouchPoints > 0);

export const getCrossorigin = (
  crossorigin?: CrossOrigin,
  defaultCrossOrigin?: CrossOrigin
): HTMLCrossOriginAttribute => {
  if (crossorigin === true) {
    return 'anonymous';
  }
  return crossorigin === undefined
    ? (defaultCrossOrigin as HTMLCrossOriginAttribute) || 'anonymous'
    : (crossorigin as HTMLCrossOriginAttribute);
};
