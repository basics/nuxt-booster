import { hasSufficientDownloadPerformance } from './performance';

export const triggerRunCallback = sufficient =>
  window.dispatchEvent(
    new CustomEvent('nuxt-booster:run', { detail: { sufficient } })
  );

export function observeBoosterButton(id, callback) {
  Array.from(document.querySelectorAll('#' + id)).forEach(el => {
    el.addEventListener('click', callback, {
      capture: true,
      once: true,
      passive: true
    });
  });
}

export function updateBoosterLayerMessage(layerEl, id) {
  const el = window.document.getElementById(id);
  if (!el) {
    throw new Error("Can't update booster-layer, message " + id + ' missing.');
  } else {
    el.style.display = 'block';
    layerEl.className += ' nuxt-booster-layer-visible';
  }
}

export function setupBoosterLayer(layerEl, supportedBrowser) {
  if (!supportedBrowser) {
    updateBoosterLayerMessage('nuxt-booster-message-unsupported-browser');
  }
  if (!hasSufficientDownloadPerformance()) {
    updateBoosterLayerMessage(
      layerEl,
      'nuxt-booster-message-reduced-bandwidth'
    );
  }
}

export function initReducedView() {
  document.documentElement.classList.add('nuxt-booster-reduced-view');

  // activate fonts
  window.document.querySelectorAll('[data-font]').forEach(node => {
    node.classList.add('font-active');
  });

  // transform noscript>picture to picture
  Array.from(
    document.querySelectorAll('noscript.nuxt-booster-picture-noscript')
  ).forEach(el => {
    const tmp = document.createElement('div');
    tmp.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(tmp.children[0], el);
    tmp.remove();
  });
}
