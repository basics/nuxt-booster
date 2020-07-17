<template>
  <div>
    <organism-image-text :image="image" :critical="Boolean(true)" />
  </div>
</template>

<script>

import OrganismImageText from '@/components/organisms/ImageText'

export default {
  components: {
    OrganismImageText
  },

  data () {
    const image = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')

    return {
      image: {
        srcset: image.srcSet,
        placeholder: image.placeholder,
        width: image.width,
        height: image.height,
        alt: 'Alt Text',
        title: 'Title Text',
        caption: null
      }
    }
  }
}
</script>
