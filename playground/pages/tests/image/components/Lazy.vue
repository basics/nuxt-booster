<template>
  <organism-preview-container id="lazyContainer">
    <template #default>
      <speedkit-image v-bind="image" />
    </template>
    <template #title>
      <p>Lazy - Image</p>
    </template>
  </organism-preview-container>
</template>

<script>

import SpeedkitImage from '#speedkit/components/SpeedkitImage';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    SpeedkitImage,
    OrganismPreviewContainer
  },

  data () {
    return {

      image: {
        title: 'Lazy - Image',
        // eslint-disable-next-line no-secrets/no-secrets
        source: { src: '/img/pickadummy/lazy.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
      }

    };
  }
};

</script>
