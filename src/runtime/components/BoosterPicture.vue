<script>
import { h, useBoosterCritical } from '#imports';
import HydrateWrapper from './HydrateWrapper';
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
      return h(HydrateWrapper, {}, [
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
