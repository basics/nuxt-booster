<template>
  <source
    :srcset="srcset"
    :sizes="config.sizes"
    :media="source.media"
    :type="type"
  />
</template>

<script>
import { useNuxtApp, useHead, useImage, computed } from '#imports';
import { getCrossorigin } from '#booster/utils';
import Source from '#booster/components/BoosterImage/classes/Source';

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
    const $booster = useNuxtApp().$booster;
    const config = $img.getSizes(props.source.src, {
      sizes: props.source.sizes,
      modifiers: props.source.getModifiers(),
      ...props.source.getOptions($booster)
    });

    const resolvedCrossorigin = computed(() => {
      return getCrossorigin(props.crossorigin || $booster.crossorigin);
    });

    const imageSource = new Source(props.source);
    useHead({
      link: [
        config &&
          imageSource.preload &&
          (import.meta.server || process.env.prerender) &&
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
