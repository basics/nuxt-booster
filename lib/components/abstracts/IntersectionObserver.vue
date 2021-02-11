<script>
global.IntersectionObserver = global.IntersectionObserver || class { observe () {} unobserve () {}};
export default {
  abstract: true,
  props: {
    root: {
      type: global.HTMLElement,
      default: null
    },
    rootMargin: {
      type: String,
      default: '0px'
    },
    threshold: {
      type: Array,
      default () {
        return [0];
      }
    },
    trackVisibility: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  created () {
    if (!this.$attrs.critical || !this.$options.critical) {
      const options = (({ root, rootMargin, threshold, trackVisibility, delay }) => ({ root, rootMargin, threshold, trackVisibility, delay }))(this);
      this.observer = new IntersectionObserver(([e]) => this.onIntersect(e), options);
    }
  },
  mounted () {
    if (this.observer) {
      this.observer.observe(this.$el);
    }
  },
  destroyed () {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    onIntersect (e) {
      if (e.isIntersecting) {
        this.observer.unobserve(this.$el);
        this.triggerEnter();
      }
    },
    triggerEnter (e) {
      this.$emit('enter', e);
    }
  },
  render () {
    try {
      return this.$slots.default[0];
    } catch (e) {
      throw new Error('IntersectionObserver.vue can only render one, and exactly one child component.');
    }
  }
};
</script>
