export default options => {
  let code = `import { ${
    options.performanceCheck ? `run, ` : ``
  }hasSufficientPerformance, setup } from '#booster/utils/performance';
import { triggerRunCallback, observeBoosterButton, setupBoosterLayer, updateBoosterLayerMessage, initReducedView, hasBatteryPerformanceIssue, deprecationWarningButtonSelector } from '#booster/utils/entry';
import Deferred from '#booster/classes/Deferred';
import { isSupportedBrowser } from '#booster/utils/browser';
import {video as videoBlob} from './blobs.mjs';

`;

  if (options.webpack) {
    code += `
// webpack
(async () => {
  return await client().then(() => getEntry());
})()
`;
  } else {
    code += `
  // vite
export default entryWrapper();

function entryWrapper(){

  if (!process.server) {
    return client().then(() => getEntry());
  } else {
    return async (ctx) => (await getEntry())(ctx)
  }

};
`;
  }

  code += `
function getEntry(){
  return import('${options.entry}').then(module => module.default);
}

function client () {
  const deferred = new Deferred();

  let initialized = false
  const layerEl = window.document.getElementById('nuxt-booster-layer');

  const forceInit = ('__NUXT_BOOSTER_FORCE_INIT__' in window && window.__NUXT_BOOSTER_FORCE_INIT__);

  async function initApp(force) {

    if (initialized) {
      deferred.resolve();
    }

    document.documentElement.classList.remove('nuxt-booster-reduced-view');

    `;

  if (!options.ignore.battery) {
    code += `
    try {
      if (!force) {
        await hasBatteryPerformanceIssue(videoBlob)
      }
    } catch (error) {

      console.warn(error)

      triggerRunCallback(false);

      if (!!layerEl) {
        // User must interact via the layer.
        updateSpeedkitLayerMessage(layerEl, 'nuxt-speedkit-message-low-battery');
        return null;
      }
    }
    `;
  }

  code += `
    try {`;

  if (options.performanceCheck) {
    code += `
if (!force) {
        await run(${
          options.runOptions ? JSON.stringify(options.runOptions) : ''
        });
      }
`;
  }

  code += `

      initialized = true;

      triggerRunCallback(true);

      deferred.resolve();

    } catch (error) {

      console.warn(error)

      triggerRunCallback(false);

      if (!!layerEl) {
        // User must interact via the layer.
        updateBoosterLayerMessage(layerEl, 'nuxt-booster-message-weak-hardware');
        return null;
      }
    }

    return null;
  };

  const supportedBrowser = isSupportedBrowser(${
    options.supportedBrowserDetector
  });

  window.addEventListener('load', function () {
    if (!document.getElementById('nuxt-booster-layer')) {
      initApp(forceInit);
    } else {

      observeBoosterButton('.nuxt-booster-button-init-reduced-view', initReducedView);
      observeBoosterButton('.nuxt-booster-button-init-app', () => initApp(true));

      /* id selector will removed in future */
      deprecationWarningButtonSelector(initApp);

      setup(${options.performanceMetrics});

      if(('__NUXT_BOOSTER_AUTO_INIT__' in window && window.__NUXT_BOOSTER_AUTO_INIT__) || ((${!options.ignorePerformance} && hasSufficientPerformance()) && supportedBrowser)) {
        initApp();
      } else {
        setupBoosterLayer(layerEl, supportedBrowser)
      }

    }
  });

return deferred.promise;

}
`;

  return code;
};
