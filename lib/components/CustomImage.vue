<template>
  <img
    v-bind="$attrs"
    :src="src"
    :srcset="srcset"
    :width="size.width"
    :height="size.height"
    :alt="alt"
    :title="title"
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
      type: [String, Array],
      default () {
        return null
      }
    },

    size: {
      type: Object,
      default () {
        return { width: null, height: null }
      }
    },

    alt: {
      type: String,
      default () {
        return null
      }
    },

    title: {
      type: String,
      default () {
        return null
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
