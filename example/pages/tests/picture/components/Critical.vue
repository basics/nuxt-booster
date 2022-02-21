<template>
  <organism-preview-container id="criticalContainer">
    <template #default>
      <speedkit-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Critical - Picture</p>
    </template>
  </organism-preview-container>
</template>

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    SpeedkitPicture,
    OrganismPreviewContainer
  },

  data () {
    return {

      picture: {
        title: 'Critical',
        sources: [
          // eslint-disable-next-line no-secrets/no-secrets
          { src: '/img/pickadummy/critical.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
        ]
      }

    };
  }
};

</script>
