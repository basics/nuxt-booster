<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <LazyPicture v-bind="pictureA" />
      </template>
      <template v-slot:title>
        <p>LazyPicture<br>Source Switch by >768px</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      pictureA: {
        alt: 'Alt Text',
        title: 'Title Text',
        sources: [
          {
            srcset: [{
              url: 'https://dummyimage.com/1200x1200/eeeeee/000000.jpg'
            }, {
              url: 'https://dummyimage.com/2400x2400/eeeeee/000000.jpg',
              density: 2
            }],
            media: '(min-width: 768px)'
          },
          {
            srcset: [{
              url: 'https://dummyimage.com/768x768/eeeeee/000000.jpg'
            }, {
              url: 'https://dummyimage.com/1536x1536/eeeeee/000000.jpg',
              density: 2
            }]
          }
        ]
      }
    }
  }
}
</script>
