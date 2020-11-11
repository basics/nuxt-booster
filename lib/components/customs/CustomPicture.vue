<template>
  <picture>
    <source
      v-for="(source, index) in preloadedSources"
      :key="index"
      v-bind="source"
    >
    <custom-image v-bind="{src, preload, width, height, alt, title}" @load="onLoad" @preload="onPreload" />
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

    preload: {
      type: Object,
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
    },

    noScript: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  data () {
    return {
      preloaded: false
    }
  },

  computed: {
    preloadedSources () {
      if (this.preloaded || this.noScript) {
        return this.sources
      } else {
        return []
      }
    }
  },

  methods: {
    onLoad (e) {
      if (this.preloaded) {
        this.$emit('load', e.target)
      }
    },

    onPreload () {
      this.preloaded = true
    }
  }
}
</script>
