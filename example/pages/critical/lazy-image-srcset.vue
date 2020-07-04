<template>
  <div critical="true">
    <organism-preview-container critical="true">
      <template>
        <LazyImage v-bind="imageA" />
      </template>
      <template v-slot:title>
        <p critical="true">
          Critical<br>LazyImage - SRCSET<br>Image Switch by >480 &amp; >768px
        </p>
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
            url: 'img/critical-2400.webp',
            width: 2400
          },
          {
            url: 'img/critical-1536.webp',
            width: 1536
          },
          {
            url: 'img/critical-1200.webp',
            width: 1200
          },
          {
            url: 'img/critical-1080.webp',
            width: 1080
          },
          {
            url: '/img/critical-960.webp',
            width: 960
          },
          {
            url: 'img/critical-768.webp',
            width: 768
          },
          {
            url: '/img/critical-480.webp',
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
