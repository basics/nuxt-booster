<template>
  <source :srcset="srcset" :sizes="config.sizes" :media="source.media" :type="type">
</template>

<script>
import ImageSource from '../image/classes/ImageSource';

const types = new Map([['jpg', 'jpeg']]);

export default {
  props: {
    source: {
      type: ImageSource,
      required: true
    }
  },

  data () {
    return {
      config: null
    };
  },

  fetchKey: 'source',
  fetch () {
    this.config = this.$img.getSizes(this.source.src, {
      sizes: this.source.sizes,
      modifiers: { format: this.source.format, quality: this.source.quality }
    });
  },

  head () {
    const imageSource = new ImageSource(this.source);
    if (this.config && this.isCritical && imageSource.format === 'avif') {
      return {
        link: [imageSource.getPreload(this.config.srcset, this.config.sizes)]
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
