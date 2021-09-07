// IMPORTANT: speedkitComponent must be equal projekt import
import FontCollection from 'nuxt-speedkit/classes/FontCollection';
import ImageSource from 'nuxt-speedkit/components/image/classes/ImageSource';
import ImageSourceList from 'nuxt-speedkit/components/picture/classes/ImageSourceList';
import { getStyleDescription } from 'nuxt-speedkit/utils/description';
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
        const headDescription = this.fontCollection.getHeadDescription ? this.fontCollection.getHeadDescription(this.isCritical, this.$crossorigin) : { style: [] };
        if (
          !process.server &&
          this.$router === this.$root.$router &&
          this.$parent && this.$parent.routerViewKey &&
          (this.$root._pagePayload || global.__NUXT__).fetch) {
          headDescription.style.push(getStyleDescription(prepareRatioStyle((this.$root._pagePayload || global.__NUXT__).fetch), false, 'image-picture-ratios-' + this.$parent.routerViewKey));
        }
        return headDescription;
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

const prepareRatioStyle = (fetch) => {
  return Object.keys(fetch)
    .filter(key => ((key.startsWith('picture:') || key.startsWith('image:')) && fetch[String(key)].meta))
    .map((key) => {
      const { meta } = fetch[String(key)];
      if (Array.isArray(meta)) {
      // picture
        return (new ImageSourceList(meta)).style;
      }
      // image
      return (new ImageSource(meta)).style;
    });
};
