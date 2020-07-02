<template>
  <div>
    <organism-preview-container critical>
      <template>
        <LazyImage v-bind="imageA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyImage - SRCSET<br>Image Switch by >480 &amp; >768px</p>
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
            url: 'img/critical-1200.jpg',
            width: 1200
          },
          {
            url: 'img/critical-768.jpg',
            width: 768
          },
          {
            url: 'img/critical-960.jpg',
            width: 960
          },
          {
            url: 'img/critical-480.jpg',
            width: 480
          }
        ]
        // sizes: [
        //   '(min-width: 768px) 1200px',
        //   '(min-width: 480px) 768px',
        //   '100vw'
        // ]
      }
    }
  }
}
</script>
