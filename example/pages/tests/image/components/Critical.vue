<template>
  <organism-preview-container id="criticalContainer">
    <template #default>
      <default-image v-bind="image" />
    </template>
    <template #title>
      <p>Critical - Image</p>
    </template>
  </organism-preview-container>
</template>

<script>

import DefaultImage from 'nuxt-speedkit/components/Image';
import Image from 'nuxt-speedkit/components/Image/classes/Image';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    OrganismPreviewContainer,
    DefaultImage
  },

  data () {
    return {

      image: Image.create({
        title: 'Critical - Image',
        // eslint-disable-next-line no-secrets/no-secrets
        source: { format: 'jpg', src: '/img/pickadummy/critical.png', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
      }).toJSON()

    };
  }
};

</script>
