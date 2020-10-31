<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <lazy-iframe v-bind="iframeA" />
      </template>
      <template v-slot:title>
        <p>LazyIframe</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import LazyIframe from 'nuxt-speedkit/lib/components/LazyIframe'
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismSpacer,
    OrganismPreviewContainer,
    LazyIframe
  },
  data () {
    return {
      iframeA: {
        src: 'https://grabarzundpartner.de'
      }
    }
  }
}
</script>
