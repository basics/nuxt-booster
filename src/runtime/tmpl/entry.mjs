import { <% if (!options.isDev) { %>run, <% } %>hasSufficientPerformance, hasSufficientDownloadPerformance, setup } from '#booster/utils/performance';
import { isSupportedBrowser } from '#booster/utils/browser';

let initialized = false
const layerEl = window.document.getElementById('nuxt-booster-layer');

const forceInit = ('__NUXT_SPEEDKIT_FORCE_INIT__' in window && window.__NUXT_SPEEDKIT_FORCE_INIT__);

const triggerRunCallback = sufficient => window.dispatchEvent(new CustomEvent('nuxt-booster:run', { detail: { sufficient } }))

async function initApp(force) {
  if (initialized) {
    return;
  }

  document.documentElement.classList.remove('nuxt-booster-reduced-view');

  try {

    <% if (!options.isDev) { %>
    if (!force) {
      await run(<%= options.runOptions ? JSON.stringify(options.runOptions) : '' %>);
    }
    <% } %>


    initialized = true;

    triggerRunCallback(true);

    return import(<% if (!options.ssr) { %>/* webpackMode: "eager" */<% } %>'../client');

  } catch (error) {
    triggerRunCallback(false);

    if (!!layerEl) {
      // User must interact via the layer.
      updateBoosterLayerMessage('nuxt-booster-message-weak-hardware');
      return null;
    }
  }

  return null;
};

function observeBoosterButton (id, callback) {
  Array.from(document.querySelectorAll(`#${id}`)).forEach(el => {
    el.addEventListener('click', callback, { capture: true, once: true, passive: true })
  })
}

function updateBoosterLayerMessage(id) {
  const el = window.document.getElementById(id)
  if (!el) {
    throw new Error(`Can\'t update booster-layer, message ${id} missing.`);
  } else {
    el.style.display = 'block'
    layerEl.className += ' nuxt-booster-layer-visible';
  }
}

function initReducedView () {
  document.documentElement.classList.add('nuxt-booster-reduced-view');

  // activate fonts
  window.document.querySelectorAll('[data-font]').forEach((node) => {
    node.classList.add('font-active');
  })

  // transform noscript>picture to picture
  Array.from(document.querySelectorAll('noscript.nuxt-booster-picture-noscript')).forEach(el => {
    const tmp = document.createElement('div');
    tmp.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(tmp.children[0], el);
    tmp.remove();
  })
}

function setupBoosterLayer(supportedBrowser) {
  if(!supportedBrowser) {
    updateBoosterLayerMessage('nuxt-booster-message-unsupported-browser');
  }
  if(!hasSufficientDownloadPerformance()) {
    updateBoosterLayerMessage('nuxt-booster-message-reduced-bandwidth');
  }
}

const supportedBrowser = isSupportedBrowser(<%= options.supportedBrowserDetector %>);

window.addEventListener('load', function () {
  if (!document.getElementById('nuxt-booster-layer')) {
    initApp(forceInit);
  } else {

    observeBoosterButton('nuxt-booster-button-init-reduced-view', initReducedView);
    observeBoosterButton('nuxt-booster-button-init-app', () => initApp(true));

    setup(<%= options.performanceMetrics %>);

    if(('__NUXT_SPEEDKIT_AUTO_INIT__' in window && window.__NUXT_SPEEDKIT_AUTO_INIT__) || ((<%= !options.ignorePerformance %> && hasSufficientPerformance()) && supportedBrowser)) {
      initApp();
    } else {
      setupBoosterLayer(supportedBrowser)
    }

  }
});
