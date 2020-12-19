<template>
  <div>
    <organism-preview-container id="lazyContainer" :data-preload-srcset="lazyPicture.sources[0].srcset">
      <template>
        <lazy-picture v-bind="lazyPicture" />
      </template>
      <template v-slot:title>
        <p>Lazy - LazyPicture</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
import LazyPicture from 'nuxt-speedkit/components/LazyPicture'

export default {

  components: {
    OrganismPreviewContainer,
    LazyPicture
  },

  data () {
    const lazyImageWebp = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyImageJpeg = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?sqip')

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
        placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(lazyPlaceholder),
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
