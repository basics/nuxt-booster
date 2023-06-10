<template>
  <preview-container id="lazyContainer">
    <template #default>
      <speedkit-image v-bind="image" />
    </template>
    <template #title>
      <p>Lazy - Image</p>
    </template>
  </preview-container>
</template>

<script>
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
import PreviewContainer from '@/components/PreviewContainer';

export default {
  components: {
    SpeedkitImage,
    PreviewContainer
  },

  data() {
    return {
      image: {
        title: 'Lazy - Image',
        source: {
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
      }
    };
  }
};
</script>
