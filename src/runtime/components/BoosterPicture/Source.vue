<template>
  <source
    :srcset="srcset"
    :sizes="config.sizes"
    :media="source.media"
    :type="type"
  />
</template>

<script setup>
import { getCrossorigin } from '#booster/utils/browser';
import { useNuxtApp, useHead, useImage } from '#imports';
import { ref } from 'vue';

import Source from '#booster/components/BoosterImage/classes/Source';

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
    validator: val =>
      ['anonymous', 'use-credentials', '', true, false].includes(val)
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
  `image/${types.get($props.source.format) || $props.source.format}`
);

const resolvedCrossorigin = ref(
  getCrossorigin($props.crossorigin || $booster.crossorigin)
);

const imageSource = new Source($props.source);

useHead({
  link: [
    config &&
      imageSource.preload &&
      (import.meta.server || process.env.prerender) &&
      imageSource.getPreload(srcset, config.sizes, resolvedCrossorigin)
  ].filter(Boolean)
});
</script>
