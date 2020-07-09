<template>
  <intersection-observer @enter="onEnter">
    <figure>
      <slot>
        <custom-image v-bind="{...$attrs, width, height, src: src, srcset: preparedSrcset}" />
      </slot>
      <custom-no-script>
        <custom-image v-bind="{...$attrs, width, height, src, srcset: preparedSrcset}" />
      </custom-no-script>
      <figcaption v-if="hasSlot">
        <slot name="caption" />
      </figcaption>
    </figure>
  </intersection-observer>
</template>

<script>
import { hydrateSsrOnly } from 'vue-lazy-hydration'
import srcset from 'srcset'
import IntersectionObserver from '../abstracts/IntersectionObserver'
import { getImageSize } from '../utils/image'
import { sortSrcset } from '../utils/srcset'
import CustomNoScript from './customs/CustomNoScript'

export default {
  components: {
    IntersectionObserver,
    CustomNoScript,
    CustomImage: hydrateSsrOnly(
      () => import('./customs/CustomImage.vue'),
      { ignoredProps: ['srcset'] }
    )
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
    ({ width: this.width, height: this.height } = await getImageSize(this.src || this.srcset, this.$getImageSizeFromUrl))
    // console.log(this.width, this.height, this.srcset)
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
    preparedSrcset () {
      return srcset.stringify(sortSrcset(this.srcset || [])) || null
    },

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
