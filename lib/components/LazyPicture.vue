<template>
  <lazy-image v-bind="$attrs" :src="fallbackImage.src" :srcset="fallbackImage.srcset">
    <template v-slot:default="{width, height}" lang="html">
      <picture>
        <custom-source v-for="(source, index) in sortedSources" :key="index" v-bind="source" />
        <custom-image :src="fallbackImage.src" :srcset="fallbackImage.srcset" :width="width" :height="height" v-bind="$attrs" />
      </picture>
    </template>
    <template v-slot:caption>
      <slot name="caption" />
    </template>
  </lazy-image>
</template>

<script>
import { sortSourcesByMedia } from '../utils/source'
import CustomImage from './CustomImage'
import CustomSource from './CustomSource'
import LazyImage from './LazyImage'

export default {

  components: {
    CustomImage,
    CustomSource,
    LazyImage
  },

  props: {
    sources: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    fallbackImage () {
      const fallback = sortSourcesByMedia(this.sources)[0]
      return {
        src: fallback.src,
        srcset: fallback.srcset
      }
    },

    sortedSources () {
      return sortSourcesByMedia(this.sources)
    }
  }
}
</script>

<style lang="postcss" scoped>
/* figure {} */
</style>
