<template>
  <intersection-observer @enter="onEnter">
    <figure class="lazy-image">
      <custom-image
        v-if="lazy.src || lazy.srcset"
        :src="lazy.src"
        :srcset="lazy.srcset"
        :size="size"
        v-bind="$attrs"
        loading="lazy"
      />
      <template lang="html">
        <noscript v-if="!$options.critical">
          <img :src="src" :srcset="srcset" :width="size.width" :height="size.height" v-bind="$attrs" loading="lazy"/>
        </noscript>
      </template>
      <figcaption v-if="hasSlot">
        <slot>{{ test }}</slot>
      </figcaption>
    </figure>
  </intersection-observer>
</template>

<script>
import IntersectionObserver from '../abstracts/IntersectionObserver'
import { getImageSize } from '../utils/image'
import CustomImage from './CustomImage'

export default {
  components: {
    IntersectionObserver,
    CustomImage
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
    ({ width: this.size.width, height: this.size.height } = await getImageSize(this.src))
    if (this.$options.critical) {
      this.load()
    }
  },

  data () {
    return {
      lazy: { src: null, srcset: null },
      size: {
        width: null,
        height: null
      }
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.default
    }
  },

  created () {
    if (this.$options.critical) {
      getImageSize(this.src)
    }
  },

  methods: {
    load () {
      ({ src: this.lazy.src, srcset: this.lazy.srcset } = this)
    },

    onEnter () {
      this.load()
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
/* .lazy-image {} */
</style>
