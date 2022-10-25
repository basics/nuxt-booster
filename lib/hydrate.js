
import { hydrateWhenVisible } from 'vue-lazy-hydration';

const isDev = process.env.NODE_ENV === 'development';

export default (component) => {
  if (isDev || process.server) {
    return component;
  }

  return hydrateWhenVisible(component, {
    observerOptions: { rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%' }
  });
};
