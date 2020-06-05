<template>
  <intersection-observer @enter="onEnter">
    <figure class="lazy-image">
      <img
        v-if="width && height"
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
  </intersection-observer>
</template>

<script>
import IntersectionObserver from '../abstracts/IntersectionObserver'
import { getImageSize } from '../utils/image'
global.IntersectionObserver = global.IntersectionObserver || class { observe () {}; unobserve () {}}

export default {
  components: {
    IntersectionObserver
  },

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
      lazy: { src: null, srcset: null },
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
    getImageSize(this.src)
  },

  methods: {
    load () {
      this.lazy = {
        src: this.src,
        srcset: this.srcset
      }
    },

    onLoad (e) {
      this.$emit('load', e.target)
    },

    onEnter () {
      this.load()
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
.lazy-image {
  img {
    display: block;
  }
}
</style>
