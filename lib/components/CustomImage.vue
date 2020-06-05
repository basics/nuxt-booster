<template>
  <img
    class="custom-image"
    v-bind="$attrs"
    :src="src"
    :srcset="srcset"
    :width="size.width"
    :height="size.height"
    :loading="loading"
    @load="onLoad"
  >
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default () {
        return null
      }
    },

    srcset: {
      type: String,
      default () {
        return null
      }
    },

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
.custom-image {
  display: block;
}
</style>
