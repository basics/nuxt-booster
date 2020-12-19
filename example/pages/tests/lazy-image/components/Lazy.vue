<template>
  <div>
    <organism-preview-container id="lazyContainer" :data-preload-srcset="lazyImage.srcset">
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
    const lazyImage = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?sqip')

    return {
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
