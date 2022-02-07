// IMPORTANT: speedkitComponent must be equal projekt import
import FontCollection from 'nuxt-speedkit/classes/FontCollection';

export default {
  install (Vue) {
    Vue.mixin({
      provide () {
        return {
          criticalParent: typeof this.critical === 'boolean' ? this.critical : this.criticalParent
        };
      },

      inject: {
        criticalParent: { default: () => this.critical || false }
      },

      props: {
        critical: {
          type: Boolean,
          default () {
            return null;
          }
        }
      },

      data () {
        return {
          fontActive: false,
          fontCollection: new FontCollection()
        };
      },

      head () {
        const head = this.fontCollection.getHeadDescription ? this.fontCollection.getHeadDescription(this.isCritical, this.$speedkit.crossorigin) : {};
        let style = head.style || [];

        // TODO: Critical Fonts in den SSR schreiben
        // add critical fonts to payload.
        if (process.static && process.server && this.isCritical) {
          head.style.forEach(style => this.$addStyleToSSR(style));
        }

        if (this.$nuxt.context?.nuxtState?.data) {
          style = [...style, ...Object.values(this.$nuxt.context.nuxtState.data[0]._fonts || {})];
        }

        return { ...head, style };
      },

      computed: {
        isCritical () {
          return typeof this.critical === 'boolean' ? this.critical : this.criticalParent;
        }
      }

    });
  }
};

// head.style.forEach((style) => {
//   stylePageMap[0].set(style.hid, style);
// });
// console.log(stylePageMap);
