<template>
  <intersection-observer @enter="onEnter">
    <iframe :src="lazySrc" v-bind="$attrs" class="lazy-iframe" loading="lazy" />
  </intersection-observer>
</template>

<script>
import IntersectionObserver from '../abstracts/IntersectionObserver'

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
    }
  },

  data () {
    return {
      lazySrc: null
    }
  },

  methods: {
    onEnter (e) {
      this.lazySrc = this.src
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
/* .lazy-iframe {} */
</style>
