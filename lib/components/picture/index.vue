<template>
  <picture :class="classNames.picture" class="nuxt-speedkit__picture">
    <picture-source v-for="(source) in formatSources" :key="source.key" :source="source" />
    <base-image :class="classNames.image" :title="title" :alt="alt" :loading-spinner="loadingSpinner" @load="onLoad" />
  </picture>
</template>

<script>
import BaseImage from 'nuxt-speedkit/components/Image';
import ImageSourceList from 'nuxt-speedkit/components/Picture/classes/ImageSourceList';
import LoadingSpinner from 'nuxt-speedkit/components/Image/classes/LoadingSpinner';
import PictureSource from 'nuxt-speedkit/components/Source';

const formatPriority = ['avif', 'webp', 'png', 'jpg'];

export default {
  components: {
    PictureSource,
    BaseImage
  },

  props: {
    sources: {
      type: ImageSourceList,
      required: true
    },

    formats: {
      type: Array,
      default () {
        return ['webp', 'avif', 'jpg'];
      }
    },

    loadingSpinner: {
      type: LoadingSpinner,
      default: undefined
    },

    title: {
      type: String,
      default: null
    },

    alt: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      metaSources: {},
      classNames: {}
    };
  },

  fetchKey: 'picture',
  async fetch () {
    this.metaSources = await this.sources.getMeta(this.$img);
    this.classNames = this.metaSources.classNames;
  },

  head () {
    return {
      style: this.style
    };
  },

  computed: {
    formatSources () {
      const sortedFormatsByPriority = formatPriority.filter(v => this.formats.includes(v));
      const preloadFormat = formatPriority.find(v => this.formats.includes(v));
      return this.sources.getFormats(sortedFormatsByPriority, preloadFormat, this.isCritical);
    },

    style () {
      if (!this.metaSources) {
        return [];
      }
      const metaSources = (this.metaSources.length && new ImageSourceList(this.metaSources)) || this.metaSources;
      return [{ hid: this.classNames.picture, type: 'text/css', cssText: metaSources.style }];
    }
  },

  methods: {
    onLoad (e) {
      this.$emit('load', e);
    }
  }
};
</script>

<style lang="postcss" scoped>
picture {
  position: relative;
  display: block;
  width: 100%;

  & img {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@supports (aspect-ratio: 1) {
  picture {
    position: unset;

    & img {
      position: unset;
      top: unset;
      left: unset;
    }
  }
}
</style>
