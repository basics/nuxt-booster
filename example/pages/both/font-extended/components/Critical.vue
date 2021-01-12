<template>
  <organism-preview-container>
    <template #default>
      <article
        v-font="[
          $getFont('Comic Neue', 400, 'normal'),
          $getFont('Comic Neue', 700, 'normal', {selector: 'b, strong'}),
          $getFont('Comic Neue', 400, 'italic', {selector: 'i, em'})
        ]"
        v-html="content"
      />
    </template>
    <template #title>
      <p>Critical<br>Font extended usage</p>
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
      content: '<p>This is a <strong>RichText</strong> with different <i>font variants</i>.</p>'
    }
  }
}
</script>
