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
          fontActive: false,
          fontCollection: new FontCollection()
        };
      },

      head () {
        return this.fontCollection.getHeadDescription ? this.fontCollection.getHeadDescription(this.isCritical, this.$crossorigin) : {};
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
              [key]: hydrateWhenVisible(async () => {
                return execute(await value());
              }, {
                observerOptions: { rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%' }
              })
            });
          }, {});
        Object.assign(this.$options.components, components);
      }
    });
  }
};

const execute = (component) => {
  return new Promise((resolve) => {
    if ('requestIdleCallback' in global) {
      global.requestIdleCallback((deadline) => {
        const time = deadline.timeRemaining();
        if (time > 10 || deadline.didTimeout) {
          resolve(component);
        } else {
          resolve(execute(component));
        }
      }, { timeout: 2000 });
    } else {
      resolve(component);
    }
  });
};
