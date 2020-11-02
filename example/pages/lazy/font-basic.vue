<template>
  <div>
    <organism-spacer />
    <speedkit mode="visible">
      <organism-preview-container>
        <template>
          <article v-font="$fonts.getFont('Montserrat Alternates', 700, 'normal')" v-html="contentA" />
        </template>
        <template v-slot:title>
          <p>Font basic usage</p>
        </template>
      </organism-preview-container>
    </speedkit>
  </div>
</template>

<script>
import Speedkit from 'nuxt-speedkit/abstracts/Speedkit'
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    Speedkit,
    OrganismSpacer,
    OrganismPreviewContainer
  },
  data () {
    return {
      contentA: '<p>This is a basic test with single font variant.</p>'
    }
  }
}
</script>
