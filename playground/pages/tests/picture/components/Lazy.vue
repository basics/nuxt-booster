<template>
  <organism-preview-container id="lazyContainer">
    <template #default>
      <booster-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Lazy - Picture</p>
    </template>
  </organism-preview-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import BoosterPicture from '#booster/components/BoosterPicture.vue';
import OrganismPreviewContainer from '@/components/PreviewContainer.vue';

const picture = ref({
  title: 'Lazy',
  sources: [
    {
      src: '/img/lazy.jpg',
      sizes: {
        default: '100vw',
        xxs: '100vw',
        xs: '100vw',
        sm: '100vw',
        md: '100vw',
        lg: '100vw',
        xl: '100vw',
        xxl: '100vw'
      }
    }
  ]
});
</script>
