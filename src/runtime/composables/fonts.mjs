import {
  computed,
  reactive,
  ref,
  inject,
  provide,
  useAttrs,
  useNuxtApp,
  useHead,
  useRuntimeConfig
} from '#imports';
import FontCollection from '#speedkit/classes/FontCollection';

const criticalContextKey = Symbol('criticalContext');

export function useFonts({ critical } = {}) {
  const attrs = useAttrs();

  const { speedkit: runtimeConfig } = useRuntimeConfig().public;

  const nuxtApp = useNuxtApp();

  const currentCritical = ref(
    !('critical' in attrs)
      ? critical
      : attrs.critical === '' || String(attrs.critical) === 'true'
  );

  const criticalInject = inject(
    criticalContextKey,
    currentCritical.value || false
  );

  const isCritical = computed(() => {
    return typeof currentCritical.value === 'boolean'
      ? currentCritical.value
      : criticalInject;
  });

  provide(criticalContextKey, isCritical.value || critical);

  const fontCollection = reactive(new FontCollection());

  writeHead(isCritical, fontCollection);

  return {
    isCritical,
    critical: criticalInject,
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

function writeHead(isCritical, fontCollection) {
  // const head = fontCollection.getHeadDescription ? fontCollection.getHeadDescription(isCritical) : {};
  useHead({
    link: computed(() => {
      return fontCollection.getPreloadDescriptions(isCritical.value);
    }),
    style: computed(() => {
      return fontCollection.getStyleDescriptions();
    }),
    noscript: computed(() => {
      return fontCollection.getNoScriptStyleDescriptions();
    })
    // __dangerouslyDisableSanitizers: ['style', 'noscript']
  });
}
