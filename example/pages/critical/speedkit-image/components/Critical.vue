<template>
  <organism-preview-container>
    <template #default>
      <speedkit-image v-bind="criticalImage" />
    </template>
    <template #title>
      <p>
        Critical<br>SpeedkitImage - SRCSET<br>Image Switch by >480 &amp; >768px
      </p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitImage from 'nuxt-speedkit-components/SpeedkitImage';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    SpeedkitImage,
    OrganismPreviewContainer
  },

  data () {
    const criticalImage = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp');
    const criticalPlaceholder = require('@/assets/img/critical-2400.jpg?sqip');

    return {
      criticalImage: {
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null,
        placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(criticalPlaceholder),
        srcset: criticalImage.srcSet,
        width: criticalImage.width,
        height: criticalImage.height
      }
    };
  }
};
</script>
