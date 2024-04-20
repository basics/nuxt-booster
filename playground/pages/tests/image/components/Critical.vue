<template>
  <organism-preview-container id="criticalContainer">
    <template #default>
      <booster-image v-bind="image" />
    </template>
    <template #title>
      <p>Critical - Image</p>
    </template>
  </organism-preview-container>
</template>

<script>
import BoosterImage from '#booster/components/BoosterImage';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {
  components: {
    OrganismPreviewContainer,
    BoosterImage
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
