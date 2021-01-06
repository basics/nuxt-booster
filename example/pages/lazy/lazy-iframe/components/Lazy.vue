<template>
  <organism-preview-container>
    <template #default>
      <div>
        <lazy-youtube v-bind="iframe" />
      </div>
    </template>
    <template #title>
      <p>LazyIframe</p>
    </template>
  </organism-preview-container>
</template>

<script>
import LazyYoutube from 'nuxt-speedkit-components/LazyYoutube'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    LazyYoutube,
    OrganismPreviewContainer
  },
  data () {
    return {
      iframe: {
        id: 'cLKvbhfVBUU',
        poster: Object.assign({
          alt: 'Alt Text',
          title: 'Title Text',
          caption: null
        }, require('@/assets/youtube/id/cLKvbhfVBUU'))
      }
    }
  }
}
</script>
