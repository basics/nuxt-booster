<template>
  <intersection-observer @enter="onEnter">
    <figure class="nuxt-speedkit__image-container">
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
