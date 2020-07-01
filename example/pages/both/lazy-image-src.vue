<template>
  <div>
    <organism-preview-container critical>
      <template>
        <LazyImage v-bind="imageA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyImage - SRC</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template>
        <LazyImage v-bind="imageB" />
      </template>
      <template v-slot:title>
        <p>LazyImage - SRC</p>
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
        alt: 'Alt Text',
        title: 'Title Text',
        src: 'https://dummyimage.com/1080x1080/eeeeee/000000.jpg?text=C'
      },
      imageB: {
        alt: 'Alt Text',
        title: 'Title Text',
        src: 'https://dummyimage.com/1080x1080/eeeeee/000000.jpg?text=L'
      }
    }
  }
}
</script>
