<template>
  <main>
    <default-picture :sources="picture" :loading-spinner="loadingSpinner" :critical="true" />
    <default-youtube url="https://www.youtube.com/watch?v=c2cxzy-Dar4" :loading-spinner="loadingSpinner" />
    <default-vimeo url="https://vimeo.com/381669797" :loading-spinner="loadingSpinner" />
  </main>
</template>

<script>
import LoadingSpinner from 'nuxt-speedkit/components/image/classes/LoadingSpinner';
import ImageSource from 'nuxt-speedkit/components/image/classes/ImageSource';
import ImageSourceList from 'nuxt-speedkit/components/picture/classes/ImageSourceList';

export default {
  components: {
    DefaultVimeo: () => import('nuxt-speedkit/components/iframe/mutation/vimeo'),
    DefaultYoutube: () => import('nuxt-speedkit/components/iframe/mutation/youtube'),
    DefaultPicture: () => import('nuxt-speedkit/components/picture')
  },

  data () {
    return {
      loadingSpinner: new LoadingSpinner({
        dataUri: require('@/assets/spinner/three-circles.svg').default,
        size: '100px',
        backgroundColor: 'grey'
      }),
      picture: new ImageSourceList([
        new ImageSource({ src: '/picsum/id/234/4096/2304.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
        new ImageSource({ src: '/picsum/id/235/2304/4096.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: 'all' })

      ], { retina: true })
    };
  }
};
</script>
