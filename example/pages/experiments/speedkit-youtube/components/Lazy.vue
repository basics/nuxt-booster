<template>
  <organism-preview-container>
    <template #default>
      <div>
        <speedkit-youtube v-bind="iframe" />
      </div>
    </template>
    <template #title>
      <p>SpeedkitYoutube</p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitYoutube from 'nuxt-speedkit-components/SpeedkitYoutube'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    SpeedkitYoutube,
    OrganismPreviewContainer
  },
  data () {
    return {
      iframe: {
        id: 'VBafwg16xpU',
        poster: Object.assign({
          alt: 'Alt Text',
          title: 'Title Text',
          caption: null
        }, require('@/assets/youtube/id/VBafwg16xpU'))
      }
    }
  }
}
</script>
