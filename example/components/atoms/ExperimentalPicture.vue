<template>
  <picture>
    <source
      v-for="(source, index) in ipxSources"
      :key="index"
      v-bind="source"
    >
    <custom-image v-bind="{src: ipxPlaceholder.placeholder, preload: ipxSources, width: ipxPlaceholder.width, height: ipxPlaceholder.height, alt, title, crossorigin}" @load="onLoad" @preload="onPreload" />
  </picture>
</template>

<script>
import { hydrateNever } from 'vue-lazy-hydration'

export default {
  components: {
    CustomImage: hydrateNever(() => import('nuxt-speedkit/components/customs/CustomImage'))
  },

  props: {
    src: {
      type: String,
      default: null
    },

    sizes: {
      type: String,
      default: null
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

    crossorigin: {
      type: String,
      default () {
        return 'anonymous'
      }
    }
  },

  data () {
    return {
      ipxPlaceholder: this.getPlaceholder(),
      preloadedSources: [],
      loading: false,
      webpSupport: false
    }
  },

  async fetch () {
    const result = await this.fetchMeta()

    this.ipxPlaceholder = result
    if (this.$nuxt.context.ssrContext && this.$nuxt.context.ssrContext.isGenerating) {
      // eslint-disable-next-line no-unused-expressions
      this.ipxSources
    }
  },

  computed: {
    ipxSources () {
      return this.getSources()
    },

    hasSlot () {
      return this.$slots.caption
    }
  },

  watch: {
    async src () {
      const result = await this.fetchMeta()
      this.ipxPlaceholder = result

      // this.$img.$observer.remove(this.$el)
      // this.$img.$observer.add(this.$el, () => {})
    }
  },

  created () {
    // this.ipxPlaceholder.placeholder = this.getPlaceholder()

    // // placeholder
    // this.$img.getMeta(this.src).then(e => console.log('HURZ', e))
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
      this.preloadedSources = this.ipxSources
    },

    fetchMeta () {
      if (process.server) {
        return this.$img.getMeta(this.src)
      } else {
        return this.getPlaceholder()
      }
    },

    getSources () {
      return [
        this.$img.sizes(this.src, this.sizes, { format: 'webp' }),
        this.$img.sizes(this.src, this.sizes, { format: 'jpeg' })
      ].map((sources) => {
        return {
          srcset: sources.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
          sizes: sources.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
          type: `image/${sources[0].format}`
        }
      })
    },

    async getPlaceholder () {
      const url = await this.$img(this.src, { width: 30 }).url
      return new Promise((resolve) => {
        if (process.client) {
          const img = new global.Image()
          img.onload = () => {
            resolve({
              placeholder: url,
              width: img.width,
              height: img.height
            })
          }
          img.src = url
        } else {
          resolve({
            placeholder: '',
            width: 0,
            height: 0
          })
        }
      })
    }
  }

  // head () {
  //   return {
  //     link: [{
  //       rel: 'preload',
  //       href: this.$img('ipx:/img/critical-2400.jpg', { width: 30, format: '' }).url
  //     }]
  //   }
  // }
}
</script>
