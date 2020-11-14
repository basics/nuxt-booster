<template>
  <img
    class="nuxt-speedkit__custom-image"
    loading="lazy"
    crossorigin="anonymous"
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
    if (this.preload && this.visible) {
      return preloadImage(getPreloadSrcset(this.preload, this.webpSupport), () => this.onPreload())
    } else {
      return {}
    }
  }
}

function getPreloadSrcset (sources, webpSupport) {
  return (webpSupport && sources.find(source => source.type === 'image/webp')) || sources.find(source => source.type !== 'image/webp')
}

</script>
