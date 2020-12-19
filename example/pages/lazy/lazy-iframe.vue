<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template #default>
        <lazy-youtube />
      </template>
      <template #title>
        <p>LazyIframe</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import LazyYoutube from 'nuxt-speedkit/components/LazyYoutube'
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismSpacer,
    OrganismPreviewContainer,
    LazyYoutube
  },
  data () {
    return {

    }
  }
}
</script>
