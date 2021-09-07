<template>
  <main>
    <!-- <default-picture :sources="picture" :loading-spinner="loadingSpinner" :critical="true" /> -->
    <!-- <default-youtube url="https://www.youtube.com/watch?v=c2cxzy-Dar4" :loading-spinner="loadingSpinner" />
    <default-vimeo url="https://vimeo.com/381669797" :loading-spinner="loadingSpinner" /> -->
    <!-- <default-image :source="image" :loading-spinner="loadingSpinner" :critical="true" /> -->
    <div v-for="(picture, index) in pictures" :key="index">
      <default-picture :sources="picture" :loading-spinner="loadingSpinner" :critical="true" />
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </Div>
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
    // DefaultVimeo: () => import('nuxt-speedkit/components/iframe/mutation/vimeo'),
    // DefaultYoutube: () => import('nuxt-speedkit/components/iframe/mutation/youtube'),
    DefaultPicture: () => import('nuxt-speedkit/components/picture')
    // DefaultImage: () => import('nuxt-speedkit/components/image')
  },
  data () {
    const count = 2;
    return {
      loadingSpinner: new LoadingSpinner({
        dataUri: require('@/assets/spinner/three-circles.svg').default,
        size: '100px',
        backgroundColor: 'grey'
      }),

      pictures: Array(count).fill({}).map((value, index) => {
        const background = Array(3).fill(Math.round((255 / count * index)).toString(16)).join('');
        const color = Array(3).fill(Math.round(255 - (255 / count * index)).toString(16)).join('');
        return new ImageSourceList([
          new ImageSource({ src: `/dummyimage/4096x2304/${color}/${background}.jpg`, sizes: { sm: '100vw', md: '100vw' }, media: '(min-width: 768px)' }),
          new ImageSource({ src: `/dummyimage/2304x4096/${color}/${background}.jpg`, sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: 'all' })
        ], { retina: true });
      }),

      image: new ImageSource({ src: '/picsum/id/236/4096/2304.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' })
    };
  }
};

// asasdasdasdasdasds
</script>
