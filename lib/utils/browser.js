import Bowser from 'bowser';

// TODO: configurable browser matrix
export function isSupportedBrowser () {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return browser.satisfies({
    chrome: '>=86',
    firefox: '>=83',
    opera: '>=71',
    safari: '>=12.4',
    edge: '>=87'
  });
}
