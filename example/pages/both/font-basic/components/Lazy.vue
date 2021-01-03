<template>
  <organism-preview-container>
    <template #default>
      <article v-font="$fonts.getFont('Montserrat Alternates', 700, 'normal')" v-html="content" />
    </template>
    <template #title>
      <p>Font basic usage</p>
    </template>
  </organism-preview-container>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismPreviewContainer
  },
  data () {
    return {
      content: '<p>This is a basic test with single font variant.</p>'
    }
  }
}
</script>
