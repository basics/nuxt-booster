<template>
  <render />
</template>

<script setup>
import { useBoosterCritical, useAttrs } from '#imports';
import { h } from 'vue';

import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import BoosterImage from '#booster/components/BoosterImage/Base';

defineOptions({
  inheritAttrs: false
});

const $attrs = useAttrs();

const $props = defineProps({
  hydrate: {
    type: Boolean,
    default: true
  }
});

const { isCritical } = useBoosterCritical();
const render = () => {
  if (!$props.hydrate) {
    return h(LazyHydrationWrapper, { props: { never: true } }, [
      h('noscript', {}, [
        h(BoosterImage, { ...$attrs, critical: $props.hydrate })
      ])
    ]);
  }
  return h(BoosterImage, { ...$attrs, critical: isCritical.value });
};
</script>
