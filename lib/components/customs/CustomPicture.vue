<template>
  <picture>
    <source
      v-for="(source, index) in imageSources"
      :key="index"
      :srcset="source.dataURI || source.srcset || source.url"
      :media="source.media"
      :sizes="source.sizes"
      :type="source.type"
    >
    <img :class="{'in-progress': inProgress}" loading="lazy" :alt="alt" :title="title" :crossorigin="crossorigin">
  </picture>
</template>

<script>
import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver';
import { webpSupport, isPreloadSupported } from 'nuxt-speedkit/utils/support';
import { getPreloadDescription, doPreloadFallback } from 'nuxt-speedkit/utils/preload';
import { getMimeTypeByFormat } from 'nuxt-speedkit/utils/mimeType';

const preloadCache = new Map();

export default {
  props: {
    sources: {
      type: Array,
      default () {
        return [];
      }
    },

    preload: {
      type: Array,
      default () {
        return [];
      }
    },

    alt: {
      type: String,
      default () {
        return '';
      }
    },
    title: {
      type: String,
      default () {
        return '';
      }
    },

    crossorigin: {
      type: String,
      default () {
        return 'anonymous';
      }
    }
  },

  data () {
    return {
      imageSources: this.sources,
      inProgress: true,
      visible: false
    };
  },

  head () {
    let data = {};
    if (this.preload.length && (this.isCritical || (process.client & this.visible))) {
      const sources = filterBySupportedMimeTypes(this.preload, webpSupport);
      const [source] = sources;
      const callback = () => doCallback(source.srcset);

      if (!preloadCache.has(source.srcset)) {
        preloadCache.set(source.srcset, [this.onPreload]);
      } else {
        preloadCache.set(source.srcset, preloadCache.get(source.srcset).concat([this.onPreload]));
      }

      if (isPreloadSupported()) {
        data = {
          link: [getPreloadDescription(source, this.crossorigin, callback)]
        };
      } else {
        doPreloadFallback(source, this.crossorigin, callback);
      }
    }
    return data;
  },

  watch: {
    sources () {
      this.imageSources = this.sources;
    }
  },

  mounted () {
    registerIntersecting(this.$el, () => {
      this.visible = true;
    });
  },

  destroyed () {
    unregisterIntersecting(this.$el);
  },

  methods: {
    onPreload () {
      this.imageSources = this.preload;
      this.inProgress = false;
      this.$emit('load');
    }
  }
};

function doCallback (srcset) {
  preloadCache.get(srcset).forEach(callback => callback());
}

function filterBySupportedMimeTypes (sources, webpSupport) {
  return sources.filter((source) => {
    return !isWebp(source) || (isWebp(source) && webpSupport);
  });
}

function isWebp ({ type }) {
  return type === getMimeTypeByFormat('webp');
}
</script>

<style lang="postcss" scoped>
picture {
  display: block;
  height: inherit;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    filter: blur(0);
    transition-duration: 350ms;
    transition-property: filter;
    object-fit: cover;

    &.in-progress {
      filter: blur(10px);
    }
  }
}
</style>
