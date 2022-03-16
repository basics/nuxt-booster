<script>
import LazyHydrate from 'vue-lazy-hydration';
import SpeedkitImage from 'nuxt-speedkit/components/SpeedkitImage/Base';

export default {
  inheritAttrs: false,

  props: {
    hydrate: {
      type: Boolean,
      default: true
    }
  },

  render (h) {
    if (!this.hydrate) {
      return h(LazyHydrate, { props: { never: true } }, [
        h('noscript', {}, [
          h(SpeedkitImage, { props: { ...this.$attrs, critical: this.hydrate }, on: this.$listeners })
        ])
      ]);
    }
    return h(SpeedkitImage, { props: { ...this.$attrs, critical: this.isCritical }, on: this.$listeners });
  }
};
</script>
