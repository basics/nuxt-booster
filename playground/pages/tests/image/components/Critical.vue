<template>
  <preview-container id="criticalContainer">
    <template #default>
      <speedkit-image v-bind="image" />
    </template>
    <template #title>
      <p>Critical - Image</p>
    </template>
  </preview-container>
</template>

<script setup>
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
import PreviewContainer from '@/components/PreviewContainer';

const image = {
  title: 'Critical - Image',
  source: {
    format: 'jpg',
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
};
</script>
