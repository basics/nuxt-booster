<template>
  <organism-preview-container id="lazyContainer">
    <template #default>
      <speedkit-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Lazy - Picture</p>
    </template>
  </organism-preview-container>
</template>

<script setup>
import SpeedkitPicture from '#speedkit/components/SpeedkitPicture';
import OrganismPreviewContainer from '@/components/PreviewContainer';

const picture = {
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
};
</script>
