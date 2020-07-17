<template>
  <image-container :loading="loading" @visible="onVisible" @requestHiRes="onRequestHiRes">
    <template>
      <custom-picture v-bind="{src: placeholder, sources: pictureSources, width, height, alt, title}" @load="onLoad" />
      <custom-no-script v-if="!init">
        <custom-picture v-bind="{src: placeholder, sources, width, height, alt, title}" />
      </custom-no-script>
    </template>
  </image-container>
</template>

<script>
import { hasGoodOverallConditions } from '../utils/client'
import ImageContainer from './ImageContainer'
import CustomNoScript from './customs/CustomNoScript'
import CustomPicture from './customs/CustomPicture'

const imageCache = new Set()

export default {

  components: {
    ImageContainer,
    CustomNoScript,
    CustomPicture
  },

  props: {
    sources: {
      type: Array,
      default () {
        return []
      }
    },

    placeholder: {
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
    pictureSources () {
      if (this.init) {
        imageCache.add(JSON.stringify(this.sources))
        return this.sources
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
      this.loading = hasGoodOverallConditions() || imageCache.has(JSON.stringify(this.sources))
      this.init = hasGoodOverallConditions() || imageCache.has(JSON.stringify(this.sources))
    },

    onLoad () {
      this.loading = false
      this.$emit('load')
    }
  }
}
</script>

<style lang="postcss" scoped>
/* figure {} */
</style>
