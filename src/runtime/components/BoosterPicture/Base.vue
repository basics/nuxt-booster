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

<script setup lang="ts">
import { getPictureStyleDescription } from '../../utils/description';
import { useBoosterCritical, useImage, useHead, useNuxtApp } from '#imports';
import { ref, computed } from 'vue';

import BaseImage from '#booster/components/BoosterImage/Base.vue';
import SourceList from '#booster/components/BoosterPicture/classes/SourceList';
import type { ClassNames } from '#booster/components/BoosterPicture/classes/SourceList';
import PictureSource from '#booster/components/BoosterPicture/Source.vue';
import props from './props';
import type Source from '../BoosterImage/classes/Source';

const TARGET_FORMAT_PRIORITY = ['avif', 'webp', 'png', 'jpg', 'gif'];

const $props = defineProps(props);

const $emit = defineEmits(['load']);

const { isCritical } = useBoosterCritical();
const $img = useImage();
const $booster = useNuxtApp().$booster;

const sourceList = SourceList.create($props.sources as Source[], {
  sort: $props.sortSources
});

const metaSources = ref<SourceList | undefined>();

const resolvedFormats = $props.formats || $booster.targetFormats;
const sortedFormatsByPriority = Array.from(
  new Set(
    TARGET_FORMAT_PRIORITY.map(v =>
      resolvedFormats.find(format => format.includes(v))
    )
  )
).filter(Boolean) as string[];
const preloadFormat = TARGET_FORMAT_PRIORITY.find(v =>
  resolvedFormats.find(format => format.includes(v))
) as string;

const formatSources = ref(
  sourceList.getFormats(
    sortedFormatsByPriority,
    preloadFormat,
    isCritical.value
  )
);

const classNames = computed<ClassNames>(
  () => metaSources.value?.classNames || { picture: '', image: [] }
);

const onLoad = (e: HTMLElementEventMap['load']) => {
  $emit('load', e);
};

useHead(() => {
  if (metaSources.value && metaSources.value.length) {
    const classNames = metaSources.value.classNames;
    return {
      style: [getPictureStyleDescription(metaSources.value, classNames)]
    };
  }
  return {};
});

try {
  metaSources.value = await sourceList.getMeta($img, $booster);
} catch (error) {
  console.error(error);
}
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
