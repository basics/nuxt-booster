import { hasSufficientDownloadPerformance } from './performance.mjs';

export const triggerRunCallback = sufficient =>
  window.dispatchEvent(
    new CustomEvent('nuxt-speedkit:run', { detail: { sufficient } })
  );

export function observeSpeedkitButton(id, callback) {
  Array.from(document.querySelectorAll('#' + id)).forEach(el => {
    el.addEventListener('click', callback, {
      capture: true,
      once: true,
      passive: true
    });
  });
}

export function updateSpeedkitLayerMessage(layerEl, id) {
  const el = window.document.getElementById(id);
  if (!el) {
    throw new Error("Can't update speedkit-layer, message " + id + ' missing.');
  } else {
    el.style.display = 'block';
    layerEl.className += ' nuxt-speedkit-layer-visible';
  }
}

export function setupSpeedkitLayer(supportedBrowser) {
  if (!supportedBrowser) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-unsupported-browser');
  }
  if (!hasSufficientDownloadPerformance()) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-reduced-bandwidth');
  }
}

export function initReducedView() {
  document.documentElement.classList.add('nuxt-speedkit-reduced-view');

  // activate fonts
  window.document.querySelectorAll('[data-font]').forEach(node => {
    node.classList.add('font-active');
  });

  // transform noscript>picture to picture
  Array.from(
    document.querySelectorAll('noscript.nuxt-speedkit-picture-noscript')
  ).forEach(el => {
    const tmp = document.createElement('div');
    // eslint-disable-next-line no-unsanitized/property
    tmp.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(tmp.children[0], el);
    tmp.remove();
  });
}
