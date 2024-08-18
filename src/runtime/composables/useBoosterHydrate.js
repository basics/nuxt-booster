import { hydrateWhenVisible } from 'vue3-lazy-hydration';
import { useRuntimeConfig } from '#imports';
import { defineAsyncComponent } from 'vue';

export default function () {
  return hydrate;
}

const isDev = process.env.NODE_ENV === 'development';

export const hydrate = component => {
  const runtimeConfig = useRuntimeConfig();

  return hydrateWhenVisible(wrapComponent(component), {
    rootMargin: runtimeConfig.public.booster.lazyOffsetComponent || '0%'
  });
};

const wrapComponent = component => {
  if (!(isDev || import.meta.server) && typeof component === 'function') {
    return defineAsyncComponent(component);
  }
  return component;
};
