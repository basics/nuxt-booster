import { hasSufficientPerformance, hasSufficientHardwareSetup, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance';
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

let init = false

function initApp() {
  if (init) {
    return
  }
  init = true
  import(/* webpackMode: "eager" */'../client')
};

function initFont() {
  global.document.querySelectorAll('[data-font]').forEach((node) => {
    node.classList.add('font-active');
  })
}

function observeSpeedkitButton (button, callback) {
  if (button) {
    button.addEventListener('click', callback, { capture: true, once: true, passive: true })
  }
}

function updateInfoLayer(item) {
  item.style.display = 'block'
  global.document.querySelector('#nuxt-speedkit__speedkit-layer').className += ' nuxt-speedkit__speedkit-layer--visible';
}

function setupSpeedkitLayer(callback) {
  if(!supportedBrowser) {
    updateInfoLayer(global.document.getElementById('nuxt-speedkit__unsupported-browser'));
  }
  if(!hasSufficientHardwareSetup()) {
    updateInfoLayer(global.document.getElementById('nuxt-speedkit__outdated-device'));
  }
  if(!hasSufficientDownloadPerformance()) {
    updateInfoLayer(global.document.getElementById('nuxt-speedkit__slow-connection'));
  }
  observeSpeedkitButton(global.document.getElementById('nuxt-speedkit__button__init-app'), callback);
}

if (!document.getElementById('nuxt-speedkit__speedkit-layer')) {
  initApp();
}

setup(<%= options.performance %>);
const supportedBrowser = isSupportedBrowser(<%= options.supportedBrowserDetector %>);

setupSpeedkitLayer(initApp)

if(('__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__) || ((<%= !options.ignorePerformance %> && hasSufficientPerformance()) && supportedBrowser)) {
  initApp();
}

observeSpeedkitButton(global.document.getElementById('nuxt-speedkit__button__init-font'), initFont);

if('__NUXT_SPEEDKIT_FONT_INIT__' in global && global.__NUXT_SPEEDKIT_FONT_INIT__) {
  initFont()
}
