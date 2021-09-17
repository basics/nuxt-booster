<template>
  <div>
    <default-picture v-bind="picture" critical />
  </div>
</template>

<script>
import DefaultPicture from 'nuxt-speedkit/components/Picture';
import ImageSourceList from 'nuxt-speedkit/components/Picture/classes/ImageSourceList';
import ImageSource from 'nuxt-speedkit/components/Image/classes/ImageSource';
export default {
  components: { DefaultPicture },

  data () {
    return {
      picture: {
        title: 'Stage',
        sources: new ImageSourceList([
          // eslint-disable-next-line no-secrets/no-secrets
          new ImageSource({ src: '/pickadummy/index.php?imgsize=5760x3240&t=Landscape', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' }),
          // eslint-disable-next-line no-secrets/no-secrets
          new ImageSource({ src: '/pickadummy/index.php?imgsize=3240x5760&t=Portrait', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: portrait)' })
        ])
      }

    };
  }
};
</script>
