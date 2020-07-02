<template>
  <div>
    <organism-preview-container critical>
      <template>
        <LazyImage v-bind="imageA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyImage - SRCSET<br>Image Switch by >768px</p>
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
        srcset: [
          {
            url: 'https://dummyimage.com/768x768/eeeeee/000000.jpg?text=C',
            width: 768
          },
          {
            url: 'https://dummyimage.com/1200x1200/eeeeee/000000.jpg?text=C',
            width: 2400
          }
        ]
      }
    }
  }
}
</script>
