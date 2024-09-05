<script>
import { h, useBoosterCritical } from '#imports';
import HydrateWrapper from './HydrateWrapper';
import BoosterImage from '#booster/components/BoosterImage/Base';
import imageProps from './BoosterImage/props';

export default {
  props: {
    hydrate: {
      type: Boolean,
      default: true
    },
    ...imageProps
  },
  setup() {
    const { isCritical } = useBoosterCritical();
    return {
      isCritical
    };
  },

  render() {
    if (!this.hydrate) {
      return h(HydrateWrapper, { never: true }, [
        h(
          'noscript',
          {
            class: 'nuxt-booster-image-noscript'
          },
          [
            h(BoosterImage, {
              ...this.$attrs,
              ...{ ...this.$props, hydrate: undefined },
              critical: this.hydrate
            })
          ]
        )
      ]);
    }
    return h(BoosterImage, {
      ...this.$attrs,
      ...{ ...this.$props, hydrate: undefined },
      critical: this.isCritical
    });
  }
};
</script>
