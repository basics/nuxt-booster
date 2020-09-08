<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <article v-font="$fonts.getFont('Lobster Two', 700, 'normal')" v-html="contentA" />
      </template>
      <template v-slot:title>
        <p>Font basic usage</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import OrganismSpacer from '@/components/organisms/Spacer'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
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
