<template>
  <picture :style="style">
    <source
      v-for="(source, index) in imageSources"
      :key="index"
      :srcset="source.dataURI || source.srcset || source.url"
      :media="source.media"
      :sizes="source.sizes"
      :type="source.type"
    >
    <img
      ref="image"
      :class="{'in-progress': inProgress}"
      loading="lazy"
      :alt="alt"
      :title="title"
      :crossorigin="crossorigin"
    >
  </picture>
</template>

<script>
import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver';
import { webpSupport, isPreloadSupported } from 'nuxt-speedkit/utils/support';
import { getImagePreloadDescription } from 'nuxt-speedkit/utils/description';
import { getMimeTypeByFormat } from 'nuxt-speedkit/utils/mimeType';
import Cache from 'nuxt-speedkit/classes/Cache';
import { toHashHex } from 'nuxt-speedkit/utils/string';

const preloadCache = new Cache();

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
        return this.$crossorigin;
      }
    }
  },

  data () {
    return {
      imageSources: this.sources,
      inProgress: true,
      visible: false,
      style: {}
    };
  },

  head () {
    let data = {};
    if (this.preload.length && (this.isCritical || (process.client && this.visible))) {
      const sources = filterBySupportedMimeTypes(this.preload, webpSupport);
      const [source] = sources;

      preloadCache.getPromise(toHashHex(source.srcset), (resolve, reject) => {
        if (isPreloadSupported()) {
          data = {
            link: [getImagePreloadDescription(source, this.crossorigin, resolve)]
          };
        } else {
          doPreloadFallback(source, this.crossorigin, resolve);
        }
      }).then(e => this.onPreload(e));
    }
    return data;
  },

  watch: {
    sources () {
      if (!this.imageSources.length) {
        this.imageSources = this.sources;
      }
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
    onPreload (e) {
      this.style.backgroundImage = `url(${this.$refs.image.currentSrc})`;
      this.imageSources = this.preload;
      this.inProgress = false;
      this.$emit('load');
    }
  }
};

function doPreloadFallback ({ srcset, sizes }, crossorigin, callback = () => {}) {
  if (!process.server) {
    const img = new global.Image();
    img.onload = callback;
    img.crossorigin = crossorigin;
    img.sizes = sizes;
    img.srcset = srcset;
  }
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
  overflow: hidden;
  background-size: cover;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    filter: blur(0);
    transition-duration: 350ms;
    transition-property: filter, transform;
    transform: scale(1);
    object-fit: cover;

    &.in-progress {
      filter: blur(10px);
      transform: scale(1.1);
    }
  }
}
</style>
