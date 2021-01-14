<template>
  <organism-preview-container>
    <template #default>
      <article
        v-font="[
          $getFont('Montserrat Alternates', 400, 'normal'),
          $getFont('Montserrat Alternates', 700, 'normal', {selector: 'b, strong'}),
          $getFont('Montserrat Alternates', 400, 'italic', {selector: 'i, em'})
        ]"
        v-html="content"
      />
    </template>
    <template #title>
      <p>Font extended usage</p>
    </template>
  </organism-preview-container>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
export default {
  components: {
    OrganismPreviewContainer
  },
  data () {
    return {
      content: '<p>This is a <strong>RichText</strong> with different <i>font variants</i>.</p>'
    };
  }
};
</script>
