import { hasSufficientPerformance, hasSufficientHardwareSetup, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance';
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

setup(<%= options.performance %>);
const supportedBrowser = isSupportedBrowser(<%= options.browserSupport %>);

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

function setupSpeedkitLayer(callback) {
  if(!supportedBrowser) {
    const item = global.document.getElementById('nuxt-speedkit__unsupported-browser')
    item.style.display = 'block'
  }
  if(!hasSufficientHardwareSetup()) {
    const item = global.document.getElementById('nuxt-speedkit__outdated-device')
    item.style.display = 'block'
  }
  if(!hasSufficientDownloadPerformance()) {
    const item = global.document.getElementById('nuxt-speedkit__slow-connection')
    item.style.display = 'block'
  }
  observeSpeedkitButton(global.document.getElementById('nuxt-speedkit__button__init-app'), callback);
}

function observeSpeedkitButton (button, callback) {
  if (button) {
    button.addEventListener('click', callback, { capture: true, once: true, passive: true })
  } else {
    console.error('info layer is not implemented')
  }
}

setupSpeedkitLayer(initApp)

if(('__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__) || (hasSufficientPerformance() && supportedBrowser)) {
  initApp();
}

observeSpeedkitButton(global.document.getElementById('nuxt-speedkit__button__init-font'), initFont);

if('__NUXT_SPEEDKIT_FONT_INIT__' in global && global.__NUXT_SPEEDKIT_FONT_INIT__) {
  initFont()
}
