import { computed, reactive } from 'vue';
import { useHead, useBoosterCritical, useBoosterConfig } from '#imports';
import { useNuxtApp } from '#app';
import FontCollection from '#booster/classes/FontCollection';

export default function (context) {
  const { isCritical, critical } = useBoosterCritical(context);

  const runtimeConfig = useBoosterConfig();

  const nuxtApp = useNuxtApp();

  const fontCollection = reactive(new FontCollection());

  writeHead(isCritical, fontCollection, runtimeConfig);

  return {
    isCritical,
    critical,
    $getFont: (...args) => {
      return {
        runtimeConfig,
        isCritical: isCritical.value,
        fontCollection,
        definition: nuxtApp.$booster.getFont(...args)
      };
    }
  };
}

function writeHead(isCritical, fontCollection, runtimeConfig) {
  const options = { usedFontaine: runtimeConfig.usedFontaine };
  useHead({
    link: computed(() => {
      return fontCollection.getPreloadDescriptions(isCritical.value);
    }),
    style: computed(() => {
      return fontCollection.getStyleDescriptions(options);
    }),
    noscript: computed(() => {
      return fontCollection.getNoScriptStyleDescriptions();
    })
  });
}
