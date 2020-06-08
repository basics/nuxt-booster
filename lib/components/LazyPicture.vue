<template>
  <lazy-image v-bind="$attrs" :src="lazyImage.src" :srcset="lazyImage.srcset">
    <template slot-scope="{ lazy }" lang="html">
      <picture v-if="lazy">
        <source v-for="(source, index) in preparedSources" :key="index" v-bind="source">
        <custom-image :src="fallback" v-bind="$attrs" />
      </picture>
    </template>
  </lazy-image>
</template>

<script>

import { sortSourcesByMedia, normalizeSrcset, getMatchedSource } from '../utils/image'
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
    fallback () {
      return this.preparedSources[0].srcset
    },
    lazyImage () {
      const source = getMatchedSource(this.preparedSources)
      return {
        src: source.srcset,
        srcset: source.srcset
      }
    },
    preparedSources () {
      return sortSourcesByMedia(this.sources).map((source) => {
        source.srcset = normalizeSrcset(source.srcset)
        return source
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
/* figure {} */
</style>
