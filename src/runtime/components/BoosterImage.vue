<script>
import { useBoosterCritical } from '#imports';
import { h } from 'vue';

import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import BoosterImage from '#booster/components/BoosterImage/Base';

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
      return h(LazyHydrationWrapper, { props: { never: true } }, [
        h('noscript', {}, [
          h(BoosterImage, { ...this.$attrs, critical: this.hydrate })
        ])
      ]);
    }
    return h(BoosterImage, { ...this.$attrs, critical: this.isCritical });
  }
};
</script>
