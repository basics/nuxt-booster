<template>
  <div>
    <speedkit-picture v-bind="picture1" critical />
    <speedkit-picture v-bind="picture2" critical />
    <speedkit-image v-bind="image1" />
    <speedkit-image v-bind="image2" />
  </div>
</template>

<script>

import SpeedkitImage from 'nuxt-speedkit/components/SpeedkitImage';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';

export default {
  components: {
    SpeedkitImage,
    SpeedkitPicture
  },
  layout: 'blank',
  data () {
    return {
      image1: {
        source: { src: '/icon.png', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } },
        title: 'Image Title',
        alt: 'Image Alt'
      },
      image2: {
        source: { src: '/img/image-content-1-3840x2400.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } },
        title: 'Image Title',
        alt: 'Image Alt'
      },
      picture1: {
        sources: [
          { src: '/icon.png', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
        ],
        title: 'Picture Title',
        alt: 'Picture Alt'
      },
      picture2: {
        sources: [
          { src: '/img/image-content-1-3840x2400.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
        ],
        title: 'Picture Title',
        alt: 'Picture Alt'
      }
    };
  }
};

</script>
