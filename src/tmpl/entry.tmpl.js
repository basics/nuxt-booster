export default options => {
  let code = `import { ${
    options.performanceCheck ? `run, ` : ``
  }hasSufficientPerformance, setup } from '#booster/utils/performance';
import { createInitElement, waitForVisibilty, triggerRunCallback, observeBoosterButton, setupBoosterLayer, updateBoosterLayerMessage, initReducedView, hasBatteryPerformanceIssue, deprecationWarningButtonSelector } from '#booster/utils/entry';
import Deferred from '#booster/classes/Deferred';
import { isSupportedBrowser } from '#booster/utils/browser';
import {video as videoBlob} from './blobs.mjs';

`;

  if (options.webpack) {
    code += `
// webpack
(() => client().then(() => getEntry()))()
`;
  } else {
    code += `
  // vite
export default entryWrapper();

function entryWrapper () {
  if (!import.meta.server) {
    return client().then(() => getEntry());
  } else {
    return async (ctx) => (await getEntry())(ctx)
  }
}

`;
  }

  code += `
function getEntry(){
  return import('${options.entry}').then(module => module.default);
}

function client () {
  const deferred = new Deferred();
  const url = new URL(window.location.href);

  let ready = false
  const layerEl = window.document.getElementById('nuxt-booster-layer');

  const forceInit = ('__NUXT_BOOSTER_FORCE_INIT__' in window && window.__NUXT_BOOSTER_FORCE_INIT__);

  async function initApp(force) {

    if (!force && url.searchParams.has('test')) {
      console.log('test');
      return false;
    }

    if (ready) {
      console.log('ready force');
      return true
    }

    await waitForVisibilty();

    document.documentElement.classList.remove('nuxt-booster-reduced-view');

    if (layerEl) {

      const supportedBrowser = isSupportedBrowser(${
        options.supportedBrowserDetector
      });


      if (!force && !supportedBrowser){
        setupBoosterLayer(layerEl, supportedBrowser);
        return false;
      }

      if (!force && ${!options.ignorePerformance} && hasSufficientPerformance()) {
        document.documentElement.classList.remove('nuxt-booster-reduced-view');
        return false;
      }

    }

${getBatteryCheck(options)}

    try {
${getPerformanceCheck(options)}

      ready = true;

      triggerRunCallback(true);

      deferred.resolve();

    console.log('ready default', {force});
      return true;

    } catch (error) {

      console.warn(error)

      triggerRunCallback(false);

      console.warn('nuxt-booster-message-weak-hardware');
      if (!!layerEl) {
        // User must interact via the layer.
        updateBoosterLayerMessage(layerEl, 'nuxt-booster-message-weak-hardware');
      }
      return false;
    }
  };


  window.addEventListener('load', async function () {
    if (!layerEl) {
      const ready = await initApp(forceInit)
      console.log('ready', {ready, forceInit});

      ${getFallbackInit(options)}

    } else {

      observeBoosterButton('.nuxt-booster-button-init-reduced-view', initReducedView);
      observeBoosterButton('.nuxt-booster-button-init-app', () => initApp(true));

      /* id selector will removed in future */
      deprecationWarningButtonSelector(initApp);

      setup(${options.performanceMetrics});

      initApp(!!forceInit);

    }
  });

  window.__NUXT_BOOSTER_INIT_APP__ = initApp;

  return deferred.promise;

}
`;

  return code;
};

const getFallbackInit = options => {
  if (options.experimental.fallbackInit) {
    return `

      let duration = ${options.experimental.fallbackInit.duration || 3000};

      if (url.searchParams.has('test')) {
        duration = Number(url.searchParams.get('test'));
      }

      if (!forceInit && !ready) {
        createInitElement(() => {
          console.log('force init by element!');
          initApp(true);
        }, { duration });
      }
      `;
  }
  return '';
};

const getPerformanceCheck = options => {
  if (options.performanceCheck) {
    return `
      if (!force) {
        await run(${
          options.runOptions ? JSON.stringify(options.runOptions) : ''
        });
      }
`;
  }
  return '';
};

const getBatteryCheck = options => {
  if (!options.ignore.battery) {
    return `
    try {
      if (!force) {
        await hasBatteryPerformanceIssue(videoBlob)
      }
    } catch (error) {

      console.warn(error)

      triggerRunCallback(false);

      if (!!layerEl) {
        // User must interact via the layer.
        updateBoosterLayerMessage(layerEl, 'nuxt-booster-message-low-battery');
        return false;
      }
    }
    `;
  }
  return '';
};
