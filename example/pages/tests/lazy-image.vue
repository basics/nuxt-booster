<template>
  <div>
    <organism-preview-container id="criticalContainer" critical>
      <template>
        <lazy-image v-bind="criticalImage" />
      </template>
      <template v-slot:title>
        <p>Critical - LazyImage</p>
      </template>
    </organism-preview-container>
    <organism-preview-container id="lazyContainer">
      <template>
        <lazy-image v-bind="lazyImage" />
      </template>
      <template v-slot:title>
        <p>Lazy - LazyImage</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
import LazyImage from 'nuxt-speedkit/components/LazyImage'
export default {
  components: {
    OrganismPreviewContainer,
    LazyImage
  },
  data () {
    const criticalImage = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const criticalPlaceholder = require('@/assets/img/critical-2400.jpg?sqip')
    const lazyImage = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?sqip')

    return {
      criticalImage: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        placeholder: criticalPlaceholder.preview,
        srcset: criticalImage.srcSet,
        width: criticalImage.width,
        height: criticalImage.height
      },
      lazyImage: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        placeholder: lazyPlaceholder.preview,
        srcset: lazyImage.srcSet,
        width: lazyImage.width,
        height: lazyImage.height
      }
    }
  }
}
</script>
