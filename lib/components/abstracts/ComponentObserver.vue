<script>

import { getElementObserver } from 'nuxt-speedkit/classes/intersection';

export default {
  abstract: true,
  props: {
    root: {
      type: global.HTMLElement,
      default: undefined
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

  async mounted () {
    if (this.isCritical) {
      this.onEnterView();
    } else {
      const options = (({ root, rootMargin, threshold, trackVisibility, delay }) => ({ root, rootMargin, threshold, trackVisibility, delay }))(this);
      await getElementObserver(this.$el, options).enterViewOnce();
      this.onEnterView();
    }
  },

  methods: {
    onEnterView () {
      this.$emit('enterView');
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
