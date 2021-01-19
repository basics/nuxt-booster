<template>
  <picture>
    <!-- <source
      v-for="(source, index) in ipxSources"
      :key="index"
      v-bind="source"
    >
    <custom-image v-bind="{src: ipxPlaceholder.placeholder, preload: ipxSources, width: ipxPlaceholder.width, height: ipxPlaceholder.height, alt, title, crossorigin}" @load="onLoad" @preload="onPreload" /> -->
    <!-- <source
      :srcset="placeholders.map((placeholder) => {
        return `${placeholder.ref} ${placeholder.width}w`.trim()
      }).reverse().join()"
      sizes="(max-width: 1200px) 1199px, 100vw"
    > -->
    <source v-for="(source, index) in preloadedSources" :key="index" :srcset="source.srcset" :sizes="source.sizes">
    <source v-for="(source, index) in placeholders" :key="index" :srcset="source.ref || source.url" :media="source.media" :sizes="source.sizes">
    <img loading="lazy" :alt="alt" :title="title" :crossorigin="crossorigin">
  </picture>
</template>

<script>
// import { hydrateNever } from 'vue-lazy-hydration'
import { createSVGPlaceholder, createURLPlaceholder } from 'nuxt-speedkit/utils/placeholder'

export default {
  components: {
    // CustomImage: hydrateNever(() => import('nuxt-speedkit-components/customs/CustomImage'))
  },

  props: {
    sources: {
      type: Array,
      default () {
        return []
      }
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
    // TODO: wird auch gebraucht wenn sourcen von außen gewechselt werden?
    Promise.all(this.sources.map(async (source) => {
      await this.$img(source.src, { width: 30 })
    }))
    return {
      placeholders: [],
      resolvedSources: this.getSources(),
      preloadedSources: [],
      loading: false,
      webpSupport: false
    }
  },

  async fetch () {
    this.placeholders = await this.fetchMeta()
    if (this.$nuxt.context.ssrContext && this.$nuxt.context.ssrContext.isGenerating) {
      // eslint-disable-next-line no-unused-expressions
      this.getSources()
    }
  },

  head () {
    if (this.isCritical) {
      return {
        link:
          getPreloadDescriptions([{
            srcset: this.placeholders.map((placeholder) => {
              return `${placeholder.url} ${placeholder.width}w`.trim()
            })
          }]).concat(getPreloadDescriptions(this.resolvedSources, (e) => {
            console.log('ORIGINAL', e)
            this.onPreload()
          }))
      }
    } else if (process.client) {
      return {
        link: getPreloadDescriptions(this.resolvedSources, (e) => {
          console.log('ORIGINAL', e)
          this.onPreload()
        })

      }
    }
  },

  computed: {

  },

  async created () {
    this.placeholders = await this.fetchMeta()
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
      this.placeholders = []
      this.preloadedSources = this.resolvedSources
    },

    fetchMeta () {
      if (process.server) {
        return createSVGPlaceholder(this.sources, (source) => {
          return Promise.all([
            this.$img(source.src, { width: 30 }),
            this.$img.sizes(source.src, source.sizes),
            this.$img.getMeta(source.src)
          ])
        }, this.isCritical)
      } else {
        return createURLPlaceholder(this.sources, (source) => {
          return Promise.all([
            this.$img(source.src, { width: 30 }),
            this.$img.sizes(source.src, source.sizes)
          ])
        })
      }
    },

    getSources () {
      return [
        this.sources.map(source => this.$img.sizes(source.src, source.sizes, { format: 'webp' })).flat()
        // this.sources.map(source => this.$img.sizes(source.src, source.sizes.join(','), { format: 'jpeg' })).flat()
      ].map((sources) => {
        return {
          srcset: sources.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
          sizes: sources.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
          type: `image/${sources[0].format}`
        }
      })
    }
  }
}

function getPreloadDescriptions (sources, callback = () => {}) {
  return sources.map((source) => {
    return {
      rel: 'preload',
      as: 'image',
      crossorigin: 'anonymous',
      imageSrcset: source.srcset,
      imageSizes: source.sizes,
      callback
    }
  })
}
</script>

<style lang="postcss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
