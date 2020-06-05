<template>
  <lazy-image v-bind="lazyImage">
    <!-- eslint-disable-next-line vue/no-template-shadow -->
    <template slot-scope="{ lazy }">
      <picture v-if="lazy">
        <source v-for="(source, index) in preparedSources" :key="index" v-bind="source">
        <img :src="placeholder" :alt="$attrs.alt" :title="$attrs.title" loading="eager">
      </picture>
    </template>
  </lazy-image>
</template>

<script>

import { PLACEHOLDER } from '../utils/image'
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
          {
            srcset: [],
            type: null,
            media: null
          }
        ]
      }
    }
  },

  data () {
    return {
      placeholder: PLACEHOLDER
    }
  },

  computed: {
    lazyImage () {
      const source = this.getMatchedSource()
      return {
        caption: this.$attrs.caption,
        alt: this.$attrs.alt,
        title: this.$attrs.title,
        src: [].concat(source.srcset)[0].replace(/([^ ]*) *.*/, '$1'),
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
