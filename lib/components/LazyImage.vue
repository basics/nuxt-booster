<template>
  <image-container :loading="loading" @visible="onVisible" @requestHiRes="onRequestHiRes">
    <template>
      <custom-image v-bind="{src: placeholder, srcset: imageSrcset, width, height, alt, title}" @load="onLoad" />
      <custom-no-script v-if="!init">
        <custom-image v-bind="{srcset: srcset, width, height, alt, title}" />
      </custom-no-script>
    </template>
    <template v-slot:caption>
      <slot name="caption" />
    </template>
  </image-container>
</template>

<script>
import { hasGoodOverallConditions } from '../utils/client'
import ImageContainer from './ImageContainer'
import CustomNoScript from './customs/CustomNoScript'
import CustomImage from './customs/CustomImage'

const imageCache = new Set()

export default {
  components: {
    ImageContainer,
    CustomNoScript,
    CustomImage
  },

  props: {
    placeholder: {
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

  data () {
    return {
      init: false,
      loading: false
    }
  },

  computed: {
    imageSrcset () {
      if (this.init) {
        imageCache.add(this.srcset)
        return this.srcset
      }
      return null
    },

    hasSlot () {
      return this.$slots.caption
    }
  },

  methods: {
    onRequestHiRes () {
      this.loading = true
      this.init = true
    },

    onVisible () {
      this.loading = hasGoodOverallConditions() || imageCache.has(this.srcset)
      this.init = hasGoodOverallConditions() || imageCache.has(this.srcset)
    },

    onLoad () {
      this.loading = false
      this.$emit('load')
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
/* css */
</style>
