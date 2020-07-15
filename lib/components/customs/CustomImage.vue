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
      if (this.isCritical) {
        return 'eager'
      } else {
        return 'lazy'
      }
    }
  },

  mounted () {
    console.log('mounted')
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
