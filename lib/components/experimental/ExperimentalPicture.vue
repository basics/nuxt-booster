<template>
  <figure>
    <custom-picture :sources="imageSources" :alt="alt" :title="title" :crossorigin="crossorigin" :in-progress="inProgress" />
    <custom-no-script>
      <custom-picture :sources="resolvedSources" :alt="alt" :title="title" :crossorigin="crossorigin" />
    </custom-no-script>
    <figcaption v-if="hasSlot">
      <slot name="caption" />
    </figcaption>
  </figure>
</template>

<script>
import { createSVGPlaceholder, createURLPlaceholder } from 'nuxt-speedkit/utils/placeholder'
import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'
import CustomPicture from 'nuxt-speedkit/components/customs/CustomPicture'
import CustomNoScript from 'nuxt-speedkit/components/customs/CustomNoScript'
import { webpSupport, isPreloadSupported } from 'nuxt-speedkit/utils/support'
import { getPreloadDescription, doPreloadFallback } from 'nuxt-speedkit/utils/preloadNew'

export default {
  components: {
    CustomPicture,
    CustomNoScript
  },

  props: {
    sources: {
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
      inProgress: true
    }
  },

  async fetch () {
    this.imageSources = await this.fetchMeta()
  },

  head () {
    if (this.isCritical || (process.client & this.visible)) {
      const sources = filterBySupportedMimeTypes(this.resolvedSources, webpSupport)
      const [source] = sources

      if (isPreloadSupported()) {
        return {
          link: [getPreloadDescription(source, this.crossorigin, this.onPreload)]
        }
      } else {
        doPreloadFallback(source, this.crossorigin, this.onPreload)
      }
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.caption
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
      this.inProgress = false
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
      return getFormats(this.sources)
        .map(format => this.sources.map(({ src, sizes }) => this.$img.sizes(src, sizes, { format })).flat())
        .map((sources) => {
          return {
            srcset: sources.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
            sizes: sources.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
            type: getMimeType(sources[0].format)
          }
        })
    }
  }
}

function getFormats (sources) {
  return [...new Set(
    ['webp']
      .concat(sources.map(source => source.src.match(/\.(?<ext>png|jpe?g)/i).groups.ext))
      .map((format) => {
        if (format === 'jpeg') {
          return 'jpg'
        }
        return format
      })
  )]
}

const mimeTypes = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png'
}

function getMimeType (format) {
  return mimeTypes[String(format)]
}

function filterBySupportedMimeTypes (sources, webpSupport) {
  return sources.filter((source) => {
    return !isWebp(source) || (isWebp(source) && webpSupport)
  })
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
}
</style>
