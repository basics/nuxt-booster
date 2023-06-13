<template>
  <div>
    <critical critical />
    <lazy />
  </div>
</template>

<script setup>
import speedkitHydrate from '#speedkit/hydrate';
import { definePageMeta } from '#imports';

const Critical = speedkitHydrate(() => import('./components/Critical'));
const Lazy = speedkitHydrate(() => import('./components/Lazy'));

definePageMeta({
  layout: 'blank'
});
</script>
