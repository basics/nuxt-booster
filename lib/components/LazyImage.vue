<template>
  <intersection-observer @enter="onEnter">
    <figure>
      <slot v-if="lazy.src || lazy.srcset" :width="width" :height="height">
        <custom-image v-bind="{...$attrs, width, height, src: lazy.src, srcset: lazy.srcset}" />
      </slot>
      <custom-no-script v-if="($attrs.critical === 'false' || !$options.critical) && seo">
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
import { getImageSize } from '../utils/image'
import CustomImage from './customs/CustomImage'
import CustomNoScript from './customs/CustomNoScript'

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
        return null
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
    ({ width: this.width, height: this.height } = await getImageSize(this.src || this.srcset))
    // if (this.$options.critical) {
    //   this.load()
    // }
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
    // if (this.$options.critical) {
    //   getImageSize(this.src || this.srcset)
    // }
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
figure {
  margin: 0;
}
</style>
