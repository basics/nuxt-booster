<template>
  <div>
    <organism-preview-container critical>
      <template v-slot:default>
        <lazy-image v-bind="criticalImage" />
      </template>
      <template v-slot:title>
        <p>
          Critical<br>LazyImage - SRCSET<br>Image Switch by >480 &amp; >768px
        </p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import LazyImage from 'nuxt-speedkit/components/LazyImage'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    LazyImage,
    OrganismPreviewContainer
  },
  data () {
    const criticalImage = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')

    return {
      criticalImage: {
        srcset: criticalImage.srcSet,
        placeholder: criticalImage.placeholder,
        width: criticalImage.width,
        height: criticalImage.height,
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null
      }
    }
  }
}
</script>
