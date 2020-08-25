<template>
  <div>
    <organism-preview-container critical>
      <template>
        <LazyPicture v-bind="criticalPicture" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyPicture<br>Source Switch by >768px</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  data () {
    const criticalImageWebp = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const criticalImageJpeg = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
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
      }
    }
  }
}
</script>
