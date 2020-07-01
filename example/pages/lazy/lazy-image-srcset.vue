<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <LazyImage v-bind="imageA" />
      </template>
      <template v-slot:title>
        <p>LazyImage - SRCSET<br>Image Switch by >768px</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  layout: 'detail',
  data () {
    return {
      imageA: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        srcset: [
          {
            url: 'https://placeimg.com/768/768?index-a-1',
            width: 768
          },
          {
            url: 'https://placeimg.com/1200/1200?index-a-2',
            width: 2400
          }
        ]
      }
    }
  }
}
</script>
