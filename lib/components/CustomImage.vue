<template>
  <img
    v-bind="$attrs"
    :loading="loading"
    @load="onLoad"
  >
</template>

<script>
export default {
  computed: {
    loading () {
      // TODO: performance check of the best above the fold loading mechanic
      // if (this.$options.critical) {
      //   return 'eager'
      // } else {
      //   return 'lazy'
      // }
      return 'lazy'
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
