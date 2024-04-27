import { hydrateWhenVisible } from 'vue3-lazy-hydration';

const isDev = process.env.NODE_ENV === 'development';

export default component => {
  const runtimeConfig = useRuntimeConfig();

  return hydrateWhenVisible(wrapComponent(component), {
    observerOptions: {
      rootMargin: runtimeConfig.public.booster.lazyOffsetComponent || '0%'
    }
  });
};

const wrapComponent = component => {
  if ((isDev || import.meta.server) && typeof component === 'function') {
    return defineAsyncComponent(component);
  }
  return component;
};
