import { hasSufficientPerformance, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance';
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

const MAX_IDLE_TRYS = 10;
let init = false
const layerEl = global.document.getElementById('nuxt-speedkit-layer');

async function initApp(force) {
  if (init) {
    return;
  }

  init = force || await new Promise(resolve => waitForIdle(resolve));
  if (init) {
    return import(<% if (!options.ssr) { %>/* webpackMode: "eager" */<% } %>'../client');
  }

  return null;
};

let idleTrys = 0;
function waitForIdle (cb) {
  if (!!layerEl && idleTrys >= MAX_IDLE_TRYS) {
    // User must interact via the layer.
    updateInfoLayerMessage('nuxt-speedkit-message-bad-performance');
    cb(false);
  } else if ('requestIdleCallback' in global &&  MAX_IDLE_TRYS > idleTrys) {
    idleTrys++
    global.requestIdleCallback((deadline) => {
      const time = deadline.timeRemaining();
      if (time > 10 || deadline.didTimeout) {
        cb(true);
      } else {
        waitForIdle(cb);
      }
    }, { timeout: 2000 });
  } else {
    cb(true);
  }
};

function initFont() {
  global.document.querySelectorAll('[data-font]').forEach((node) => {
    node.classList.add('font-active');
  })
}

function observeSpeedkitButton (id, callback) {
  const el = global.document.getElementById(id);
  if (el) {
    button.addEventListener('click', callback, { capture: true, once: true, passive: true })
  }
}

function updateInfoLayerMessage(id) {
  const el = global.document.getElementById(id)
  if (!el) {
    throw new Error(`Can\'t update info layer, message ${id} missing.`);
  } else {
    el.style.display = 'block'
    layerEl.className += ' nuxt-speedkit-layer-visible';
  }
}

function setupSpeedkitLayer(callback, supportedBrowser) {
  if(!supportedBrowser) {
    updateInfoLayerMessage('nuxt-speedkit-message-unsupported-browser');
  }
  if(!hasSufficientDownloadPerformance()) {
    updateInfoLayerMessage('nuxt-speedkit-message-slow-connection');
  }
  observeSpeedkitButton('nuxt-speedkit-button-init-app', callback);
}

const supportedBrowser = isSupportedBrowser(<%= options.supportedBrowserDetector %>);

if (!document.getElementById('nuxt-speedkit-layer')) {
  initApp();
} else {

  setup(<%= options.performanceMetrics %>);

  setupSpeedkitLayer(() => initApp(true), supportedBrowser)

  if(('__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__) || ((<%= !options.ignorePerformance %> && hasSufficientPerformance()) && supportedBrowser)) {
    initApp();
  }

  observeSpeedkitButton('nuxt-speedkit-button-init-font', initFont);

  if('__NUXT_SPEEDKIT_FONT_INIT__' in global && global.__NUXT_SPEEDKIT_FONT_INIT__) {
    initFont()
  }

}
