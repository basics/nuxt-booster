<template>
  <div>
    <critical critical />
    <lazy />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, useBoosterHydrate } from '#imports';

const hydrate = useBoosterHydrate();

const Critical = hydrate(() => import('./components/Critical.vue'));
const Lazy = hydrate(() => import('./components/Lazy.vue'));

definePageMeta({
  layout: 'blank'
});
</script>
