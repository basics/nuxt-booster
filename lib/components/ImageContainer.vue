<template>
  <figure class="nuxt-speedkit__image-container">
    <slot />
    <span v-show="loading" class="loading" />
    <figcaption v-if="hasSlot">
      <slot name="caption" />
    </figcaption>
  </figure>
</template>

<script>
import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'

export default {

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

  mounted () {
    registerIntersecting(this.$el, () => this.$emit('visible'))
  },

  destroyed () {
    unregisterIntersecting(this.$el)
  }

}
</script>
