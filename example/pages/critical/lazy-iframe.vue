<template>
  <div>
    <organism-preview-container critical>
      <template #default>
        <lazy-youtube />
      </template>
      <template #title>
        <p>Critical<br>LazyIframe</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import LazyYoutube from 'nuxt-speedkit/components/LazyYoutube'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    LazyYoutube,
    OrganismPreviewContainer
  },
  data () {
    return {

    }
  }
}
</script>
