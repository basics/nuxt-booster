<template>
  <intersection-observer @enter="onEnter">
    <figure>
      <slot v-if="lazy.src || lazy.srcset" :width="width" :height="height">
        <custom-image v-bind="{...$attrs, width, height, src: lazy.src, srcset: lazy.srcset}" />
      </slot>
      <custom-no-script v-if="!$options.critical && seo">
        <custom-image v-bind="{...$attrs, width, height, src, srcset}" />
      </custom-no-script>
      <figcaption v-if="hasSlot">
        <slot name="caption" />
      </figcaption>
    </figure>
  </intersection-observer>
</template>

<script>
import IntersectionObserver from '../abstracts/IntersectionObserver'
import { getImageSizeOfSrc, getImageSizeOfSrcset } from '../utils/image'
import CustomImage from './CustomImage'
import CustomNoScript from './CustomNoScript'

export default {
  components: {
    IntersectionObserver,
    CustomImage,
    CustomNoScript
  },

  props: {
    src: {
      type: String,
      default () {
        return null
      }
    },

    srcset: {
      type: Array,
      default () {
        return []
      }
    },

    seo: {
      type: Boolean,
      default () {
        return true
      }
    }
  },

  async fetch () {
    if (this.src) {
      ({ width: this.width, height: this.height } = await getImageSizeOfSrc(this.src))
    } else {
      ({ width: this.width, height: this.height } = await getImageSizeOfSrcset(this.srcset))
    }
    if (this.$options.critical) {
      this.load()
    }
  },

  data () {
    return {
      width: 0,
      height: 0,
      lazy: { src: null, srcset: null }
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.caption
    }
  },

  created () {
    if (this.$options.critical) {
      if (this.src) {
        getImageSizeOfSrc(this.src)
      } else {
        getImageSizeOfSrcset(this.srcset)
      }
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
/* figure {} */
</style>
