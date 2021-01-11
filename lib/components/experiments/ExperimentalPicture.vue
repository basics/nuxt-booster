<template>
  <picture>
    <!-- <source
      v-for="(source, index) in ipxSources"
      :key="index"
      v-bind="source"
    >
    <custom-image v-bind="{src: ipxPlaceholder.placeholder, preload: ipxSources, width: ipxPlaceholder.width, height: ipxPlaceholder.height, alt, title, crossorigin}" @load="onLoad" @preload="onPreload" /> -->
    <source v-for="(source, index) in placeholders" :key="index" :srcset="source.ref" :media="source.media">
    <img>
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
    return {
      placeholders: Promise.all(this.sources.map(async (source) => {
        await this.$img(source.src, { width: 30 })
      })), // this.getPlaceholder(),
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

  watch: {
    async src () {
      const result = await this.fetchMeta()
      this.placeholders = result

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
        return Promise.all(this.sources.map(async (source) => {
          return generateSVG(
            await this.$img.getMeta(source.src),
            this.$img.sizes(source.src, source.sizes.join(','))
          )
        })).then((result) => {
          return result.sort((a, b) => a.breakpoint < b.breakpoint ? 1 : -1)
        })
      } else {
        return Promise.all(this.sources.map(async (source) => {
          const test = await this.$img(source.src, { width: 30 })
          // console.log(await this.$img.getMeta(source.src))
          return getPlaceholder(
            test.url,
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

  // head () {
  //   return {
  //     link: [{
  //       rel: 'preload',
  //       href: this.$img('ipx:/img/critical-2400.jpg', { width: 30, format: '' }).url
  //     }]
  //   }
  // }
}

function generateSVG ({ placeholder: src, width, height }, sizes) {
  const size = sizes.sort((a, b) => a.breakpoint < b.breakpoint ? 1 : -1).pop()
  return Object.assign({ src, width, height }, {
    media: size.media,
    breakpoint: size.breakpoint,
    ref: [
      'data:image/svg+xml',
      encodeURI(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><image href="${src}" width="${width}" height="${height}"/></svg>
      `.trim())
    ].join(',')
  })
}

function getPlaceholder (url, sizes) {
  console.log(url)
  const size = sizes.sort((a, b) => a.breakpoint < b.breakpoint ? 1 : -1).pop()
  return new Promise((resolve) => {
    if (process.client) {
      const img = new global.Image()
      img.onload = () => {
        resolve({
          media: size.media,
          breakpoint: size.breakpoint,
          ref: url,
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
