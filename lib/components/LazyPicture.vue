<template>
  <image-container :loading="loading" class="nuxt-speedkit__lazy-picture">
    <template>
      <picture>
        <source
          v-for="(source, index) in preloadedSources"
          :key="index"
          v-bind="source"
        >
        <custom-image v-bind="{src: placeholder.base64, preload: sources, width, height, alt, title}" @load="onLoad" @preload="onPreload" />
      </picture>
      <custom-no-script>
        <picture>
          <source
            v-for="(source, index) in sources"
            :key="index"
            v-bind="source"
          >
          <custom-image v-bind="{src: placeholder.url, width, height, alt, title}" @load="onLoad" @preload="onPreload" />
        </picture>
      </custom-no-script>
    </template>
    <template v-slot:caption>
      <slot name="caption" />
    </template>
  </image-container>
</template>

<script>
import ImageContainer from './ImageContainer'
import CustomNoScript from './customs/CustomNoScript'
import CustomImage from './customs/CustomImage'

export default {

  components: {
    ImageContainer,
    CustomNoScript,
    CustomImage
  },

  props: {
    sources: {
      type: Array,
      default () {
        return []
      }
    },

    placeholder: {
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
    }
  },

  data () {
    return {
      preloadedSources: (this.noScript && this.sources) || [],
      loading: false,
      webpSupport: false
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.caption
    }
  },

  mounted () {
    this.loading = true
  },

  methods: {
    onLoad (e) {
      this.loading = false
      this.$emit('load')
    },

    onPreload () {
      this.preloadedSources = this.sources
    }
  }
}
</script>
