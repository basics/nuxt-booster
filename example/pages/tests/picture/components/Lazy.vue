<template>
  <organism-preview-container id="lazyContainer">
    <template #default>
      <default-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Lazy - Picture</p>
    </template>
  </organism-preview-container>
</template>

<script>

import DefaultPicture from 'nuxt-speedkit/components/Picture';
import Picture from 'nuxt-speedkit/components/Picture/classes/Picture';

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    DefaultPicture,
    OrganismPreviewContainer
  },

  data () {
    return {

      picture: Picture.create({
        title: 'Lazy',
        sources: [
          // eslint-disable-next-line no-secrets/no-secrets
          { format: 'jpg', src: '/pickadummy/index.php?imgsize=5760x5760&t=Lazy', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
        ]
      }).toJSON()

    };
  }
};

</script>
