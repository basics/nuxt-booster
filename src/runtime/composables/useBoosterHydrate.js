import { useRuntimeConfig } from '#imports';
import { defineAsyncComponent, hydrateOnVisible } from 'vue';

export default function () {
  return hydrate;
}

const isDev = process.env.NODE_ENV === 'development';

export const hydrate = component => {
  const runtimeConfig = useRuntimeConfig();

  let hydrate;
  if (!(isDev || import.meta.server) && typeof component === 'function') {
    hydrate = hydrateOnVisible({
      rootMargin: runtimeConfig.public.booster.lazyOffsetComponent || '0%'
    });
  }

  return defineAsyncComponent({
    loader: component,
    hydrate
  });
};
