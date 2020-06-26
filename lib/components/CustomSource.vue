<template>
  <source
    v-bind="$attrs"
    :srcset="preparedSrcset"
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
    preparedSrcset () {
      return srcset.stringify(sortSrcset(this.srcset || [])) || null
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
/* source {} */
</style>
