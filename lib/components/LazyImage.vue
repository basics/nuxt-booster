<template>
  <intersection-observer @enter="onEnter">
    <section>
      <lazy-hydrate ssr-only :trigger-hydration="init">
        <figure>
          <slot :src="src" :srcset="imageSrcset" :width="width" :height="height">
            <custom-image v-bind="{src: src, srcset: imageSrcset, width, height, alt, title}" @load="onLoad" />
          </slot>
          <custom-no-script v-if="!init">
            <custom-image v-bind="{src: noscriptSrc, srcset: srcset, width, height, alt, title}" />
          </custom-no-script>
          <figcaption v-if="hasSlot">
            <slot name="caption" />
          </figcaption>
        </figure>
      </lazy-hydrate>
      <span v-show="loading" class="loading" />
      <button v-if="!init" @click="onClick">
        <slot name="button">
          HiRes
        </slot>
      </button>
    </section>
  </intersection-observer>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import IntersectionObserver from '../abstracts/IntersectionObserver'
import { hasGoodOverallConditions } from '../utils/client'
import CustomNoScript from './customs/CustomNoScript'
import CustomImage from './customs/CustomImage'

const imageCache = new Set()

export default {
  components: {
    LazyHydrate,
    IntersectionObserver,
    CustomNoScript,
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

    width: {
      type: Number,
      default () {
        return null
      }
    },

    height: {
      type: Number,
      default () {
        return null
      }
    }
  },

  data () {
    return {
      init: false,
      loading: false
    }
  },

  computed: {
    imageSrcset () {
      if (this.init) {
        imageCache.add(this.srcset)
        return this.srcset
      }
      return null
    },

    noscriptSrc () {
      if (this.srcset) {
        return null
      }
      return this.src
    },

    hasSlot () {
      return this.$slots.caption
    }
  },

  methods: {
    onClick () {
      this.loading = true
      this.init = true
    },

    onEnter () {
      this.init = hasGoodOverallConditions() || imageCache.has(this.srcset)
    },

    onLoad () {
      this.loading = false
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
section {
  position: relative;
  width: 100%;
  height: 100%;

  & > figure {
    width: 100%;
    height: 100%;
    margin: 0;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & figcaption {
      position: absolute;
      top: 100px;
      font-size: 60px;
      color: red;
    }
  }

  & > span.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 10%;
    transform: translate(-50%, -50%);

    &::before {
      box-sizing: border-box;
      display: block;
      padding-top: 100%;
      content: '';
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-sizing: border-box;
      display: block;
      content: '';
      border: 3px solid #ccc;
      border-top-color: #07d;
      border-radius: 50%;
      will-change: transform;
      animation: spinner 0.6s linear infinite;
    }
  }

  & > button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

@keyframes spinner {
  to { transform: rotateZ(360deg); }
}
</style>
