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
            srcset: [
              'https://placeimg.com/300/200?detail-a-1',
              'https://placeimg.com/600/400?detail-a-1'
            ],
            media: '(min-width: 600px)'
          },
          {
            srcset: [
              'https://placeimg.com/200/300?detail-a-2',
              'https://placeimg.com/400/600?detail-a-2'
            ]
          }
        ]
      },
      pictureB: {
        alt: 'Alt Text',
        title: 'Title Text',
        sources: [
          {
            srcset: [
              'https://placeimg.com/300/200?detail-b-1',
              'https://placeimg.com/600/400/?detail-b-1'
            ],
            media: '(min-width: 600px)'
          },
          {
            srcset: [
              'https://placeimg.com/200/300?detail-b-2',
              'https://placeimg.com/400/600?detail-b-2'
            ]
          }
        ]
      }
    }
  }
}
</script>
