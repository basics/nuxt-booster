<script>
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import { h } from 'vue';
import SpeedkitImage from '#speedkit/components/SpeedkitImage/Base';
import useCritical from '#speedkit/composables/critical';

export default {
  inheritAttrs: false,

  props: {
    hydrate: {
      type: Boolean,
      default: true
    }
  },

  setup() {
    const { isCritical } = useCritical();
    return {
      isCritical
    };
  },

  render() {
    if (!this.hydrate) {
      return h(LazyHydrationWrapper, { props: { never: true } }, [
        h('noscript', {}, [
          h(SpeedkitImage, { ...this.$attrs, critical: this.hydrate })
        ])
      ]);
    }
    return h(SpeedkitImage, { ...this.$attrs, critical: this.isCritical });
  }
};
</script>
