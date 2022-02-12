// IMPORTANT: speedkitComponent must be equal projekt import
import FontCollection from 'nuxt-speedkit/classes/FontCollection';
import { setIdleExecute } from 'nuxt-speedkit/loader';

let stylePageMap = [];

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

      beforeRouteLeave (to, from, next) {
        if (process.client) {
          setIdleExecute(false);
        }
        next();
      },

      beforeRouteEnter (to, from, next) {
        stylePageMap.unshift(new Map());
        stylePageMap = stylePageMap.slice(0, 3);
        next();
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
        // add critical fonts to ssr context.
        if (process.static && process.server && this.isCritical) {
          head.style.forEach(style => this.$addCriticalFontStyle(style));
        }

        const nuxtStateData = (this.$nuxt?.context || this.context)?.nuxtState?.data;
        if (nuxtStateData && nuxtStateData.length) {
          style = [...style, ...Object.values(nuxtStateData[0]._criticalFontStyles || {})];
        }

        style.forEach((style) => {
          stylePageMap[0].set(style.hid, style);
        });
        style = stylePageMap.map(map => Array.from(map.values())).flat();

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
