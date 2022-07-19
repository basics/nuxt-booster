<template>
  <img
    v-bind="$attrs"
    :srcset="srcset"
    :sizes="sizes"
    :width="width"
    :height="height"
    class="nuxt-speedkit-image"
    :class="classNames"
    :title="title"
    :alt="alt || title"
    :loading="loadingMode"
    :decoding="decodingMode"
    :crossorigin="getCrossorigin(crossorigin)"
    v-on="{...$listeners, load: onLoad}"
  >
</template>

<script>
import Source from 'nuxt-speedkit/components/SpeedkitImage/classes/Source';
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';
import { getCrossorigin } from 'nuxt-speedkit/utils';

export default {
  inheritAttrs: false,

  props: {
    source: {
      type: [Source, Object],
      default: null
    },

    title: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      default: null
    },

    crossorigin: {
      type: [Boolean, String],
      default () {
        return this.$speedkit.crossorigin;
      },
      validator: val => ['anonymous', 'use-credentials', '', true, false].includes(val)
    },

    loadingSpinner: {
      type: LoadingSpinner,
      default () {
        return this.$speedkit.loader();
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

  fetchKey (getCounter) {
    let key;
    if (this.source) {
      key = `image-${(new Source(this.source))?.key}`;
    } else {
      key = 'image';
    }
    return `${key}-${getCounter(key)}`;
  },

  async fetch () {
    if (this.source) {
      const source = new Source(this.source);
      this.config = this.$img.getSizes(source.src, {
        sizes: source.sizes,
        modifiers: source.getModifiers(),
        ...source.getOptions()
      });
      const { ssrContext } = this.$nuxt.context;
      this.meta = await source.getMeta(this.config.src, ssrContext?.nuxt?._img || {});
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
      return (this.config?.srcset || this.config?.src);
    },

    sizes () {
      return this.config?.sizes;
    },

    width () {
      return this.$attrs.width || this.meta?.width;
    },

    height () {
      return this.$attrs.height || this.meta?.height;
    },

    loadingMode () {
      if (this.isCritical) {
        return 'eager';
      }
      return 'lazy';
    },

    decodingMode () {
      if (!this.source || (new Source(this.source)).format !== 'svg') {
        return 'async';
      }
      return 'sync';
    },

    style () {
      return [
        this.loadingSpinner && { hid: this.loadingSpinner.className, type: 'text/css', cssText: this.loadingSpinner.style },
        this.meta && { hid: this.className, type: 'text/css', cssText: new Source(this.meta).style }
      ].filter(Boolean);
    },

    preload () {
      if (!this.config || !this.isCritical) {
        return [];
      }
      return [new Source(this.source).getPreload(this.config.srcset, this.config.sizes, getCrossorigin(this.crossorigin))];
    }
  },

  mounted () {
    this.loading = !this.$el.complete;
  },

  methods: {
    getCrossorigin,
    onLoad (e) {
      this.loading = false;
      this.$emit('load', e.target.currentSrc);
    }
  }
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.nuxt-speedkit-image {
  content-visibility: auto;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/*! purgecss end ignore */
</style>
