<template>
  <div>
    <organism-spacer />
    <speedkit mode="visible">
      <organism-preview-container>
        <template>
          <lazy-iframe v-bind="iframeA" />
        </template>
        <template v-slot:title>
          <p>LazyIframe</p>
        </template>
      </organism-preview-container>
    </speedkit>
  </div>
</template>

<script>
import Speedkit from 'nuxt-speedkit/abstracts/Speedkit'
import LazyIframe from 'nuxt-speedkit/components/LazyIframe'
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    Speedkit,
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
