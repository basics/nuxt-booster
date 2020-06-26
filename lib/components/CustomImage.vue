<template>
  <img
    v-bind="$attrs"
    :srcset="preparedSrcset"
    :loading="loading"
    @load="onLoad"
  >
</template>

<script>
import srcset from 'srcset'
import { sortSrcset } from '../utils/srcset'

export default {
  props: {
    srcset: {
      type: Array,
      default () {
        return null
      }
    }
  },

  computed: {
    loading () {
      // TODO: performance check of the best above the fold loading mechanic
      // if (this.$options.critical) {
      //   return 'eager'
      // } else {
      //   return 'lazy'
      // }
      return 'lazy'
    },

    preparedSrcset () {
      return srcset.stringify(sortSrcset(this.srcset || [])) || null
    }
  },

  methods: {
    onLoad (e) {
      this.$emit('load', e.target)
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
img {
  display: block;
}
</style>
