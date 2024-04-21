import { hydrateWhenVisible } from 'vue3-lazy-hydration';
import { defineAsyncComponent } from 'vue';
import { useRuntimeConfig } from '#imports';

const isDev = process.env.NODE_ENV === 'development';

export default component => {
  if (isDev || import.meta.server) {
    if (typeof component === 'function') {
      component = defineAsyncComponent(component);
    }
    return component;
  }

  const runtimeConfig = useRuntimeConfig();

  return hydrateWhenVisible(component, {
    observerOptions: {
      rootMargin: runtimeConfig.public.booster.lazyOffsetComponent || '0%'
    }
  });
};
