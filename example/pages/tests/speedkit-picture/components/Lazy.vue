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
import SpeedkitPicture from 'nuxt-speedkit-components/SpeedkitPicture';

export default {

  components: {
    OrganismPreviewContainer,
    SpeedkitPicture
  },

  data () {
    return {

      picture: {
        placeholders: [
          { url: '/img/image-test-2/placeholder.jpg' }
        ],
        sources: [
          {
            format: 'webp',
            sizes: [
              { width: 414, url: '/img/image-test-2/webp/414.webp', format: 'webp' },
              { width: 576, media: '(min-width: 576px)', url: '/img/image-test-2/webp/576.webp', format: 'webp' },
              { width: 768, media: '(min-width: 768px)', url: '/img/image-test-2/webp/768.webp', format: 'webp' },
              { width: 1024, media: '(min-width: 1024px)', url: '/img/image-test-2/webp/1024.webp', format: 'webp' },
              { width: 1280, media: '(min-width: 1200px)', url: '/img/image-test-2/webp/1280.webp', format: 'webp' },
              { width: 1680, media: '(min-width: 1600px)', url: '/img/image-test-2/webp/1680.webp', format: 'webp' },
              { width: 1920, media: '(min-width: 1900)', url: '/img/image-test-2/webp/1920.webp', format: 'webp' }
            ]
          },
          {
            format: 'jpg',
            sizes: [
              { width: 414, url: '/img/image-test-2/jpg/414.jpg', format: 'jpg' },
              { width: 576, media: '(min-width: 576px)', url: '/img/image-test-2/jpg/576.jpg', format: 'jpg' },
              { width: 768, media: '(min-width: 768px)', url: '/img/image-test-2/jpg/768.jpg', format: 'jpg' },
              { width: 1024, media: '(min-width: 1024px)', url: '/img/image-test-2/jpg/1024.jpg', format: 'jpg' },
              { width: 1280, media: '(min-width: 1200px)', url: '/img/image-test-2/jpg/1280.jpg', format: 'jpg' },
              { width: 1680, media: '(min-width: 1600px)', url: '/img/image-test-2/jpg/1680.jpg', format: 'jpg' },
              { width: 1920, media: '(min-width: 1900)', url: '/img/image-test-2/jpg/1920.jpg', format: 'jpg' }
            ]
          }
        ]
      }

    };
  }
};

</script>
