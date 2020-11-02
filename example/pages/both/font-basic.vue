<template>
  <div>
    <organism-preview-container>
      <template>
        <article v-font="$fonts.getFont('Comic Neue', 700, 'normal').isCritical()" v-html="contentA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>Font basic usage</p>
      </template>
    </organism-preview-container>
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
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    Speedkit,
    OrganismPreviewContainer
  },
  data () {
    return {
      contentA: '<p>This is a basic test with single font variant.</p>'
    }
  }
}
</script>
