import { useRuntimeConfig } from '#imports';
import { defineAsyncComponent, hydrateOnVisible } from 'vue';
import type { AsyncComponentLoader, Component, HydrationStrategy } from 'vue';

export default function useBoosterHydrate() {
  return <T extends Component>(
    component: AsyncComponentLoader<T>,
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
}

const isDev = process.env.NODE_ENV === 'development';
