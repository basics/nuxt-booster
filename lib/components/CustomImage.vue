<template>
  <img
    class="custom-image"
    :src="src"
    :srcset="srcset"
    :width="size.width"
    :height="size.height"
    v-bind="$attrs"
    loading="lazy"
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
