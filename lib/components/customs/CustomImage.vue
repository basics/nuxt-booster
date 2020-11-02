<template>
  <img
    v-image-preload="preload"
    class="nuxt-speedkit__custom-image"
    loading="lazy"
    crossorigin="anonymous"
    @load="onLoad"
  >
</template>

<script>

export default {
  props: {
    preload: {
      type: Object,
      default () {
        return null
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
