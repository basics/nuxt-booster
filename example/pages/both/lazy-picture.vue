<template>
  <div>
    <organism-preview-container critical>
      <template>
        <LazyPicture v-bind="pictureA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyPicture<br>Source Switch by >768px</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template>
        <LazyPicture v-bind="pictureB" />
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
              url: 'img/critical-1200.webp'
            }, {
              url: 'img/critical-2400.webp',
              density: 2
            }],
            media: '(min-width: 768px)',
            type: 'image/webp'
          },
          {
            srcset: [{
              url: 'img/critical-1200.jpg'
            }, {
              url: 'img/critical-2400.jpg',
              density: 2
            }],
            media: '(min-width: 768px)',
            type: 'image/jpeg'
          },
          {
            srcset: [{
              url: 'img/critical-768.webp'
            }, {
              url: 'img/critical-1536.webp',
              density: 2
            }],
            type: 'image/webp'
          },
          {
            srcset: [{
              url: 'img/critical-768.jpg'
            }, {
              url: 'img/critical-1536.jpg',
              density: 2
            }],
            type: 'image/jpeg'
          }
        ]
      },
      pictureB: {
        alt: 'Alt Text',
        title: 'Title Text',
        sources: [
          {
            srcset: [{
              url: 'img/lazy-1200.webp'
            }, {
              url: 'img/lazy-2400.webp',
              density: 2
            }],
            media: '(min-width: 768px)',
            type: 'image/webp'
          },
          {
            srcset: [{
              url: 'img/lazy-1200.jpg'
            }, {
              url: 'img/lazy-2400.jpg',
              density: 2
            }],
            media: '(min-width: 768px)',
            type: 'image/jpeg'
          },
          {
            srcset: [{
              url: 'img/lazy-768.webp'
            }, {
              url: 'img/lazy-1536.webp',
              density: 2
            }],
            type: 'image/webp'
          },
          {
            srcset: [{
              url: 'img/lazy-768.jpg'
            }, {
              url: 'img/lazy-1536.jpg',
              density: 2
            }],
            type: 'image/jpeg'
          }
        ]
      }
    }
  }
}
</script>
