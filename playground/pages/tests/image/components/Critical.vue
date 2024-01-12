<template>
  <organism-preview-container id="criticalContainer">
    <template #default>
      <speedkit-image v-bind="image" />
    </template>
    <template #title>
      <p>Critical - Image</p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {
  components: {
    OrganismPreviewContainer,
    SpeedkitImage
  },

  data() {
    return {
      image: {
        title: 'Critical - Image',
        source: {
          format: 'jpg',
          src: '/img/pickadummy/critical.jpg',
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
