<template>
  <div>
    <organism-spacer />
    <speedkit mode="visible">
      <organism-preview-container>
        <template>
          <lazy-image v-bind="lazyImage" />
        </template>
        <template v-slot:title>
          <p>LazyImage - SRCSET<br>Image Switch by >768px</p>
        </template>
      </organism-preview-container>
    </speedkit>
  </div>
</template>

<script>
import Speedkit from 'nuxt-speedkit/abstracts/Speedkit'
import LazyImage from 'nuxt-speedkit/components/LazyImage'
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    Speedkit,
    OrganismSpacer,
    OrganismPreviewContainer,
    LazyImage
  },
  data () {
    const lazyImage = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')

    return {
      lazyImage: {
        srcset: lazyImage.srcSet,
        placeholder: lazyImage.placeholder,
        width: lazyImage.width,
        height: lazyImage.height,
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null
      }
    }
  }
}
</script>
