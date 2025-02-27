<template>
  <source
    :srcset="srcset"
    :sizes="config.sizes"
    :media="source.media"
    :type="type"
  />
</template>

<script lang="ts" setup>
import { getCrossorigin } from '#booster/utils/browser';
import { useNuxtApp, useHead, useImage } from '#imports';
import { computed, ref } from 'vue';

import Source from '#booster/components/BoosterImage/classes/Source';
import type { CrossOrigin } from '../../../types';

const types = new Map([['jpg', 'jpeg']]);

const $props = defineProps({
  source: {
    type: Source,
    required: true
  },

  crossorigin: {
    type: [Boolean, String],
    default() {
      return null;
    },
    validator: (v: CrossOrigin) =>
      ['anonymous', 'use-credentials', '', true, false, undefined].includes(v)
  }
});

const $img = useImage();
const $booster = useNuxtApp().$booster;
const config = $img.getSizes($props.source.src, {
  sizes: $props.source.sizes,
  modifiers: $props.source.getModifiers(),
  ...$props.source.getOptions($booster)
});

const srcset = ref(config.srcset || config.src);
const type = ref(
  $props.source.format &&
    `image/${types.get($props.source.format) || $props.source.format}`
);

const resolvedCrossorigin = computed(() => {
  return getCrossorigin(
    ($props.crossorigin as CrossOrigin) || $booster.crossorigin
  );
});

const imageSource = new Source($props.source);

useHead(() => {
  const hasPreload =
    config &&
    imageSource.preload &&
    srcset.value &&
    (import.meta.server || process.env.prerender);
  return {
    link: hasPreload
      ? [
          imageSource.getPreload(
            srcset.value as string,
            config.sizes,
            resolvedCrossorigin.value
          )
        ]
      : []
  };
});
</script>
