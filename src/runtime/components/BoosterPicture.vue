<script>
import { useBoosterCritical, h } from '#imports';

import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import BoosterPicture from '#booster/components/BoosterPicture/Base';
import pictureProps from './BoosterPicture/props';

export default {
  props: {
    hydrate: {
      type: Boolean,
      default: true
    },
    ...pictureProps
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
          [
            h(BoosterPicture, {
              ...this.$attrs,
              ...{ ...this.$props, hydrate: undefined },
              critical: this.hydrate
            })
          ]
        )
      ]);
    }

    return h(BoosterPicture, {
      ...this.$attrs,
      ...{ ...this.$props, hydrate: undefined },
      critical: this.isCritical
    });
  }
};
</script>
