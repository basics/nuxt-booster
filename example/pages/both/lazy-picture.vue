<template>
  <div>
    <organism-preview-container critical>
      <template>
        <lazy-picture v-bind="criticalPicture" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyPicture<br>Source Switch by >768px</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template>
        <lazy-picture v-bind="lazyPicture" />
      </template>
      <template v-slot:title>
        <p>LazyPicture<br>Source Switch by >768px</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import LazyPicture from 'nuxt-speedkit/lib/components/LazyPicture'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismPreviewContainer,
    LazyPicture
  },
  data () {
    const criticalImageWebp = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const criticalImageJpeg = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const lazyImageWebp = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyImageJpeg = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')

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
        placeholder: criticalImageJpeg.placeholder,
        width: criticalImageJpeg.width,
        height: criticalImageJpeg.height,
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null
      },
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
