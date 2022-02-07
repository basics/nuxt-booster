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
        return this.fontCollection.getHeadDescription ? this.fontCollection.getHeadDescription(this.isCritical, this.$speedkit.crossorigin) : {};
      },

      computed: {
        isCritical () {
          return typeof this.critical === 'boolean' ? this.critical : this.criticalParent;
        }
      }

    });
  }
};
