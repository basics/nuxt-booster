<template>
  <div>
    <component-quicksand critical />
    <component-merriweather />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import speedkitHydrate from '#speedkit/hydrate';

const ComponentMerriweather = speedkitHydrate(() =>
  import('@/components/FontTests/Merriweather')
);
const ComponentQuicksand = speedkitHydrate(
  defineAsyncComponent(() => import('@/components/FontTests/Quicksand'))
);
</script>
