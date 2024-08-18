<template>
  <render />
</template>

<script setup>
import { useBoosterCritical, useAttrs } from '#imports';
import { h } from 'vue';

import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import BoosterPicture from '#booster/components/BoosterPicture/Base';

defineOptions({
  inheritAttrs: false
});

const $props = defineProps({
  hydrate: {
    type: Boolean,
    default: true
  }
});

const $attrs = useAttrs();
const { isCritical } = useBoosterCritical();

const render = () => {
  if (!$props.hydrate) {
    return h(LazyHydrationWrapper, { never: true }, [
      h(
        'noscript',
        {
          class: 'nuxt-booster-picture-noscript'
        },
        [h(BoosterPicture, { ...$attrs, critical: $props.hydrate })]
      )
    ]);
  }
  return h(BoosterPicture, { ...$attrs, critical: isCritical.value });
};
</script>
