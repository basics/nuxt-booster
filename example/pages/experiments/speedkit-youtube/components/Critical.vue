<template>
  <organism-preview-container>
    <template #default>
      <div>
        <speedkit-youtube v-bind="iframe" />
      </div>
    </template>
    <template #title>
      <p>Critical<br>SpeedkitYoutube</p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitYoutube from 'nuxt-speedkit-components/experiments/SpeedkitYoutube'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    SpeedkitYoutube,
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
