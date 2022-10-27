import { <% if (!options.isDev) { %>run, <% } %>hasSufficientPerformance, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance';
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

let initialized = false
const layerEl = global.document.getElementById('nuxt-speedkit-layer');

const triggerRunCallback = sufficient => global.dispatchEvent(new CustomEvent('nuxt-speedkit:run', { detail: { sufficient } }))

async function initApp(force) {
  if (initialized) {
    return;
  }

  document.documentElement.classList.remove('nuxt-speedkit-reduced-view');

  try {

    <% if (!options.isDev) { %>
    if (!force) {
      await run(<%= options.runOptions ? JSON.stringify(options.runOptions) : '' %>);
    }
    <% } %>

    initialized = true;

    triggerRunCallback(true)

    return import(<% if (!options.ssr) { %>/* webpackMode: "eager" */<% } %>'../client');

  } catch (error) {
    triggerRunCallback(false)

    if (!!layerEl) {
      // User must interact via the layer.
      updateSpeedkitLayerMessage('nuxt-speedkit-message-weak-hardware');
    }
  }

  return null;
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

window.addEventListener('load', function () {
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
});
