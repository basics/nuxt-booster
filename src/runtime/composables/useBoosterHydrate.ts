import { useRuntimeConfig } from '#imports';
import type { AsyncComponentLoader, HydrationStrategy } from 'vue';
import { defineAsyncComponent, hydrateOnVisible } from 'vue';

export default function () {
  return hydrate;
}

const isDev = process.env.NODE_ENV === 'development';

export const hydrate = (
  component: AsyncComponentLoader,
  hydrate?: HydrationStrategy
) => {
  const runtimeConfig = useRuntimeConfig();

  if (!(isDev || import.meta.server) && typeof component === 'function') {
    hydrate =
      hydrate ||
      hydrateOnVisible({
        rootMargin: runtimeConfig.public.booster.lazyOffsetComponent || '0%'
      });
  } else {
    hydrate = undefined;
  }

  return defineAsyncComponent({
    loader: component,
    hydrate
  });
};
