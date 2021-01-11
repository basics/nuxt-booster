<template>
  <organism-preview-container id="criticalContainer" :data-preload-srcset="criticalPicture.sources[0].srcset">
    <template #default>
      <speedkit-picture v-bind="criticalPicture" />
    </template>
    <template #title>
      <p>Critical - SpeedkitPicture</p>
    </template>
  </organism-preview-container>
</template>

<script>

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
import SpeedkitPicture from 'nuxt-speedkit-components/SpeedkitPicture'

export default {

  components: {
    OrganismPreviewContainer,
    SpeedkitPicture
  },

  data () {
    const criticalImageWebp = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const criticalImageJpeg = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const criticalPlaceholder = require('@/assets/img/critical-2400.jpg?sqip')

    return {
      criticalPicture: {
        sources: [
          {
            srcset: criticalImageWebp.srcSet,
            type: 'image/webp'
          },
          {
            srcset: criticalImageJpeg.srcSet,
            type: 'image/jpeg'
          }
        ],
        placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(criticalPlaceholder),
        width: criticalImageJpeg.width,
        height: criticalImageJpeg.height,
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null
      }
    }
  }
}

</script>
