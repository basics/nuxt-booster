<template>
  <figure class="atom-lazy-image">
    <img
      v-if="lazy"
      :src="lazy.src"
      :srcset="lazy.srcset"
      :width="width"
      :height="height"
      v-bind="$attrs"
      loading="lazy"
      @load="onLoad"
    >
    <noscript v-if="!lazy" inline-template>
      <img :src="src" :srcset="srcset" :width="width" :height="height" v-bind="$attrs" loading="lazy"/>
    </noscript>
    <figcaption v-if="hasSlot">
      <slot>{{ test }}</slot>
    </figcaption>
  </figure>
</template>

<script>
global.IntersectionObserver = global.IntersectionObserver || class { observe () {}; unobserve () {}}

export default {
  props: {
    src: {
      type: String,
      default () {
        return null
      }
    },

    srcset: {
      type: String,
      default () {
        return null
      }
    }
  },

  async fetch () {
    const { width, height } = await getImageSize(this.src)
    this.width = width
    this.height = height
    if (this.$options.critical) {
      this.load()
    }
  },

  data () {
    return {
      lazy: null,
      width: null,
      height: null
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.default
    }
  },

  created () {
    if (!this.$options.critical) {
      this.observer = new global.IntersectionObserver(() => this.load(), { threshold: 0 })
    }
  },

  mounted () {
    if (this.observer) {
      this.observer.observe(this.$el)
    }
  },

  destroyed () {
    this.disableObserver()
  },

  methods: {
    load () {
      this.lazy = {
        src: this.src,
        srcset: this.srcset
      }
      this.disableObserver()
    },

    onLoad (e) {
      this.$emit('load', e.target)
    },

    disableObserver () {
      if (this.observer) {
        this.observer.unobserve(this.$el)
      }
    }
  }
}

async function getImageSize (url) {
  if (process.server) {
    const sizeOf = (await import('buffer-image-size')).default
    const buffer = await getBuffer(url)
    return sizeOf(buffer)
  } else {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve({ width: img.width, height: img.height })
      img.src = url
    })
  }
}

async function getBuffer (url) {
  const result = await fetch(url, { method: 'GET' })
  const blob = await result.blob()
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}
</script>

<style lang="postcss" type="flow" scoped>
.atom-lazy-image {
  img {
    display: block;
  }
}
</style>
