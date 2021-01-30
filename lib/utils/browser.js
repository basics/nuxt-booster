import Bowser from 'bowser';

export function isSupportedBrowser (matrix) {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return browser.satisfies(matrix || {
    chrome: '>=86',
    firefox: '>=83',
    opera: '>=71',
    safari: '>=12.4',
    edge: '>=87'
  });
}
