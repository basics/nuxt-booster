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
import { sortByMediaQuery } from '../utils/mediaQuery'
import CustomImage from './customs/CustomImage'
import CustomSource from './customs/CustomSource'
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
      const fallback = sortByMediaQuery(this.sources)[0]
      return {
        src: fallback.src,
        srcset: fallback.srcset
      }
    },

    sortedSources () {
      return sortByMediaQuery(this.sources)
    }
  }
}
</script>

<style lang="postcss" scoped>
/* figure {} */
</style>
