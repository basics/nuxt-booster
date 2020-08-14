<template>
  <intersection-observer @enter="onEnter">
    <section>
      <lazy-hydrate ssr-only :trigger-hydration="loading">
        <figure>
          <slot />
          <figcaption v-if="hasSlot">
            <slot name="caption" />
          </figcaption>
        </figure>
      </lazy-hydrate>
      <span v-show="loading" class="loading" />
      <button v-if="!init" class="noscript-hide" @click="onClick">
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

export default {
  components: {
    LazyHydrate,
    IntersectionObserver
  },

  props: {
    loading: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  data () {
    return {
      init: false
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.caption
    }
  },

  watch: {
    loading: {
      handler (value) {
        this.init = value || this.init
      }
    }
  },

  methods: {
    onClick () {
      this.$emit('requestHiRes')
    },

    onEnter () {
      this.$emit('visible')
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

    & figcaption {
      position: absolute;
      top: 100px;
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
      animation: spinner 0.6s linear infinite;
      will-change: transform;
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
