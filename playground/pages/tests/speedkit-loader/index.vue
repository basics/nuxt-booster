<template>
  <div>
    <critical critical />
    <lazy />
  </div>
</template>

<script setup>
import boosterHydrate from '#booster/hydrate';
import { definePageMeta } from '#imports';

const Critical = boosterHydrate(() => import('./components/Critical'));
const Lazy = boosterHydrate(() => import('./components/Lazy'));

definePageMeta({
  layout: 'blank'
});
</script>
