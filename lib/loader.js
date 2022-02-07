
import { hydrateWhenVisible } from 'vue-lazy-hydration';

export default component => ({
  render (h) {
    return h(wrap(component), {
      attrs: this.$attrs,
      on: this.$listeners,
      scopedSlots: this.$scopedSlots
    }, this.$slots.default);
  }
});

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

const wrap = (component) => {
  return hydrateWhenVisible(async () => {
    return execute(await component());
  }, {
    observerOptions: { rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%' }
  });
};
