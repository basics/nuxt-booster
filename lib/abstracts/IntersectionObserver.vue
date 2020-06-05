<script>
global.IntersectionObserver = global.IntersectionObserver || class { observe () {}; unobserve () {}}

export default {
  abstract: true,

  created () {
    if (!this.$options.critical) {
      this.observer = new IntersectionObserver(([e]) => this.onIntersect(e))
    }
  },

  mounted () {
    if (this.observer) {
      this.observer.observe(this.$el)
    }
  },

  destroyed () {
    this.disableObserver()
  },

  methods: {
    onIntersect (e) {
      if (e.isIntersecting) {
        this.disableObserver()
        this.triggerEnter()
      }
    },

    triggerEnter (e) {
      this.$emit('enter', e)
    },

    disableObserver () {
      if (this.observer) {
        this.observer.unobserve(this.$el)
      }
    }
  },

  render () {
    try {
      return this.$slots.default[0]
    } catch (e) {
      throw new Error('IntersectionObserver.vue can only render one, and exactly one child component.')
    }
  }
}
</script>
