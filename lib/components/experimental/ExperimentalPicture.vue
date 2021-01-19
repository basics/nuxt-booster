<template>
  <figure>
    <picture>
      <source
        v-for="(source, index) in imageSources"
        :key="index"
        :srcset="source.ref || source.srcset || source.url"
        :media="source.media"
        :sizes="source.sizes"
        :type="source.type"
      >
      <img loading="lazy" :alt="alt" :title="title" :crossorigin="crossorigin">
    </picture>
    <custom-no-script>
      <picture>
        <source
          v-for="(source, index) in resolvedSources"
          :key="index"
          :srcset="source.srcset"
          :media="source.media"
          :sizes="source.sizes"
          :type="source.type"
        >
        <img loading="lazy" :alt="alt" :title="title" :crossorigin="crossorigin">
      </picture>
    </custom-no-script>
  </figure>
</template>

<script>
import { createSVGPlaceholder, createURLPlaceholder } from 'nuxt-speedkit/utils/placeholder'
import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'
import CustomNoScript from 'nuxt-speedkit/components/customs/CustomNoScript'
import { isWebpSupported, isPreloadSupported } from 'nuxt-speedkit/utils/support'
import { getPreloadDescription, doPreloadFallback } from 'nuxt-speedkit/utils/preloadNew'

export default {
  components: {
    CustomNoScript
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
      webpSupport: false
    }
  },

  async fetch () {
    this.imageSources = await this.fetchMeta()
    this.webpSupport = process.server || await isWebpSupported()
  },

  head () {
    if (this.isCritical || (process.client & this.visible)) {
      const [source] = filterBySupportedMimeTypes(this.resolvedSources, this.webpSupport)
      if (isPreloadSupported()) {
        return {
          link: [getPreloadDescription(source, this.crossorigin, this.onPreload)]
        }
      } else {
        doPreloadFallback(source, this.crossorigin, this.onPreload)
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
        return createSVGPlaceholder(this.sources, ({ src, sizes }) => {
          return Promise.all([
            this.$img(src, { width: 30 }),
            this.$img.sizes(src, sizes),
            this.$img.getMeta(src)
          ])
        }, this.isCritical)
      } else {
        return createURLPlaceholder(this.sources, ({ src, sizes }) => {
          return Promise.all([
            this.$img(src, { width: 30 }),
            this.$img.sizes(src, sizes)
          ])
        })
      }
    },

    getSources () {
      return ['webp', 'jpeg'].map((format) => {
        return this.sources.map(({ src, sizes }) => this.$img.sizes(src, sizes, { format })).flat()
      }).map((sources) => {
        return {
          srcset: sources.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
          sizes: sources.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
          type: getMimeType(sources[0])
        }
      })
    }
  }
}

function getMimeType ({ format }) {
  return `image/${format}`
}

function filterBySupportedMimeTypes (sources, webpSupport) {
  return sources.filter(source => !isWebp(source) || (isWebp(source) && webpSupport))
}

function isWebp ({ type }) {
  return type === getMimeType('webp')
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
