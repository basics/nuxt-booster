<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <LazyImage v-bind="imageA" />
      </template>
      <template v-slot:title>
        <p>LazyImage - SRC</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      imageA: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        src: 'img/lazy-1080.jpg'
      }
    }
  }
}
</script>
