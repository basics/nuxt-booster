<template>
  <preview-container id="criticalContainer">
    <template #default>
      <speedkit-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Critical - Picture</p>
    </template>
  </preview-container>
</template>

<script setup>
import SpeedkitPicture from '#speedkit/components/SpeedkitPicture';
import PreviewContainer from '@/components/PreviewContainer';

const picture = {
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
};
</script>
