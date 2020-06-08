<template>
  <lazy-image v-bind="$attrs" :src="lazyImage.src" :srcset="lazyImage.srcset">
    <!-- eslint-disable-next-line vue/no-template-shadow -->
    <template slot-scope="{ lazy }">
      <picture v-if="lazy">
        <source v-for="(source, index) in preparedSources" :key="index" v-bind="source">
        <custom-image :src="fallback" v-bind="$attrs" loading="eager" />
      </picture>
    </template>
  </lazy-image>
</template>

<script>

import sortMediaQueries from 'sort-media-queries'
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
      return this.preparedSources[0].originSrcset[0]
    },
    lazyImage () {
      const source = this.getMatchedSource()
      return {
        src: source.originSrcset[0],
        srcset: source.srcset
      }
    },
    preparedSources () {
      return sortMediaQueries(this.sources.map(source => this.preFillSource(source)), 'media').reverse().map((source) => {
        let srcset = [].concat(source.srcset)
        if (srcset.length > 1) {
          srcset = srcset.map((value, i) => !/^.* +\dx$/.test(value) ? `${value} ${i + 1}x` : value)
        }
        return Object.assign({}, source, { srcset, originSrcset: [].concat(source.srcset) })
      })
    }
  },

  methods: {
    preFillSource (source) {
      source.media = source.media || 'all'
      return source
    },
    getMatchedSource () {
      if (!process.server) {
        return this.preparedSources.find(({ media }) => global.matchMedia(media).matches)
      } else {
        return this.preparedSources[0]
      }
    }
  }

}
</script>

<style lang="postcss" scoped>
/* figure {} */
</style>
