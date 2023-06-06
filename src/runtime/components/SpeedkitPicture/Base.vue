<template>
  <picture :class="classNames.picture" class="nuxt-speedkit-picture">
    <picture-source
      v-for="source in formatSources"
      :key="source.key"
      :source="source"
      :crossorigin="$speedkit.getCrossorigin(crossorigin)" />
    <base-image
      :class="classNames.image"
      :title="title"
      :alt="alt"
      :loading-spinner="loadingSpinner"
      :crossorigin="crossorigin"
      width="0"
      height="0"
      @load="onLoad" />
  </picture>
</template>

<script>
import BaseImage from '#speedkit/components/SpeedkitImage/Base';
import SourceList from '#speedkit/components/SpeedkitPicture/classes/SourceList';
import LoadingSpinner from '#speedkit/components/SpeedkitImage/classes/LoadingSpinner';
import PictureSource from '#speedkit/components/SpeedkitPicture/Source';

const TARGET_FORMAT_PRIORITY = ['avif', 'webp', 'png', 'jpg', 'gif'];

export default {
  components: {
    PictureSource,
    BaseImage
  },

  props: {
    sources: {
      type: [Array, SourceList],
      required: true
    },

    formats: {
      type: Array,
      default() {
        return [];
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
    },

    crossorigin: {
      type: [Boolean, String],
      default() {
        return '';
      },
      validator: val =>
        ['anonymous', 'use-credentials', '', true, false].includes(val)
    },

    sortSources: {
      type: Boolean,
      default: true
    }
  },

  emits: ['load'],

  data() {
    return {
      metaSources: {},
      classNames: {}
    };
  },

  async fetch() {
    const { ssrContext } = this.$nuxt.context;
    this.metaSources = await this.sourceList.getMeta(this.$img, ssrContext);
    this.classNames = this.metaSources.classNames;
  },

  head() {
    return {
      style: this.style
    };
  },

  fetchKey(getCounter) {
    const key = `picture-${this.sourceList.key}`;
    return `${key}-${getCounter(key)}`;
  },

  computed: {
    sourceList() {
      return SourceList.create(this.sources, {
        sort: this.sortSources
      });
    },

    formatSources() {
      const formats = this.$speedkit.getFormats(this.formats);
      const sortedFormatsByPriority = Array.from(
        new Set(
          TARGET_FORMAT_PRIORITY.map(v =>
            formats.find(format => format.includes(v))
          )
        )
      ).filter(Boolean);
      const preloadFormat = TARGET_FORMAT_PRIORITY.find(v =>
        formats.find(format => format.includes(v))
      );
      return this.sourceList.getFormats(
        sortedFormatsByPriority,
        preloadFormat,
        this.isCritical
      );
    },

    style() {
      if (!this.metaSources) {
        return [];
      }
      const metaSources =
        (this.metaSources.length && new SourceList(this.metaSources)) ||
        this.metaSources;
      return [
        {
          hid: this.classNames.picture,
          type: 'text/css',
          cssText: metaSources.style
        }
      ];
    }
  },

  methods: {
    onLoad(e) {
      this.$emit('load', e);
    }
  }
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.nuxt-speedkit-picture {
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;

  & img {
    position: absolute;
    inset: 0;
    box-sizing: border-box;
  }

  &::before {
    position: relative;
    box-sizing: border-box;
    display: block;
    content: '';
  }

  @supports (aspect-ratio: 1) {
    position: unset;

    & img {
      position: unset;
      top: unset;
      right: unset;
      bottom: unset;
      left: unset;
    }

    &::before {
      display: none;
    }
  }
}

/*! purgecss end ignore */
</style>
