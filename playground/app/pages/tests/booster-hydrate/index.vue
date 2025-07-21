<template>
  <div>
    <critical critical />
    <lazy />
    <media />
    <custom />
  </div>
</template>

<script setup lang="ts">
import { useRouter, definePageMeta, useBoosterHydrate } from '#imports';

import { hydrateOnMediaQuery, hydrateOnVisible } from 'vue';

const hydrate = useBoosterHydrate();

const $router = useRouter();

const hydrateOnVisibleSpezificRoute =
  (options?: IntersectionObserverInit) =>
  (hydrate: () => void, forEach: (cb: (el: Element) => unknown) => void) => {
    if (
      ['tests-booster-hydrate', 'booster-hydrate'].includes(
        String($router.currentRoute.value)
      )
    ) {
      return hydrateOnVisible(options)(hydrate, forEach);
    } else {
      hydrate();
    }
  };

const Custom = hydrate(
  () => import('./components/Custom.vue'),
  hydrateOnVisibleSpezificRoute()
);

const Critical = hydrate(() => import('./components/Critical.vue'));
const Lazy = hydrate(() => import('./components/Lazy.vue'));
const Media = hydrate(
  () => import('./components/Media.vue'),
  hydrateOnMediaQuery('(max-width:500px)')
);

definePageMeta({
  layout: 'blank'
});
</script>
