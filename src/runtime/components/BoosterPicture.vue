<script>
import LazyHydrate from 'vue-lazy-hydration';
import BoosterPicture from '#booster/components/BoosterPicture/Base';

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
        h(
          'noscript',
          {
            class: 'nuxt-booster-picture-noscript'
          },
          [
            h(BoosterPicture, {
              props: { ...this.$attrs, critical: this.hydrate },
              on: this.$listeners
            })
          ]
        )
      ]);
    }
    return h(BoosterPicture, {
      props: { ...this.$attrs, critical: this.isCritical },
      on: this.$listeners
    });
  }
};
</script>
