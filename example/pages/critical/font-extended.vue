<template>
  <div>
    <organism-preview-container>
      <template #default>
        <article
          v-font="[
            $fonts.getFont('Comic Neue', 400, 'normal'),
            $fonts.getFont('Comic Neue', 700, 'normal', {selector: 'b, strong'}),
            $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i, em'})
          ]"
          v-html="contentA"
        />
      </template>
      <template #title>
        <p>Critical<br>Font extended usage</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: { OrganismPreviewContainer },
  data () {
    return {
      contentA: '<p>This is a <strong>Rich</strong><b>Text</b> with different <i>font</i> <em>variants</em>.</p>'
    }
  }
}
</script>
