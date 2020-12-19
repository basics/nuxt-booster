<template>
  <div>
    <organism-spacer />
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
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismSpacer,
    OrganismPreviewContainer,
    LazyImage
  },
  data () {
    const lazyImage = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?sqip')

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
    }
  }
}
</script>
