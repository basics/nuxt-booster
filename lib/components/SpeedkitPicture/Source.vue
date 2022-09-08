<template>
  <source :srcset="srcset" :sizes="config.sizes" :media="source.media" :type="type">
</template>

<script>
import Source from 'nuxt-speedkit/components/SpeedkitImage/classes/Source';
import { getCrossorigin } from 'nuxt-speedkit/utils';

const types = new Map([['jpg', 'jpeg']]);

export default {
  props: {
    source: {
      type: Source,
      required: true
    },

    crossorigin: {
      type: [Boolean, String],
      default () {
        return this.$speedkit.crossorigin;
      },
      validator: val => ['anonymous', 'use-credentials', '', true, false].includes(val)
    }
  },

  data () {
    return {
      config: null
    };
  },

  fetchKey (getCounter) {
    const key = `source-${this.source.key}`;
    return `${key}-${getCounter(key)}`;
  },

  fetch () {
    this.config = this.$img.getSizes(this.source.src, {
      sizes: this.source.sizes,
      modifiers: this.source.getModifiers(),
      ...this.source.getOptions()
    });
  },

  head () {
    const imageSource = new Source(this.source);
    if (this.config && imageSource.preload) {
      return {
        link: [imageSource.getPreload(this.config.srcset, this.config.sizes, getCrossorigin(this.crossorigin))]
      };
    }
    return {};
  },

  computed: {
    srcset () {
      return this.config.srcset || this.config.src;
    },

    type () {
      return `image/${types.get(this.source.format) || this.source.format}`;
    }
  }
};
</script>
