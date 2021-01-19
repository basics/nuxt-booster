<template>
  <figure>
    <picture>
      <source v-for="(source, index) in imageSources" :key="index" :srcset="source.ref || source.srcset || source.url" :media="source.media" :sizes="source.sizes">
      <img loading="lazy" :alt="alt" :title="title" :crossorigin="crossorigin">
    </picture>
  </figure>
</template>

<script>
// import { hydrateNever } from 'vue-lazy-hydration'
import { createSVGPlaceholder, createURLPlaceholder } from 'nuxt-speedkit/utils/placeholder'
import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'

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
    return {
      visible: false,
      imageSources: [],
      resolvedSources: this.getSources(),
      loading: false,
      webpSupport: false
    }
  },

  async fetch () {
    this.imageSources = await this.fetchMeta()
  },

  head () {
    if (this.isCritical || (process.client & this.visible)) {
      return {
        link: getPreloadDescriptions(this.resolvedSources, this.onPreload)
      }
    }
  },

  watch: {
    async sources () {
      this.imageSources = await this.fetchMeta()
    }
  },

  mounted () {
    registerIntersecting(this.$el, () => {
      this.visible = true
    })
  },

  destroyed () {
    unregisterIntersecting(this.$el)
  },

  methods: {
    onPreload () {
      this.imageSources = this.resolvedSources

      this.$emit('load')
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
figure {
  width: 100%;
  height: inherit;
  margin: 0;

  & picture {
    display: block;
    height: inherit;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
