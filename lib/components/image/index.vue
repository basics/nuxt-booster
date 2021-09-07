<template>
  <img
    v-bind="$attrs"
    :srcset="srcset"
    :sizes="sizes"
    :width="width"
    :height="height"
    class="image"
    :class="classNames"
    :loading="loadingMode"
    :decoding="decodingMode"
    v-on="$listeners"
    @load="onLoad"
  >
</template>

<script>
import ImageSource from './classes/ImageSource';
import LoadingSpinner from './classes/LoadingSpinner';

export default {
  inheritAttrs: false,

  props: {
    source: {
      type: ImageSource,
      default: null
    },

    preloadSources: {
      type: Array,
      default: null
    },

    loadingSpinner: {
      type: LoadingSpinner,
      default () {
        return null;
      }
    }
  },

  data () {
    return {
      className: null,
      loading: true,
      config: null,
      meta: null
    };
  },

  fetchKey: 'image',
  async fetch () {
    if (this.source) {
      this.config = this.$img.getSizes(this.source.src, { sizes: this.source.sizes, modifiers: { format: this.source.format, quality: this.source.quality } });
      this.meta = await this.source.getMeta(this.$img);
      this.className = this.meta.className;
    }
  },

  head () {
    let cssRule = null;

    if (this.meta) {
      cssRule = new ImageSource(this.meta).style;
    }

    const preloads = [];
    if (this.config && this.isCritical) {
      preloads.push(new ImageSource(this.source).getPreload(this.config.srcset, this.config.sizes));
    }

    return {
      style: [
        {
          cssText: this.loadingSpinner.style,
          type: 'text/css',
          hid: this.loadingSpinner.className
        }, {
          cssText: cssRule,
          type: 'text/css',
          hid: this.className
        }
      ],
      link: preloads,
      noscript: [
        {
          hid: 'img-nojs',
          innerHTML: '<style>img { content-visibility: unset !important; }</style>'
        }
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  },

  computed: {
    classNames () {
      return [{
        [this.loadingSpinner.className]: true,
        loading: this.loading
      }].concat(this.className);
    },

    srcset () {
      return this.config && (this.config.srcset || this.config.src);
    },

    sizes () {
      return this.config && this.config.sizes;
    },

    width () {
      return this.meta && this.meta.width;
    },

    height () {
      return this.meta && this.meta.height;
    },

    loadingMode () {
      if (this.isCritical) {
        return 'eager';
      }
      return 'lazy';
    },

    decodingMode () {
      if (!this.source || this.source.format !== 'svg') {
        return 'async';
      }
      return 'sync';
    }
  },

  mounted () {
    this.loading = !this.$el.complete;
  },

  methods: {
    onLoad (e) {
      this.loading = false;
      this.$emit('load', e.target.currentSrc);
    }
  }
};
</script>

<style lang="postcss" scoped>
img {
  content-visibility: auto;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
