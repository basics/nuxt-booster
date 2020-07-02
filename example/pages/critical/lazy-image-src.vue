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
        src: 'img/critical-1080.jpg'
      }
    }
  }
}
</script>
