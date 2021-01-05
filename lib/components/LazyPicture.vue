<template>
  <image-container :loading="loading" class="nuxt-speedkit__lazy-picture">
    <template #default>
      <picture>
        <source
          v-for="(source, index) in preloadedSources"
          :key="index"
          v-bind="source"
        >
        <custom-image v-bind="{src: preparedPlaceholder.base64, preload: sources, width, height, alt, title, crossorigin}" @load="onLoad" @preload="onPreload" />
      </picture>
      <custom-no-script>
        <picture>
          <source
            v-for="(source, index) in sources"
            :key="index"
            v-bind="source"
          >
          <custom-image v-bind="{src: preparedPlaceholder.url, width, height, alt, title, crossorigin}" @load="onLoad" @preload="onPreload" />
        </picture>
      </custom-no-script>
    </template>
    <template #caption>
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
        return {}
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
    },

    crossorigin: {
      type: String,
      default () {
        return 'anonymous'
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
    preparedPlaceholder () {
      return Object.assign({
        base64: undefined,
        url: undefined
      }, this.placeholder)
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
    },

    onPreload () {
      this.preloadedSources = this.sources
    }
  }
}
</script>
