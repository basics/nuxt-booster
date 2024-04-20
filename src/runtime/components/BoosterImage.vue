<script>
import LazyHydrate from 'vue-lazy-hydration';
import BoosterImage from '#booster/components/BoosterImage/Base';

export default {
  inheritAttrs: false,

  props: {
    hydrate: {
      type: Boolean,
      default: true
    }
  },

  render(h) {
    if (!this.hydrate) {
      return h(LazyHydrate, { props: { never: true } }, [
        h('noscript', {}, [
          h(BoosterImage, {
            props: { ...this.$attrs, critical: this.hydrate },
            on: this.$listeners
          })
        ])
      ]);
    }
    return h(BoosterImage, {
      props: { ...this.$attrs, critical: this.isCritical },
      on: this.$listeners
    });
  }
};
</script>
