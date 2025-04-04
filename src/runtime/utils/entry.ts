import Deferred from '../classes/Deferred';
import { hasSufficientDownloadPerformance } from './performance';

export const triggerRunCallback = (sufficient: boolean) =>
  window.dispatchEvent(
    new CustomEvent('nuxt-booster:run', { detail: { sufficient } })
  );

export const observeBoosterButton = (
  selector: string,
  callback: EventListenerOrEventListenerObject
) => {
  Array.from(document.querySelectorAll(selector)).forEach(el => {
    el.addEventListener('click', callback, {
      capture: true,
      once: true,
      passive: true
    });
  });
};

export const updateBoosterLayerMessage = (layerEl: HTMLElement, id: string) => {
  const el = window.document.getElementById(id);
  if (!el) {
    throw new Error("Can't update booster-layer, message " + id + ' missing.');
  } else {
    el.style.display = 'block';
    layerEl.className += ' nuxt-booster-layer-visible';
  }
};

export const setupBoosterLayer = (
  layerEl: HTMLElement,
  supportedBrowser: boolean
) => {
  if (!supportedBrowser) {
    updateBoosterLayerMessage(
      layerEl,
      'nuxt-booster-message-unsupported-browser'
    );
  }
  if (!hasSufficientDownloadPerformance()) {
    updateBoosterLayerMessage(
      layerEl,
      'nuxt-booster-message-reduced-bandwidth'
    );
  }
};

export const initReducedView = () => {
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
    if (el.parentNode) {
      el.parentNode.replaceChild(tmp.children[0], el);
    } else {
      console.warn('Can not replace noscript element.');
    }
    tmp.remove();
  });
};

export const hasBatteryPerformanceIssue = async (videoBlob: Blob) => {
  try {
    if (await isBatteryLow()) {
      throw new Error('Battery is low.');
    }
  } catch (error) {
    if ((error as Error).message === 'Battery is low.') {
      throw error;
    }
    await canVideoPlay(videoBlob);
  }
};

export const waitForVisibilty = () => {
  const { promise, resolve } = new Deferred();
  if (document.visibilityState === 'hidden') {
    document.addEventListener('visibilitychange', resolve, {
      once: true
    });
  } else {
    resolve();
  }
  return promise;
};

interface BatteryManager {
  charging: boolean;
  level: number;
}

interface ExtendedNavigator extends Navigator {
  getBattery(): Promise<BatteryManager>;
}

/**
 * Checks if battery still has enough energy.
 * This check is for Chrome and all other browsers that support this setting.
 *
 * Condition is: The device is not charging and Battery is below <= 20%.
 * @see https://blog.google/products/chrome/new-chrome-features-to-save-battery-and-make-browsing-smoother/
 * @see https://developer.chrome.com/blog/memory-and-energy-saver-mode/
 **/
const isBatteryLow = async () => {
  const MIN_BATTERY_LEVEL = 0.2;
  const battery = await (window.navigator as ExtendedNavigator).getBattery();
  return !battery.charging && battery.level <= MIN_BATTERY_LEVEL;
};

/**
 * Checking whether a video can be played.
 * This check is for IOS and checks if the power saving mode is enabled.
 *
 * In this case no video will be played automatically and play throws an error.
 */
export const canVideoPlay = async (blob: Blob) => {
  const objectUrl = URL.createObjectURL(blob);
  try {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.src = objectUrl;

    const { promise, resolve } = new Deferred();
    const timeout = window.setTimeout(resolve, 500);

    await Promise.race([video.play(), promise]);
    window.clearTimeout(timeout);

    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    URL.revokeObjectURL(objectUrl);
    throw error;
  }
};

export const deprecationWarningButtonSelector = (initApp: CallableFunction) => {
  if (
    document.querySelector(
      '#nuxt-booster-button-init-nojs, #nuxt-booster-button-init-app, #nuxt-booster-button-init-reduced-view'
    )
  ) {
    console.warn(
      'The `#nuxt-booster-button-init-nojs`, `#nuxt-booster-button-init-reduced-view` and `#nuxt-booster-button-init-app` ids are deprecated. Please use the following classes instead: `.nuxt-booster-button-init-nojs`, `.nuxt-booster-button-init-reduced-view` and `.nuxt-booster-button-init-app`.'
    );
    observeBoosterButton(
      '#nuxt-booster-button-init-reduced-view',
      initReducedView
    );
    observeBoosterButton('#nuxt-booster-button-init-app', () => initApp(true));
  }
};

export function createFallbackInit(duration: number) {
  return new Promise(resolve => {
    duration = duration || 3000;
    createInitElement({ duration }, resolve);
  });
}

export function createInitElement(
  { duration } = { duration: 3000 },
  callback: CallableFunction
) {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.opacity = '0';
  div.style.animationName = 'fade-in';
  div.style.animationDuration = '0.2s';
  div.style.animationDelay = `${duration}ms`;
  div.style.animationFillMode = 'forwards';
  div.addEventListener('animationend', () => {
    div.remove();
    style.remove();
    callback();
  });
  document.body.appendChild(div);
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fade-in {
      100% {
        opacity: 1;
      }
    }
    `;
  document.head.appendChild(style);
}
