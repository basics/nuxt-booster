<template>
  <div>
    <div><organism-test-a :picture="pictureA" src="https://placeimg.com/200/300?detail-a" /></div>
    <div><organism-test-b :picture="pictureB" src="https://placeimg.com/400/300?detail-b" /></div>
    <nuxt-link to="/">
      Index
    </nuxt-link>
  </div>
</template>

<script>
import OrganismTestA from '@/components/organisms/TestA'
import OrganismTestB from '@/components/organisms/TestB'

export default {
  components: {
    OrganismTestA,
    OrganismTestB
  },
  data () {
    return {
      pictureA: {
        alt: 'Alt Text',
        title: 'Title Text',
        sources: [
          {
            srcset: [{
              url: 'https://placeimg.com/300/200?index-a-1',
              density: 1
            }, {
              url: 'https://placeimg.com/600/400?index-a-1',
              density: 2
            }],
            media: '(min-width: 600px)',
            type: 'image/jpeg'
          },
          {
            srcset: [{
              url: 'https://placeimg.com/300/200?index-a-2',
              density: 1
            }, {
              url: 'https://placeimg.com/600/400?index-a-2',
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
              url: 'https://placeimg.com/300/200?index-b-1',
              density: 1
            }, {
              url: 'https://placeimg.com/600/400?index-b-1',
              density: 2
            }],
            media: '(min-width: 600px)',
            type: 'image/jpeg'
          },
          {
            srcset: [{
              url: 'https://placeimg.com/300/200?index-b-2',
              density: 1
            }, {
              url: 'https://placeimg.com/600/400?index-b-2',
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
