// IMPORTANT: speedkitComponent must be equal projekt import
import FontCollection from 'nuxt-speedkit/classes/FontCollection';
import { hydrateWhenVisible } from 'vue-lazy-hydration';

export default {
  install (Vue) {
    Vue.mixin({
      provide () {
        return {
          criticalParent: this.critical || this.criticalParent
        };
      },

      inject: {
        criticalParent: { default: () => this.critical || false }
      },

      props: {
        critical: {
          type: Boolean,
          default () {
            return false;
          }
        }
      },

      data () {
        return {
          fontCollection: new FontCollection()
        };
      },

      head () {
        return {
          link: this.fontCollection.getPreloadLinks ? this.fontCollection.getPreloadLinks(this.isCritical) : [],
          style: this.fontCollection.getStyleTag ? this.fontCollection.getStyleTag() : [],
          __dangerouslyDisableSanitizers: ['style']
        };
      },

      computed: {
        isCritical () {
          return this.criticalParent || this.critical;
        }
      },

      beforeCreate () {
        const components = Object
          .entries(this.$options.speedkitComponents || {})
          .reduce((result, [key, value]) => {
            return Object.assign(result, {
              [key]: hydrateWhenVisible(value, {
                rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%'
              })
            });
          }, {});
        Object.assign(this.$options.components, components);
      }
    });
  }
};
