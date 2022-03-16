<template>
  <organism-preview-container>
    <template #default>
      <scroll-container id="verticalScroll" v-bind="scrollContainer" />
    </template>
    <template #title>
      <p>Vertical Scroll - v-font</p>
    </template>
  </organism-preview-container>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
import ScrollContainer from '@/components/organisms/ScrollContainer';
export default {
  components: { OrganismPreviewContainer, ScrollContainer },
  data () {
    return {
      scrollContainer: {
        items: [
          { font: ['Montserrat Alternates', 300, 'normal'] },
          { font: ['Montserrat Alternates', 300, 'italic'] },
          { font: ['Montserrat Alternates', 400, 'normal'] },
          { font: ['Montserrat Alternates', 400, 'italic'] },
          { font: ['Montserrat Alternates', 700, 'normal'] },
          { font: ['Montserrat Alternates', 700, 'italic'] }
        ]
      }
    };
  }
};
</script>
