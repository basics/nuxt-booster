<template>
  <lazy-image v-bind="{...$attrs, src: fallbackImage.src, srcset: fallbackImage.srcset}">
    <template v-slot:default="{src, srcset, width, height}" lang="html">
      <picture>
        <custom-source v-for="(source, index) in sortedSources" :key="index" v-bind="source" />
        <custom-image v-bind="{...$attrs, width, height, src: src, srcset: srcset}" />
      </picture>
    </template>
    <template v-slot:caption>
      <slot name="caption" />
    </template>
  </lazy-image>
</template>

<script>
import { hydrateSsrOnly } from 'vue-lazy-hydration'
import { sortByMediaQuery, sortByType } from '../utils/mediaQuery'
import { sortSrcset } from '../utils/srcset'
import CustomSource from './customs/CustomSource'
import LazyImage from './LazyImage'

export default {

  components: {
    CustomSource,
    LazyImage,
    CustomImage: hydrateSsrOnly(
      () => import('./customs/CustomImage.vue'),
      { ignoredProps: ['srcset'] }
    )
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
        srcset: sortSrcset(fallback.srcset || [])
      }
    },

    sortedSources () {
      return sortByType(sortByMediaQuery(this.sources), 'image/webp')
    }
  }
}
</script>

<style lang="postcss" scoped>
/* figure {} */
</style>
