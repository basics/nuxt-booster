import { <% if (options.performanceCheck) { %>run, <% } %>hasSufficientPerformance, setup } from '#speedkit/utils/performance';
import { triggerRunCallback, observeSpeedkitButton, setupSpeedkitLayer, updateSpeedkitLayerMessage, initReducedView } from '#speedkit/utils/entry';
import Deferred from '#speedkit/classes/Deferred.mjs';
import { isSupportedBrowser } from '#speedkit/utils/browser';

<% if (options.webpack) { %>
// webpack
(async () => {
  return await client().then(() => getEntry());
})()
<% } else {%>
  // vite
export default entryWrapper();

function entryWrapper(){

  if (!process.server) {
    return client().then(() => getEntry());
  } else {
    return async (ctx) => (await getEntry())(ctx)
  }

};
<%} %>
function getEntry(){
  return import('<%= options.entry %>.js').then(module => module.default);
}

function client () {
  const deferred = new Deferred();

  let initialized = false
  const layerEl = window.document.getElementById('nuxt-speedkit-layer');

  const forceInit = ('__NUXT_SPEEDKIT_FORCE_INIT__' in window && window.__NUXT_SPEEDKIT_FORCE_INIT__);

  async function initApp(force) {
    if (initialized) {
      deferred.resolve();
    }

    document.documentElement.classList.remove('nuxt-speedkit-reduced-view');

    try {

      <% if (options.performanceCheck) { %>if (!force) {
        await run(<%= options.runOptions ? JSON.stringify(options.runOptions) : '' %>);
      }<% } %>

      initialized = true;

      triggerRunCallback(true);

      console.log('resolve?')
      deferred.resolve();

    } catch (error) {
      triggerRunCallback(false);

      if (!!layerEl) {
        // User must interact via the layer.
        updateSpeedkitLayerMessage(layerEl, 'nuxt-speedkit-message-weak-hardware');
        return null;
      }
    }

    return null;
  };

  const supportedBrowser = isSupportedBrowser(<%= options.supportedBrowserDetector %>);

  window.addEventListener('load', function () {
    if (!document.getElementById('nuxt-speedkit-layer')) {
      initApp(forceInit);
    } else {

      observeSpeedkitButton('nuxt-speedkit-button-init-reduced-view', initReducedView);
      observeSpeedkitButton('nuxt-speedkit-button-init-app', () => initApp(true));

      setup(<%= options.performanceMetrics %>);

      if(('__NUXT_SPEEDKIT_AUTO_INIT__' in window && window.__NUXT_SPEEDKIT_AUTO_INIT__) || ((<%= !options.ignorePerformance %> && hasSufficientPerformance()) && supportedBrowser)) {
        initApp();
      } else {
        setupSpeedkitLayer(supportedBrowser)
      }

    }
  });

return deferred.promise;

}
