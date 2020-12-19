<template>
  <div>
    <organism-preview-container critical>
      <template #default>
        <lazy-image v-bind="criticalImage" />
      </template>
      <template #title>
        <p>Critical<br>LazyImage - SRCSET<br>Image Switch by >768px</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template #default>
        <lazy-image v-bind="lazyImage" />
      </template>
      <template #title>
        <p>LazyImage - SRCSET<br>Image Switch by >768px</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import LazyImage from 'nuxt-speedkit/components/LazyImage'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {

  components: {
    OrganismPreviewContainer,
    LazyImage
  },

  asyncData () {
    const criticalImage = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const criticalPlaceholder = require('@/assets/img/critical-2400.jpg?sqip')
    const lazyImage = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?sqip')

    return {
      criticalImage: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(criticalPlaceholder),
        srcset: criticalImage.srcSet,
        width: criticalImage.width,
        height: criticalImage.height
      },
      lazyImage: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(lazyPlaceholder),
        srcset: lazyImage.srcSet,
        width: lazyImage.width,
        height: lazyImage.height
      }
    }
  }
}
</script>
