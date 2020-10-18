<template>
  <intersection-observer @enter="onEnter">
    <figure>
      <slot />
      <span v-show="loading" class="loading" />
      <figcaption v-if="hasSlot">
        <slot name="caption" />
      </figcaption>
    </figure>
  </intersection-observer>
</template>

<script>
import IntersectionObserver from '../abstracts/IntersectionObserver'

export default {
  components: {
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
    onEnter () {
      this.$emit('visible')
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
figure {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;

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
}
</style>
