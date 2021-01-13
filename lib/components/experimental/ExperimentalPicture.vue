<template>
  <picture>
    <!-- <source
      v-for="(source, index) in ipxSources"
      :key="index"
      v-bind="source"
    >
    <custom-image v-bind="{src: ipxPlaceholder.placeholder, preload: ipxSources, width: ipxPlaceholder.width, height: ipxPlaceholder.height, alt, title, crossorigin}" @load="onLoad" @preload="onPreload" /> -->
    <source v-for="(source, index) in placeholders" :key="index" :srcset="source.ref" :media="source.media">
    <img loading="lazy">
  </picture>
</template>

<script>
// import { hydrateNever } from 'vue-lazy-hydration'

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
      preloadedSources: [],
      loading: false,
      webpSupport: false
    }
  },

  async fetch () {
    const result = await this.fetchMeta()

    this.placeholders = result
    if (this.$nuxt.context.ssrContext && this.$nuxt.context.ssrContext.isGenerating) {
      // eslint-disable-next-line no-unused-expressions
      this.ipxSources
    }
  },

  // head () {
  //   if (!this.isCritical) {
  //     return {
  //       link: this.placeholders.map(({ media, src }) => {
  //         return {
  //           rel: 'prefetch',
  //           media,
  //           href: src,
  //           callback: (e) => {

  //           }
  //         }
  //       })

  //       // link: [{
  //       //   rel: 'prefetch',
  //       //   href: this.$img('ipx:/img/critical-2400.jpg', { width: 30, format: '' }).url

  //     // }]
  //     }
  //   }
  // },

  computed: {
    src () {
      return this.sources[0].src
    },

    ipxSources () {
      return this.getSources()
    },

    hasSlot () {
      return this.$slots.caption
    }
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
      this.preloadedSources = this.ipxSources
    },

    fetchMeta () {
      const critical = this.isCritical

      if (process.server) {
        return Promise.all(this.sources.map(async (source) => {
          const meta = await this.$img.getMeta(source.src)
          const { url } = await this.$img(source.src, { width: 30 })
          meta.src = url

          return generateSVG(
            meta,
            this.$img.sizes(source.src, source.sizes.join(',')),
            critical && meta.placeholder
          )
        })).then((result) => {
          return result.sort((a, b) => a.breakpoint < b.breakpoint ? 1 : -1)
        })
      } else {
        return Promise.all(this.sources.map(async (source) => {
          return getPlaceholder(
            (await this.$img(source.src, { width: 30 })).url,
            this.$img.sizes(source.src, source.sizes.join(','))
          )
        })).then((result) => {
          return result.sort((a, b) => a.breakpoint < b.breakpoint ? 1 : -1)
        })
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
    }
  }
}

function generateSVG ({ width, height, src }, sizes, placeholder) {
  const size = sizes.sort((a, b) => a.breakpoint < b.breakpoint ? 1 : -1).pop()

  let image = ''
  if (placeholder) {
    image = `<image href="${placeholder}" width="${width}" height="${height}"/>`
  }

  return Object.assign({ src, width, height }, {
    media: size.media,
    breakpoint: size.breakpoint,
    ref: [
      'data:image/svg+xml',
      encodeURI(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${image}</svg>
      `.trim())
    ].join(',')
  })
}

function getPlaceholder (url, sizes) {
  const size = sizes.sort((a, b) => a.breakpoint < b.breakpoint ? 1 : -1).pop()
  return new Promise((resolve) => {
    if (process.client) {
      const img = new global.Image()
      img.onload = () => {
        resolve({
          media: size.media,
          breakpoint: size.breakpoint,
          ref: url,
          src: url,
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
</script>

<style lang="postcss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
