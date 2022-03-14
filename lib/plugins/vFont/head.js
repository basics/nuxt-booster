import Vue from 'vue';
const pageStyles = { prev: new Map(), current: new Map() };

export default {
  install (Vue) {
    Vue.mixin({
      beforeRouteEnter (to, from, next) {
        pageStyles.prev = new Map(pageStyles.current);
        pageStyles.current.clear();
        next();
      },

      head () {
        return this.$speedkitHead();
      }
    });
  }
};

const head = function () {
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
};

!('$speedkitHead' in Vue.prototype) && Object.defineProperty(Vue.prototype, '$speedkitHead', {
  get () {
    return head.bind(this);
  }
});

Vue.config.optionMergeStrategies.head = Vue.config.optionMergeStrategies.data;
