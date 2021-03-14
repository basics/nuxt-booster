<template>
  <organism-preview-container id="lazyContainer">
    <template #default>
      <speedkit-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Lazy - SpeedkitPicture</p>
    </template>
  </organism-preview-container>
</template>

<script>

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';

export default {

  components: {
    OrganismPreviewContainer,
    SpeedkitPicture
  },

  data () {
    return {

      picture: {
        placeholders: [
          { url: require('static/img/image-test-2/placeholder.jpg') }
        ],
        sources: [
          {
            format: 'webp',
            sizes: [
              { width: 414, url: require('static/img/image-test-2/webp/414.webp') },
              { width: 576, media: '(min-width: 576px)', url: require('static/img/image-test-2/webp/576.webp') },
              { width: 768, media: '(min-width: 768px)', url: require('static/img/image-test-2/webp/768.webp') },
              { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-test-2/webp/1024.webp') },
              { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-test-2/webp/1280.webp') },
              { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-test-2/webp/1680.webp') },
              { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-test-2/webp/1920.webp') }
            ]
          },
          {
            format: 'jpg',
            sizes: [
              { width: 414, url: require('static/img/image-test-2/jpg/414.jpg') },
              { width: 576, media: '(min-width: 576px)', url: require('static/img/image-test-2/jpg/576.jpg') },
              { width: 768, media: '(min-width: 768px)', url: require('static/img/image-test-2/jpg/768.jpg') },
              { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-test-2/jpg/1024.jpg') },
              { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-test-2/jpg/1280.jpg') },
              { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-test-2/jpg/1680.jpg') },
              { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-test-2/jpg/1920.jpg') }
            ]
          }
        ]
      }

    };
  }
};

</script>
