<template>
  <image-container :loading="loading" @visible="onVisible">
    <template>
      <custom-picture v-bind="{srcset: placeholder, sources: pictureSources, width, height, alt, title}" @load="onLoad" />
      <custom-no-script v-if="!init">
        <custom-picture v-bind="{srcset: placeholder, sources, width, height, alt, title}" />
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
import CustomPicture from './customs/CustomPicture'

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
      type: [Array, String],
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
        return this.sources
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

<style lang="postcss" type="flow" scoped>
/* css */
</style>
