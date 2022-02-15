<template>
  <organism-preview-container>
    <template #default>
      <div>
        <scroll-container id="horizontalScroll" v-bind="scrollContainer" />
      </div>
    </template>
    <template #title>
      <p>Horizontal Scroll - v-font</p>
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
        directionHorizontal: true,
        items: [
          { font: ['Merriweather', 300, 'normal'] },
          { font: ['Merriweather', 300, 'italic'] },
          { font: ['Merriweather', 400, 'normal'] },
          { font: ['Merriweather', 400, 'italic'] },
          { font: ['Merriweather', 700, 'normal'] },
          { font: ['Merriweather', 700, 'italic'] }
        ]
      }
    };
  }
};
</script>
