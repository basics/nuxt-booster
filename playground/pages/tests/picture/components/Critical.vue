<template>
  <preview-container id="criticalContainer">
    <template #default>
      <booster-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Critical - Picture</p>
    </template>
  </preview-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import BoosterPicture from '#booster/components/BoosterPicture.vue';
import PreviewContainer from '@/components/PreviewContainer.vue';

const picture = ref({
  title: 'Critical',
  sources: [
    {
      src: '/img/critical.jpg',
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
