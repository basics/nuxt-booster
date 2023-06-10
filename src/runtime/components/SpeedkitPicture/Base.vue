<template>
  <picture :class="classNames.picture" class="nuxt-speedkit-picture">
    <picture-source
      v-for="source in formatSources"
      :key="source.key"
      :source="source"
      :crossorigin="crossorigin" />
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
import { getPictureStyleDescription } from '../../utils/description.mjs';
import { crossorigin as validatorCrossorigin } from '../../utils/validators.mjs';
import useCritical from '#speedkit/composables/critical';
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
        return null;
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
        return null;
      },
      validator: validatorCrossorigin
    },

    sortSources: {
      type: Boolean,
      default: true
    }
  },

  emits: ['load'],

  async setup(props) {
    const { isCritical } = useCritical();
    const $img = useImage();
    const $speedkit = useNuxtApp().$speedkit;

    const sourceList = SourceList.create(props.sources, {
      sort: props.sortSources
    });

    const metaSources = await sourceList.getMeta($img, $speedkit);
    const classNames = metaSources.classNames;

    if (metaSources.length) {
      useHead({
        style: [getPictureStyleDescription(metaSources, classNames)]
      });
    }

    return {
      isCritical,
      resolvedFormats: props.formats || $speedkit.targetFormats,
      sourceList,
      metaSources,
      classNames
    };
  },

  computed: {
    formatSources() {
      const sortedFormatsByPriority = Array.from(
        new Set(
          TARGET_FORMAT_PRIORITY.map(v =>
            this.resolvedFormats.find(format => format.includes(v))
          )
        )
      ).filter(Boolean);
      const preloadFormat = TARGET_FORMAT_PRIORITY.find(v =>
        this.resolvedFormats.find(format => format.includes(v))
      );
      return this.sourceList.getFormats(
        sortedFormatsByPriority,
        preloadFormat,
        this.isCritical
      );
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
