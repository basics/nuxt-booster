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

export default {
  props: {
    preload: {
      type: Object,
      default () {
        return null
      }
    }
  },

  data () {
    return {
      visible: this.isCritical
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
      this.$emit('load', e.target)
    }
  },

  head () {
    if (this.preload && this.visible) {
      if (process.server || elementSupportsAttribute('link', 'imageSrcset')) {
        return {
          link: [
            {
              hid: hashCode(this.preload.srcset),
              rel: 'preload',
              as: 'image',
              crossorigin: 'anonymous',
              callback: () => { this.$emit('preload') },
              imagesrcset: this.preload.srcset
            }
          ]
        }
      } else {
        const img = new Image()
        img.onload = () => { this.$emit('preload') }
        img.crossorigin = 'anonymous'
        img.srcset = this.preload.srcset
        return {}
      }
    } else {
      return {}
    }
  }
}

function hashCode (value) {
  let hash = 0
  if (value.length === 0) { return hash }
  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

function elementSupportsAttribute (element, attribute) {
  let test = {}
  if (global.document) {
    test = global.document.createElement(element)
  }

  if (attribute in test) {
    return true
  } else {
    return false
  }
};
</script>
