import FontCollection from '#booster/classes/FontCollection';

import {
  useBoosterCritical,
  useBoosterConfig,
  useNuxtApp,
  nextTick,
  onBeforeUnmount
} from '#imports';

export default function (context) {
  const { isCritical, critical } = useBoosterCritical(context);

  const runtimeConfig = useBoosterConfig();

  const nuxtApp = useNuxtApp();

  const fontCollection = reactive(new FontCollection());

  const options = { usedFontaine: runtimeConfig.usedFontaine };

  try {
    const entry = nuxtApp.$booster.head.push(
      fontCollection,
      isCritical.value,
      options
    );
    onBeforeUnmount(() => nextTick(() => entry.dispose()));
  } catch (error) {
    console.error(error);
  }

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
