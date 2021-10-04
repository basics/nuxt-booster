<template>
  <img
    v-bind="$attrs"
    :srcset="srcset"
    :sizes="sizes"
    :width="width"
    :height="height"
    class="image"
    :class="classNames"
    :title="title"
    :alt="alt || title"
    :loading="loadingMode"
    :decoding="decodingMode"
    :crossorigin="$speedkit.crossorigin"
    v-on="$listeners"
    @load="onLoad"
  >
</template>

<script>
import Source from './classes/Source';
import LoadingSpinner from './classes/LoadingSpinner';

export default {
  inheritAttrs: false,

  props: {
    source: {
      type: Source,
      default: null
    },

    loadingSpinner: {
      type: LoadingSpinner,
      default () {
        return this.$speedkit.loader();
      }
    },

    title: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      default: null
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

  fetchKey () {
    return `image-${this.source && this.source.key}`;
  },

  async fetch () {
    if (this.source) {
      this.config = this.$img.getSizes(this.source.src, {
        sizes: this.source.sizes,
        modifiers: this.source.getModifiers()
      });
      const { ssrContext } = this.$nuxt.context;
      this.meta = await this.source.getMeta(this.config.src, ssrContext?.nuxt?._img || {});
      this.className = this.meta.className;
    }
  },

  head () {
    return {
      style: this.style,
      link: this.preload,
      noscript: [
        { hid: 'img-nojs', innerHTML: '<style>img { content-visibility: unset !important; }</style>' }
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  },

  computed: {
    classNames () {
      const classNames = [{ loading: this.loading }].concat(this.className);
      this.loadingSpinner && classNames.push(this.loadingSpinner.className);
      return classNames;
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
    },

    style () {
      if (!this.meta) {
        return [];
      }
      return [
        this.loadingSpinner && { hid: this.loadingSpinner.className, type: 'text/css', cssText: this.loadingSpinner.style },
        { hid: this.className, type: 'text/css', cssText: new Source(this.meta).style }
      ];
    },

    preload () {
      if (!this.config || !this.isCritical) {
        return [];
      }
      return [new Source(this.source).getPreload(this.config.srcset, this.config.sizes)];
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
