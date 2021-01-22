import { hasSufficientPerformance, hasSufficientHardwareSetup, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance'
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser'

const options = <%= options.performance %>;

let init = false
function initApp() {
  if (init) {
    return
  }
  init = true
  import(/* webpackMode: "eager" */'../client')
};

function setupSpeedkitLayer(callback) {
  if(!isSupportedBrowser()) {
    const item = global.document.querySelector('#nuxt-speedkit__unsupported-browser')
    item.style.display = 'block'
  }
  if(!hasSufficientHardwareSetup()) {
    const item = global.document.querySelector('#nuxt-speedkit__outdated-device')
    item.style.display = 'block'
  }
  if(!hasSufficientDownloadPerformance()) {
    const item = global.document.querySelector('#nuxt-speedkit__slow-connection')
    item.style.display = 'block'
  }
  observeSpeedkitLayer(callback);
}

function observeSpeedkitLayer (callback) {
  const button = global.document.querySelector('.nuxt-speedkit__speedkit-layer__button')
  if (button) {
    button.addEventListener('click', callback, { capture: true, once: true, passive: true })
  } else {
    console.error('info layer is not implemented')
  }
}

setup(options);
setupSpeedkitLayer(initApp)

if(('__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__) || (hasSufficientPerformance() && isSupportedBrowser())) {
  initApp();
}
