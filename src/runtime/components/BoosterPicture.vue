<template>
  <component :is="render" />
</template>

<script lang="ts" setup>
import { computed, h, useAttrs, useBoosterCritical } from '#imports';
import HydrateWrapper from './HydrateWrapper';
import BoosterPicture from '#booster/components/BoosterPicture/Base.vue';
import pictureProps from './BoosterPicture/props';

const $props = defineProps({
  hydrate: {
    type: Boolean,
    default: true
  },
  ...pictureProps
});

const $attrs = useAttrs();
const { isCritical } = useBoosterCritical();

const render = computed(() => {
  if (!$props.hydrate) {
    return h(HydrateWrapper, {}, [
      h(
        'noscript',
        {
          class: 'nuxt-booster-picture-noscript'
        },
        [
          h(BoosterPicture, {
            ...$attrs,
            ...{ ...$props, hydrate: undefined },
            critical: $props.hydrate
          })
        ]
      )
    ]);
  }

  return h(BoosterPicture, {
    ...$attrs,
    ...{ ...$props, hydrate: undefined },
    critical: isCritical.value
  });
});
</script>
