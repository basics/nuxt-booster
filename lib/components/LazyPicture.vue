<template>
  <lazy-image v-bind="$attrs" :src="lazyImage.src" :srcset="lazyImage.srcset">
    <template v-scope="{width, height}" lang="html">
      <picture>
        <source v-for="(source, index) in preparedSources" :key="index" v-bind="source">
        <custom-image :src="lazyImage.src" :width="width" :height="height" v-bind="$attrs" />
      </picture>
    </template>
    <template v-slot:caption>
      <slot name="caption" />
    </template>
  </lazy-image>
</template>

<script>

import { sortSourcesByMedia, getMatchedSource, normalizeSrcsetOfSources } from '../utils/image'
import CustomImage from './CustomImage'
import LazyImage from './LazyImage'

export default {

  components: {
    CustomImage,
    LazyImage
  },

  props: {

    sources: {
      type: Array,
      default () {
        return [
          // {
          //   srcset: [],
          //   type: null,
          //   media: null
          // }
        ]
      }
    }
  },

  computed: {
    lazyImage () {
      const source = getMatchedSource(this.preparedSources)
      return {
        src: source.srcset,
        srcset: source.srcset
      }
    },
    preparedSources () {
      return normalizeSrcsetOfSources(sortSourcesByMedia(this.sources))
    }
  }
}
</script>

<style lang="postcss" scoped>
/* figure {} */
</style>
