<script>
import LazyHydrate from 'vue-lazy-hydration';
import SpeedkitImage from 'nuxt-speedkit/components/SpeedkitImage';

export default {
  inheritAttrs: false,

  props: {
    load: {
      type: Boolean,
      default: true
    }
  },

  render (h) {
    const component = h(SpeedkitImage, { props: { ...this.$attrs, critical: this.isCritical } });
    if (!this.isCritical && !this.load) {
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
