<template>
  <div>
    <organism-image-text :image="imageA" :critical="Boolean(true)" />
  </div>
</template>

<script>

import OrganismImageText from '@/components/organisms/ImageText'

export default {
  components: {
    OrganismImageText
  },

  data () {
    return {
      imageA: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        srcset: [
          {
            url: '/img/critical-2400.webp',
            width: 2400
          },
          {
            url: '/img/critical-1536.webp',
            width: 1536
          },
          {
            url: '/img/critical-1200.webp',
            width: 1200
          },
          {
            url: '/img/critical-1080.webp',
            width: 1080
          },
          {
            url: '/img/critical-960.webp',
            width: 960
          },
          {
            url: '/img/critical-768.webp',
            width: 768
          },
          {
            url: require('@/assets/img/critical-480.webp'),
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

// deepblue
// sinnerschrader
// interone
