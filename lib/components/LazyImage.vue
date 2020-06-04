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
import { getImageSize } from '../utils/image'
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
    } else {
      getImageSize(this.src)
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
</script>

<style lang="postcss" type="flow" scoped>
.atom-lazy-image {
  img {
    display: block;
  }
}
</style>
