<template>
  <div>
    <organism-preview-container>
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
  data () {
    return {
      imageA: {
        alt: 'Alt Text',
        title: 'Title Text',
        src: 'img/critical-1080.jpg'
      },
      imageB: {
        alt: 'Alt Text',
        title: 'Title Text',
        src: 'img/lazy-1080.jpg'
      }
    }
  }
}
</script>
