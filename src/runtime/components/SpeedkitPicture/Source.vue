<template>
  <source
    :srcset="srcset"
    :sizes="config.sizes"
    :media="source.media"
    :type="type"
  />
</template>

<script>
import { computed } from 'vue';
import { getCrossorigin } from '#speedkit/utils';
import Source from '#speedkit/components/SpeedkitImage/classes/Source';

import { useImage, useNuxtApp, useHead } from '#imports';

const types = new Map([['jpg', 'jpeg']]);

export default {
  props: {
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
  },

  setup(props) {
    const $img = useImage();
    const $speedkit = useNuxtApp().$speedkit;
    const config = $img.getSizes(props.source.src, {
      sizes: props.source.sizes,
      modifiers: props.source.getModifiers(),
      ...props.source.getOptions()
    });

    const resolvedCrossorigin = computed(() => {
      return getCrossorigin(props.crossorigin || $speedkit.crossorigin);
    });

    const imageSource = new Source(props.source);
    useHead({
      link: [
        config &&
          imageSource.preload &&
          imageSource.getPreload(
            config.srcset,
            config.sizes,
            resolvedCrossorigin
          )
      ].filter(Boolean)
    });

    return { config, resolvedCrossorigin };
  },

  computed: {
    srcset() {
      return this.config.srcset || this.config.src;
    },

    type() {
      return `image/${types.get(this.source.format) || this.source.format}`;
    }
  }
};
</script>
