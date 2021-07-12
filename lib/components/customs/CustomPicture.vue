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
import { observeIntersection, unobserveIntersection } from 'nuxt-speedkit/utils/intersectionObserver';
import { webpSupport, isPreloadSupported, isPictureSupported } from 'nuxt-speedkit/utils/support';
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
      const source = this.getPreloadSource();
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
    observeIntersection(this.$el, (e) => {
      this.visible = true;
      this.$emit('enter', e);
    });
  },

  destroyed () {
    unobserveIntersection(this.$el);
  },

  methods: {
    onPreload (e) {
      this.style.backgroundImage = `url(${this.$refs.image.currentSrc})`;
      this.imageSources = this.preload;
      this.inProgress = false;
      this.$emit('load');
      global.requestAnimationFrame(() => {
        doPolyfill(this.$el, this.$refs.image);
      });
    },
    getPreloadSource () {
      const sources = filterBySupportedMimeTypes(this.preload);
      const type = Array.from(new Set(sources.map(({ type }) => type))).shift();
      const { srcset, sizes } = sources.filter(source => (source.type === type)).reduce((result, source) => {
        result.srcset.push(source.srcset);
        result.sizes.push(source.sizes);
        return result;
      }, { srcset: [], sizes: [] });
      return {
        srcset: srcset.join(', '),
        sizes: sizes.join(', '),
        type
      };
    }
  }
};

function doPreloadFallback ({ srcset, sizes }, crossorigin, callback = () => {}) {
  if (!process.server) {
    if (isPictureSupported()) {
      const img = new global.Image();
      img.sizes = sizes;
      img.srcset = srcset;
      img.crossorigin = crossorigin;
      img.onload = callback;
    } else {
      callback();
    }
  }
}

function filterBySupportedMimeTypes (sources) {
  return sources.filter((source) => {
    return !isWebp(source) || (isWebp(source) && webpSupport);
  });
}

function isWebp ({ type }) {
  return type === getMimeTypeByFormat('webp');
}

function doPolyfill (pictureEl, imageEl) {
  // See more https://github.com/fregante/object-fit-images
  if ('objectFitImages' in global) {
    global.objectFitImages(imageEl);
  }
  // See more https://github.com/scottjehl/picturefill
  if ('picturefill' in global) {
    global.picturefill({ elements: pictureEl });
  }
}
</script>

<style scoped>
picture {
  display: block;
  height: inherit;
  overflow: hidden;
  background-size: cover;
}

picture img {
  display: block;
  width: 100%;
  height: 100%;
  filter: blur(0);
  transition-duration: 350ms;
  transition-property: filter, transform;
  transform: scale(1);
  object-fit: cover;
}

picture img.in-progress {
  filter: blur(10px);
  transform: scale(1.1);
}
</style>
