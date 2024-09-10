<template>
  <div>
    <critical critical />
    <lazy />
    <media />
    <custom />
  </div>
</template>

<script setup>
import { useRouter, definePageMeta, useBoosterHydrate } from '#imports';

import { hydrateOnMediaQuery, hydrateOnVisible } from 'vue';

const hydrate = useBoosterHydrate();

const $router = useRouter();

const hydrateOnVisibleSpezificRoute = options => (hydrate, forEach) => {
  if (
    ['tests-booster-hydrate', 'booster-hydrate'].includes(
      $router.currentRoute.value
    )
  ) {
    return hydrateOnVisible(options)(hydrate, forEach);
  } else {
    hydrate();
  }
};

const Custom = hydrate(
  () => import('./components/Custom'),
  () => hydrateOnVisibleSpezificRoute()
);

const Critical = hydrate(() => import('./components/Critical'));
const Lazy = hydrate(() => import('./components/Lazy'));
const Media = hydrate(
  () => import('./components/Media'),
  () => hydrateOnMediaQuery('(max-width:500px)')
);

definePageMeta({
  layout: 'blank'
});
</script>
