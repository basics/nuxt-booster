<template>
  <main>
    <default-picture :sources="pictureA" :loading-spinner="loadingSpinner" :critical="true" />
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <default-picture :sources="pictureB" :loading-spinner="loadingSpinner" :critical="true" />
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <default-picture :sources="pictureC" :loading-spinner="loadingSpinner" :critical="true" />
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <span
      v-font="[
        $getFont('Montserrat Alternates', 700, 'normal')
      ]"
    >Test</span>
  </main>
</template>

<script>
import LoadingSpinner from 'nuxt-speedkit/components/image/classes/LoadingSpinner';
import ImageSource from 'nuxt-speedkit/components/image/classes/ImageSource';
import ImageSourceList from 'nuxt-speedkit/components/picture/classes/ImageSourceList';

export default {
  speedkitComponents: {
    DefaultPicture: () => import('nuxt-speedkit/components/picture')
  },
  data () {
    return {
      loadingSpinner: new LoadingSpinner({
        dataUri: require('@/assets/spinner/three-circles.svg').default,
        size: '100px',
        backgroundColor: 'grey'
      }),

      pictureA: new ImageSourceList([
        new ImageSource({ src: '/picsum/id/1069/3500/2333.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
        new ImageSource({ src: '/picsum/id/1069/2333/3500.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: 'all' })
      ], { retina: true }),
      pictureB: new ImageSourceList([
        new ImageSource({ src: '/picsum/id/1072/3872/2592.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
        new ImageSource({ src: '/picsum/id/1072/2592/3872.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: 'all' })
      ], { retina: true }),
      pictureC: new ImageSourceList([
        new ImageSource({ src: '/picsum/id/1069/3500/2333.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
        new ImageSource({ src: '/picsum/id/1080/2333/3500.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: 'all' })
      ], { retina: true }),

      image: new ImageSource({ src: '/picsum/id/236/4096/2304.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' })
    };
  }
};
</script>
