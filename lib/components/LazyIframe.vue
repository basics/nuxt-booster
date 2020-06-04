<template>
  <iframe :src="lazySrc" v-bind="$attrs" class="lazy-iframe" />
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

  created () {
    this.observer = new IntersectionObserver(([e]) => this.onIntersect(e))
  },

  mounted () {
    this.observer.observe(this.$el)
  },

  destroyed () {
    this.disableObserver()
  },

  methods: {
    onIntersect (e) {
      console.log(e)
      if (e.isIntersecting) {
        this.lazySrc = this.src
        this.disableObserver()
      }
    },

    disableObserver () {
      this.observer.unobserve(this.$el)
    }
  }
}
</script>

<style lang="postcss" type="flow" scoped>
/* .lazy-iframe {} */
</style>
