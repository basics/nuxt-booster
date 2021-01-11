<template>
  <organism-preview-container id="criticalContainer" :data-preload-srcset="criticalImage.srcset">
    <template #default>
      <speedkit-image v-bind="criticalImage" />
    </template>
    <template #title>
      <p>Critical - SpeedkitImage</p>
    </template>
  </organism-preview-container>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
import SpeedkitImage from 'nuxt-speedkit-components/SpeedkitImage'
export default {
  components: {
    OrganismPreviewContainer,
    SpeedkitImage
  },

  data () {
    const criticalImage = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const criticalPlaceholder = require('@/assets/img/critical-2400.jpg?sqip')

    return {
      criticalImage: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(criticalPlaceholder),
        srcset: criticalImage.srcSet,
        width: criticalImage.width,
        height: criticalImage.height
      }
    }
  }
}
</script>
