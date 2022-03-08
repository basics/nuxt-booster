
import { hydrateWhenVisible } from 'vue-lazy-hydration';

const isDev = process.env.NODE_ENV === 'development';

let idleExecuteResolve = true;
export const setIdleExecute = value => (idleExecuteResolve = value);

export default (component) => {
  if (isDev) {
    // important for clean hot reload in dev
    return component;
  }

  return ({
    render (h) {
      return h(wrap(component, !process.server && idleExecuteResolve), {
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  });
};

const wrap = (component, executeResolve) => {
  return hydrateWhenVisible(async () => {
    if (executeResolve) {
      return execute(await component());
    } else {
      return component();
    }
  }, {
    observerOptions: { rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%' }
  });
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
