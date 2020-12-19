<template>
  <img
    class="nuxt-speedkit__custom-image"
    loading="lazy"
    :crossorigin="crossorigin"
    @load="onLoad"
  >
</template>

<script>
import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'
import { isWebpSupported } from '../../utils/support'
import { preloadImage } from '../../utils/preload'

export default {
  props: {
    preload: {
      type: Array,
      default () {
        return null
      }
    },

    crossorigin: {
      type: String,
      default () {
        return 'anonymous'
      }
    }
  },

  fetchOnServer: process.server,

  async fetch () {
    this.webpSupport = process.server || await isWebpSupported()
  },

  data () {
    return {
      visible: this.isCritical,
      preloaded: false,
      webpSupport: false
    }
  },

  mounted () {
    registerIntersecting(this.$el, () => {
      this.visible = true
    })
  },

  destroyed () {
    unregisterIntersecting(this.$el)
  },

  methods: {
    onLoad (e) {
      if (this.preloaded) {
        this.$emit('load', e.target)
      }
    },

    onPreload () {
      this.preloaded = true
      this.$emit('preload')
    }
  },

  head () {
    if (this.preload && this.visible && this.preload && this.preload.length) {
      return preloadImage(getPreloadSrcset(this.preload, this.webpSupport), () => this.onPreload(), this.crossorigin)
    } else {
      return {}
    }
  }
}

function getPreloadSrcset (sources, webpSupport) {
  return (webpSupport && sources.find(source => source.type === 'image/webp')) || sources.find(source => source.type !== 'image/webp')
}

</script>

<style scoped>
  .nuxt-speedkit__custom-image {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
  }
</style>
