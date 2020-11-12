<template>
  <image-container :loading="loading" class="nuxt-speedkit__image">
    <template>
      <custom-image v-bind="{src: placeholder.base64, srcset: preloadedSrcset, preload: [{srcset: srcset}], width, height, alt, title}" @load="onLoad" @preload="onPreload" />
      <custom-no-script>
        <custom-image v-bind="{src: placeholder.url, srcset, width, height, alt, title, noScript: true}" />
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
    placeholder: {
      type: Object,
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
      preloadedSrcset: (this.noScript && this.srcset) || [],
      loading: false
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
    onLoad () {
      this.loading = false
      this.$emit('load')
    },

    onPreload () {
      this.preloadedSrcset = this.srcset
    }
  }
}
</script>
