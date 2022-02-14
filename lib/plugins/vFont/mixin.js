import FontCollection from 'nuxt-speedkit/classes/FontCollection';
import { setIdleExecute } from 'nuxt-speedkit/loader';

const pageStyles = { prev: null, current: new Map() };

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
        pageStyles.prev = new Map(pageStyles.current);
        pageStyles.current.clear();
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

        // add critical fonts to ssr context.
        if (process.static && process.server && this.isCritical) {
          head.style.forEach(style => this.$addCriticalFontStyle(style));
        }

        // get styles from ssr context, important for initial load
        const nuxtStateData = (this.$nuxt?.context || this.context)?.nuxtState?.data;
        if (nuxtStateData && nuxtStateData.length) {
          style = [].concat(style, Object.values(nuxtStateData[0]._criticalFontStyles || {}));
        }

        // keeping styles in head when changing page
        style = style.reduce((result, style) => {
          if (!style.hid) {
            result.push(style);
          } else {
            pageStyles.current.set(style.hid, style);
          }
          return result;
        }, []);
        style = style.concat(Array.from(pageStyles.prev.values()), Array.from(pageStyles.current.values()));

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
