<script>
global.IntersectionObserver = global.IntersectionObserver || class { observe () {}; unobserve () {}}

export default {
  abstract: true,

  props: {
    root: {
      type: global.HTMLElement,
      default () {
        return null
      }
    },

    rootMargin: {
      type: String,
      default () {
        return '0px'
      }
    },

    threshold: {
      type: Array,
      default () {
        return [0]
      }
    }
  },

  created () {
    if (!this.$options.critical) {
      const options = (({ root, rootMargin, threshold }) => ({ root, rootMargin, threshold }))(this)
      this.observer = new IntersectionObserver(([e]) => this.onIntersect(e), options)
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
