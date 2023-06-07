<template>
  <div>
    <component-merriweather critical />
    <component-montserrat-alternates />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import speedkitHydrate from '#speedkit/hydrate';

const ComponentMerriweather = speedkitHydrate(() =>
  import('@/components/FontTests/Merriweather')
);
const ComponentMontserratAlternates = speedkitHydrate(
  defineAsyncComponent(() =>
    import('@/components/FontTests/MontserratAlternates')
  )
);
</script>
