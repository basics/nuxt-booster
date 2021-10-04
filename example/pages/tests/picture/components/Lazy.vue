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

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/Picture';
import Picture from 'nuxt-speedkit/components/Picture/classes/Picture';

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    SpeedkitPicture,
    OrganismPreviewContainer
  },

  data () {
    return {

      picture: Picture.create({
        title: 'Lazy',
        sources: [
          // eslint-disable-next-line no-secrets/no-secrets
          { src: '/img/pickadummy/lazy.png', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
        ]
      }).toJSON()

    };
  }
};

</script>
