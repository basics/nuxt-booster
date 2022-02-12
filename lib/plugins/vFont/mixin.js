// IMPORTANT: speedkitComponent must be equal projekt import
import FontCollection from 'nuxt-speedkit/classes/FontCollection';
import { setIdleExecute } from 'nuxt-speedkit/loader';

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
        setIdleExecute(false);
        next();
      },

      beforeRouteEnter (to, from, next) {
        next((vm) => {
          (vm.styles = vm.styles || new Map());
        });
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
          styles: null,
          fontActive: false,
          fontCollection: new FontCollection()
        };
      },

      head () {
        const head = this.fontCollection.getHeadDescription ? this.fontCollection.getHeadDescription(this.isCritical, this.$speedkit.crossorigin) : {};
        let style = head.style || [];

        // add critical fonts to ssr context.
        if (process.static && process.server && this.isCritical) {
          head.style.forEach(style => this.$addCriticalFontStyle(style));
        }

        // get styles from ssr context, important for initial load
        const nuxtStateData = (this.$nuxt?.context || this.context)?.nuxtState?.data;
        if (nuxtStateData && nuxtStateData.length) {
          style = [...style, ...Object.values(nuxtStateData[0]._criticalFontStyles || {})];
        }

        // keeping styles in head when changing page
        if (this.pageStyles) {
          style.forEach((style) => {
            this.pageStyles.set(style.hid, style);
          });
          style = Array.from(this.pageStyles.values());
        }

        return { ...head, style };
      },

      computed: {
        isCritical () {
          return typeof this.critical === 'boolean' ? this.critical : this.criticalParent;
        },
        pageStyles () {
          return this.styles ? this.styles : this.$parent?.pageStyles;
        }
      }

    });
  }
};
