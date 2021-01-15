<template>
  <organism-preview-container>
    <template #default>
      <speedkit-image v-bind="lazyImage" />
    </template>
    <template #title>
      <p>SpeedkitImage - SRCSET<br>Image Switch by >768px</p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitImage from 'nuxt-speedkit-components/SpeedkitImage';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
export default {
  components: {
    OrganismPreviewContainer,
    SpeedkitImage
  },
  data () {
    const lazyImage = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp');
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?sqip');

    return {
      lazyImage: {
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null,
        placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(lazyPlaceholder),
        srcset: lazyImage.srcSet,
        width: lazyImage.width,
        height: lazyImage.height
      }
    };
  }
};
</script>
