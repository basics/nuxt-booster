<template>
  <img
    v-bind="$attrs"
    :width="size.width"
    :height="size.height"
    :loading="loading"
    @load="onLoad"
  >
</template>

<script>
export default {
  props: {
    size: {
      type: Object,
      default () {
        return { width: null, height: null }
      }
    }
  },

  computed: {
    loading () {
      if (this.$options.critical) {
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
.img {
  display: block;
}
</style>
