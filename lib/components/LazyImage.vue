<template>
  <image-container :loading="loading" class="nuxt-speedkit__image" @visible="onVisible">
    <template>
      <custom-image v-bind="{src: placeholder, srcset: imageSrcset, width, height, alt, title, preload}" @load="onLoad" />
      <custom-no-script v-if="!init">
        <custom-image v-bind="{src: placeholder, srcset: srcset, width, height, alt, title, preload}" />
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
    preload () {
      return { srcset: this.srcset }
    },

    imageSrcset () {
      if (this.init) {
        return this.srcset
      }
      return null
    },

    hasSlot () {
      return this.$slots.caption
    }
  },

  methods: {
    onVisible () {
      this.loading = true
      this.init = true
    },

    onLoad () {
      this.loading = false
      this.$emit('load')
    }
  }
}
</script>
