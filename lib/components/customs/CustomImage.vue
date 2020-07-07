<template>
  <img
    :loading="loading"
    @load="onLoad"
  >
</template>

<script>
export default {
  computed: {
    loading () {
      console.log(this)
      // TODO: performance check of the best above the fold loading mechanic
      if (this.isCritical) {
        return 'eager'
      } else {
        return 'lazy'
      }
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
