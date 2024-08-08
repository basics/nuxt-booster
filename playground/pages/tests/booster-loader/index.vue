<template>
  <div>
    <critical critical />
    <lazy />
  </div>
</template>

<script setup>
import { useBoosterHydrate } from '#imports';

const hydrate = useBoosterHydrate();

const Critical = hydrate(() => import('./components/Critical'));
const Lazy = hydrate(() => import('./components/Lazy'));

definePageMeta({
  layout: 'blank'
});
</script>
