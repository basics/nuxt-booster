<template>
  <iframe :src="lazySrc" v-bind="$attrs" class="nuxt-speedkit__lazy-iframe" loading="lazy" />
</template>

<script>
export default {
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

  mounted () {
    this.lazySrc = this.src
  }
}
</script>
