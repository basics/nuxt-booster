<template>
  <div>
    <organism-preview-container id="criticalContainer" critical>
      <template>
        <LazyImage v-bind="criticalImage" />
      </template>
      <template v-slot:title>
        <p>Critical - LazyImage</p>
      </template>
    </organism-preview-container>
    <organism-preview-container id="lazyContainer">
      <template>
        <LazyImage v-bind="lazyImage" />
      </template>
      <template v-slot:title>
        <p>Lazy - LazyImage</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
export default {
  data () {
    const criticalImage = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyImage = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')

    return {
      criticalImage: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        srcset: criticalImage.srcSet
      },
      lazyImage: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        srcset: lazyImage.srcSet
      }
    }
  }
}
</script>
