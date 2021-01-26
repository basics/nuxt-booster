<template>
  <organism-preview-container id="criticalContainer">
    <!-- :data-preload-srcset="criticalPicture.sources[0].srcset" -->
    <template #default>
      <speedkit-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Critical - SpeedkitPicture</p>
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
        sources: [
          {
            media: '',
            placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
              url: 'data:image/jpeg;base64,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'
            },
            sizes: [
              { width: 414, media: '', url: '/img/image-test-1/jpg/414.jpg', format: 'jpg' },
              { width: 576, media: '(min-width: 576px)', url: '/img/image-test-1/jpg/576.jpg', format: 'jpg' },
              { width: 768, media: '(min-width: 768px)', url: '/img/image-test-1/jpg/768.jpg', format: 'jpg' },
              { width: 1024, media: '(min-width: 1024px)', url: '/img/image-test-1/jpg/1024.jpg', format: 'jpg' },
              { width: 1280, media: '(min-width: 1200px)', url: '/img/image-test-1/jpg/1280.jpg', format: 'jpg' },
              { width: 1680, media: '(min-width: 1600px)', url: '/img/image-test-1/jpg/1680.jpg', format: 'jpg' },
              { width: 1920, media: '(min-width: 1900)', url: '/img/image-test-1/jpg/1920.jpg', format: 'jpg' },

              { width: 414, media: '', url: '/img/image-test-1/webp/414.webp', format: 'webp' },
              { width: 576, media: '(min-width: 576px)', url: '/img/image-test-1/webp/576.webp', format: 'webp' },
              { width: 768, media: '(min-width: 768px)', url: '/img/image-test-1/webp/768.webp', format: 'webp' },
              { width: 1024, media: '(min-width: 1024px)', url: '/img/image-test-1/webp/1024.webp', format: 'webp' },
              { width: 1280, media: '(min-width: 1200px)', url: '/img/image-test-1/webp/1280.webp', format: 'webp' },
              { width: 1680, media: '(min-width: 1600px)', url: '/img/image-test-1/webp/1680.webp', format: 'webp' },
              { width: 1920, media: '(min-width: 1900)', url: '/img/image-test-1/webp/1920.webp', format: 'webp' }
            ]
          }
        ]
      }

    };
  }
};

</script>
