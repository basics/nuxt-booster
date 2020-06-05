<template>
  <lazy-image v-bind="$attrs" :src="lazyImage.src" :srcset="lazyImage.srcset">
    <!-- eslint-disable-next-line vue/no-template-shadow -->
    <template slot-scope="{ lazy }">
      <picture v-if="lazy">
        <source v-for="(source, index) in preparedSources" :key="index" v-bind="source">
        <img :src="fallback" v-bind="$attrs" loading="eager">
      </picture>
    </template>
  </lazy-image>
</template>

<script>

import LazyImage from './LazyImage'

export default {

  components: {
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
      return this.cleanPath([].concat(this.preparedSources[0].srcset)[0])
    },
    lazyImage () {
      const source = this.getMatchedSource()
      return {
        src: this.cleanPath([].concat(source.srcset)[0]),
        srcset: source.srcset
      }
    },
    preparedSources () {
      return this.sources.map((source) => {
        let srcset = [].concat(source.srcset)
        if (srcset.length > 1) {
          srcset = srcset.map((value, i) => `${value} ${i + 1}x`)
        }
        return Object.assign({}, source, { srcset })
      })
    }
  },

  methods: {
    cleanPath (path) {
      return path.replace(/([^ ]*) *.*/, '$1')
    },
    getMatchedSource () {
      if (!process.server) {
        return this.preparedSources.find(({ media }) => global.matchMedia(media))
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
