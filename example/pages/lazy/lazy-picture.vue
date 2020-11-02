<template>
  <div>
    <organism-spacer />
    <speedkit mode="visible">
      <organism-preview-container>
        <template>
          <lazy-picture v-bind="lazyPicture" />
        </template>
        <template v-slot:title>
          <p>LazyPicture<br>Source Switch by >768px</p>
        </template>
      </organism-preview-container>
    </speedkit>
  </div>
</template>

<script>
import Speedkit from 'nuxt-speedkit/abstracts/Speedkit'
import LazyPicture from 'nuxt-speedkit/components/LazyPicture'
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    Speedkit,
    LazyPicture,
    OrganismSpacer,
    OrganismPreviewContainer
  },
  data () {
    const lazyImageWebp = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyImageJpeg = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    return {
      lazyPicture: {
        sources: [
          {
            srcset: lazyImageWebp.srcSet,
            type: 'image/webp'
          },
          {
            srcset: lazyImageJpeg.srcSet,
            type: 'image/jpeg'
          }
        ],
        placeholder: lazyImageJpeg.placeholder,
        width: lazyImageJpeg.width,
        height: lazyImageJpeg.height,
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null
      }
    }
  }
}
</script>
