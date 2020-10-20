<template>
  <picture>
    <source
      v-for="(source, index) in sources"
      :key="index"
      v-bind="source"
    >
    <custom-image v-bind="{src, srcset, width, height, alt, title}" @load="onLoad" />
  </picture>
</template>

<script>
import CustomImage from './CustomImage'

export default {
  components: {
    CustomImage
  },

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

    sources: {
      type: Array,
      default () {
        return null
      }
    },

    alt: {
      type: String,
      default () {
        return ''
      }
    },

    title: {
      type: String,
      default () {
        return ''
      }
    },

    width: {
      type: Number,
      default () {
        return null
      }
    },

    height: {
      type: Number,
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

<style lang="postcss" type="flow" scoped>
/* css */
</style>
