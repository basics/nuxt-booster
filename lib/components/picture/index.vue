<template>
  <picture :class="classNames.picture">
    <picture-source v-for="(source) in formatSources" :key="source.key" :source="source" />
    <base-image :preload-sources="preloadSources" :class="classNames.image" :title="title" :loading-spinner="loadingSpinner" @load="onLoad" />
  </picture>
</template>

<script>
import BaseImage from '../image';
import LoadingSpinner from '../image/classes/LoadingSpinner';
import PictureSource from './source';
import ImageSourceList from './classes/ImageSourceList';

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
      default () {
        return null;
      }
    },

    title: {
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
    if (this.metaSources) {
      const metaSources = (this.metaSources.length && new ImageSourceList(this.metaSources)) || this.metaSources;
      return {
        style: [{
          cssText: metaSources.style,
          type: 'text/css',
          hid: this.classNames.picture
        }]
      };
    }
  },

  computed: {
    formatSources () {
      return this.sources.getFormats(this.formats);
    },

    preloadSources () {
      const priorityFormat = formatPriority.find(v => this.formats.includes(v));
      return this.sources.getFormats([priorityFormat]);
    }
  },

  methods: {
    onLoad (e) {
      // console.log('LOAD', e);
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
