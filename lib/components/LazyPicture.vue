<template>
  <image-container :loading="loading" class="nuxt-speedkit__lazy-picture">
    <template>
      <custom-picture v-bind="{src: placeholder, sources: sources, preload, width, height, alt, title}" @load="onLoad" />
      <custom-no-script>
        <custom-picture v-bind="{ sources, width, height, alt, title, noScript: true}" />
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

    placeholderSources: {
      type: Array,
      default () {
        return []
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
      return this.sources.reduce((result, item) => {
        if (item.type === 'image/webp') {
          result = Object.assign({ src: this.srcUrl }, item)
        } else if ((!result || result.type !== 'image/webp')) {
          result = Object.assign({ src: this.srcUrl }, item)
        }
        return result
      }, null)
    },

    srcUrl () {
      if (this.src !== null && !this.placeholder.startsWith('data:image')) {
        return this.placeholder
      } else {
        return null
      }
    },

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
    }
  }
}
</script>
