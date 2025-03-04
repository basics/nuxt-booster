<template>
  <component :is="render" />
</template>

<script setup lang="ts">
import { computed, h, useBoosterCritical } from '#imports';
import HydrateWrapper from './HydrateWrapper';
import BoosterImage from '#booster/components/BoosterImage/Base.vue';
import imageProps from './BoosterImage/props';

const $props = defineProps({
  hydrate: {
    type: Boolean,
    default: true
  },
  ...imageProps
});

const { isCritical } = useBoosterCritical();

const render = computed(() => {
  if (!$props.hydrate) {
    return h(HydrateWrapper, {}, [
      h(
        'noscript',
        {
          class: 'nuxt-booster-image-noscript'
        },
        [
          h(BoosterImage, {
            ...$props,
            hydrate: undefined,
            critical: $props.hydrate
          })
        ]
      )
    ]);
  }

  return h(BoosterImage, {
    ...$props,
    hydrate: undefined,
    critical: isCritical.value
  });
});
</script>
