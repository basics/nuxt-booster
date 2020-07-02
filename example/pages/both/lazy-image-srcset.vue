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
    <organism-preview-container>
      <template>
        <LazyImage v-bind="imageB" />
      </template>
      <template v-slot:title>
        <p>LazyImage - SRCSET<br>Image Switch by >768px</p>
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
            url: 'img/critical-768.jpg',
            width: 768
          },
          {
            url: 'img/critical-1200.jpg',
            width: 2400
          }
        ]
      },
      imageB: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        srcset: [
          {
            url: 'img/lazy-768.jpg',
            width: 768
          },
          {
            url: 'img/lazy-1200.jpg',
            width: 2400
          }
        ]
      }
    }
  }
}
</script>
