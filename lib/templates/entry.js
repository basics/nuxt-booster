import { hasSufficientPerformance, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance';
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

function getMaxIdleTries () {
  let duration = <%= options.maxIdleDuration %>;
  if (window.__NUXT_SPEEDKIT_MAX_IDLE_DURATION__ !== undefined) {
    duration = window.__NUXT_SPEEDKIT_MAX_IDLE_DURATION__;
  }
  return duration * 60;
}


const MAX_IDLE_TRIES = getMaxIdleTries();

let init = false
const layerEl = global.document.getElementById('nuxt-speedkit-layer');

async function initApp(force) {
  if (init) {
    return;
  }

  document.documentElement.classList.remove('nuxt-speedkit-reduced-view');

  init = force || await new Promise(resolve => waitForIdle(resolve));
  if (init) {
    return import(<% if (!options.ssr) { %>/* webpackMode: "eager" */<% } %>'../client');
  }

  return null;
};

let idleTries = 0;
function waitForIdle (cb) {
  if (!!layerEl && idleTries >= MAX_IDLE_TRIES) {
    // User must interact via the layer.
    updateSpeedkitLayerMessage('nuxt-speedkit-message-weak-hardware');
    cb(false);
  } else if ('requestIdleCallback' in global &&  MAX_IDLE_TRIES > idleTries) {
    idleTries++
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

function observeSpeedkitButton (id, callback) {
  Array.from(document.querySelectorAll(`#${id}`)).forEach(el => {
    el.addEventListener('click', callback, { capture: true, once: true, passive: true })
  })
}

function updateSpeedkitLayerMessage(id) {
  const el = global.document.getElementById(id)
  if (!el) {
    throw new Error(`Can\'t update speedkit-layer, message ${id} missing.`);
  } else {
    el.style.display = 'block'
    layerEl.className += ' nuxt-speedkit-layer-visible';
  }
}

function initReducedView () {
  document.documentElement.classList.add('nuxt-speedkit-reduced-view');

  // activate fonts
  global.document.querySelectorAll('[data-font]').forEach((node) => {
    node.classList.add('font-active');
  })

  // transform noscript>picture to picture
  Array.from(document.querySelectorAll('noscript.nuxt-speedkit-picture-noscript')).forEach(el => {
    const tmp = document.createElement('div');
    tmp.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(tmp.children[0], el);
    tmp.remove();
  })
}

function setupSpeedkitLayer(supportedBrowser) {
  if(!supportedBrowser) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-unsupported-browser');
  }
  if(!hasSufficientDownloadPerformance()) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-reduced-bandwidth');
  }
}

const supportedBrowser = isSupportedBrowser(<%= options.supportedBrowserDetector %>);

if (!document.getElementById('nuxt-speedkit-layer')) {
  initApp();
} else {

  observeSpeedkitButton('nuxt-speedkit-button-init-reduced-view', initReducedView);
  observeSpeedkitButton('nuxt-speedkit-button-init-app', () => initApp(true));

  setup(<%= options.performanceMetrics %>);

  if(('__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__) || ((<%= !options.ignorePerformance %> && hasSufficientPerformance()) && supportedBrowser)) {
    initApp();
  } else {
    setupSpeedkitLayer(supportedBrowser)
  }

}
