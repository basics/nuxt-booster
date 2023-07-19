<script>
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import { h } from 'vue';
import SpeedkitPicture from '#speedkit/components/SpeedkitPicture/Base';
import useCritical from '#speedkit/composables/critical';

export default {
  inheritAttrs: false,

  props: {
    hydrate: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const { isCritical } = useCritical();
    return {
      isCritical
    };
  },

  render () {
    if (!this.hydrate) {
      return h(LazyHydrationWrapper, { never: true }, [
        h(
          'noscript',
          {
            class: 'nuxt-speedkit-picture-noscript'
          },
          [h(SpeedkitPicture, { ...this.$attrs, critical: this.hydrate })]
        )
      ]);
    }
    return h(SpeedkitPicture, { ...this.$attrs, critical: this.isCritical });
  }
};
</script>
