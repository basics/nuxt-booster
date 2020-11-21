<template>
  <div>
    <organism-preview-container>
      <template>
        <lazy-youtube />
      </template>
      <template v-slot:title>
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
    OrganismPreviewContainer,
    LazyYoutube
  },
  data () {
    return {

    }
  }
}
</script>
