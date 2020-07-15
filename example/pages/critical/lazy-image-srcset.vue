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
    // console.log(require('@/assets/img/critical-2400.jpg?resize&sizes[]=2400,sizes[]=1536,sizes[]=1200,sizes[]=1080,sizes[]=960,sizes[]=768,sizes[]=480&format=webp&placeholder'))
    return {
      imageA: {
        caption: null,
        alt: 'Alt Text',
        title: 'Title Text',
        srcset: [
          {
            url: require('@/assets/img/critical-2400.jpg?webp'),
            width: 2400
          },
          {
            url: require('@/assets/img/critical-1536.jpg?webp'),
            width: 1536
          },
          {
            url: require('@/assets/img/critical-1200.jpg?webp'),
            width: 1200
          },
          {
            url: require('@/assets/img/critical-1080.jpg?webp'),
            width: 1080
          },
          {
            url: require('@/assets/img/critical-960.jpg?webp'),
            width: 960
          },
          {
            url: require('@/assets/img/critical-768.jpg?webp'),
            width: 768
          },
          {
            url: require('@/assets/img/critical-480.jpg?webp'),
            width: 480
          }
        ],
        src: require('@/assets/img/critical-480.jpg?sqip')
      }
    }
  }
}
</script>
