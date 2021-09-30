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
import SourceList from 'nuxt-speedkit/components/Picture/classes/SourceList';
import Source from 'nuxt-speedkit/components/Image/classes/Source';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    DefaultPicture,
    OrganismPreviewContainer
  },

  data () {
    return {

      picture: {
        title: 'Stage',
        sources: new SourceList([
          // eslint-disable-next-line no-secrets/no-secrets
          new Source({ src: '/pickadummy/index.php?imgsize=5760x3240&t=Lazy', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
          // eslint-disable-next-line no-secrets/no-secrets
          new Source({ src: '/pickadummy/index.php?imgsize=5760x3240&t=Lazy', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(max-width: 767px)' })
        ])
      }

    };
  }
};

</script>
