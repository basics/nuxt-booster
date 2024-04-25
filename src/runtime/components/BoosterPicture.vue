<script>
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import BoosterPicture from '#booster/components/BoosterPicture/Base';

export default {
  inheritAttrs: false,

  props: {
    hydrate: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const { isCritical } = useBoosterCritical();
    return {
      isCritical
    };
  },

  render() {
    if (!this.hydrate) {
      return h(LazyHydrationWrapper, { never: true }, [
        h(
          'noscript',
          {
            class: 'nuxt-booster-picture-noscript'
          },
          [h(BoosterPicture, { ...this.$attrs, critical: this.hydrate })]
        )
      ]);
    }
    return h(BoosterPicture, { ...this.$attrs, critical: this.isCritical });
  }
};
</script>
