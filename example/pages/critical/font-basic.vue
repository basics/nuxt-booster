<template>
  <div>
    <organism-preview-container>
      <template #default>
        <article v-font="$fonts.getFont('Comic Neue', 700, 'normal')" v-html="contentA" />
      </template>
      <template #title>
        <p>Critical<br>Font basic usage</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismPreviewContainer
  },
  data () {
    return {
      contentA: '<p>This is a basic test with single font variant.</p>'
    }
  }
}
</script>
