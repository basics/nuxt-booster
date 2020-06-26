<template>
  <source
    v-bind="$attrs"
    :srcset="preparedSrcset"
  >
</template>

<script>
import srcset from 'srcset'

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
      return srcset.stringify(this.srcset || []) || null
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
/* source {} */
</style>
