<script>
import LazyHydrate from 'vue-lazy-hydration';
import SpeedkitImage from 'nuxt-speedkit/components/SpeedkitImage';

export default {
  inheritAttrs: false,

  props: {
    hydrate: {
      type: Boolean,
      default: true
    }
  },

  render (h) {
    const component = h(SpeedkitImage, { props: { ...this.$attrs, critical: this.isCritical, on: this.$listeners } });
    if (!this.isCritical && !this.hydrate) {
      return h(LazyHydrate, { props: { never: true } }, [
        h('noscript', {}, [
          component
        ])
      ]);
    }
    return component;
  }
};
</script>
