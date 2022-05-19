<script>
import LazyHydrate from 'vue-lazy-hydration';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture/Base';

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
        h('noscript', {
          class: 'nuxt-speedkit-picture-noscript'
        }, [
          h(SpeedkitPicture, { props: { ...this.$attrs, critical: this.hydrate }, on: this.$listeners })
        ])
      ]);
    }
    return h(SpeedkitPicture, { props: { ...this.$attrs, critical: this.isCritical }, on: this.$listeners });
  }
};
</script>
