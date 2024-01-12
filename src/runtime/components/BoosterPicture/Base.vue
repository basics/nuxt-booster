<template>
  <picture :class="classNames.picture" class="nuxt-booster-picture">
    <picture-source
      v-for="source in formatSources"
      :key="source.key"
      :source="source"
      :crossorigin="crossorigin"
    />
    <base-image
      :class="classNames.image"
      :title="title"
      :alt="alt"
      :crossorigin="crossorigin"
      width="0"
      height="0"
      @load="onLoad"
    />
  </picture>
</template>

<script>
import { getPictureStyleDescription } from '../../utils/description';
import { crossorigin as validatorCrossorigin } from '../../utils/validators';
import {
  useBoosterCritical,
  ref,
  useImage,
  useHead,
  useNuxtApp
} from '#imports';
import BaseImage from '#booster/components/BoosterImage/Base';
import SourceList from '#booster/components/BoosterPicture/classes/SourceList';
import PictureSource from '#booster/components/BoosterPicture/Source';

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
    const { isCritical } = useBoosterCritical();
    const $img = useImage();
    const $booster = useNuxtApp().$booster;

    const sourceList = SourceList.create(props.sources, {
      sort: props.sortSources
    });

    const metaSources = ref(null);

    useHead(() => {
      if (metaSources.value && metaSources.value.length) {
        const classNames = metaSources.value.classNames;
        return {
          style: [getPictureStyleDescription(metaSources.value, classNames)]
        };
      }
    });

    metaSources.value = await sourceList.getMeta($img, $booster);

    return {
      isCritical,
      resolvedFormats: props.formats || $booster.targetFormats,
      sourceList,
      metaSources,
      classNames: metaSources.value.classNames
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

.nuxt-booster-picture {
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
