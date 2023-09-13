import { computed, reactive } from 'vue';
import { useHead } from '#imports';
import { useNuxtApp } from '#app';
import FontCollection from '#speedkit/classes/FontCollection';
import useCritical from '#speedkit/composables/critical';
import useConfig from '#speedkit/composables/config';

export default function useFonts(context) {
  const { isCritical, critical } = useCritical(context);

  const runtimeConfig = useConfig();

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
        definition: nuxtApp.$speedkit.getFont(...args)
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
      return fontCollection.getNoScriptStyleDescriptions(options);
    })
  });
}
