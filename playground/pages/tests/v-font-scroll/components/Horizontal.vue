<template>
  <preview-container>
    <template #default>
      <scroll-container id="horizontalScroll" v-bind="scrollContainer" />
    </template>
    <template #title>
      <p>Horizontal Scroll - v-font</p>
    </template>
  </preview-container>
</template>

<script>
import PreviewContainer from '@/components/PreviewContainer';
import ScrollContainer from '@/components/fragments/ScrollContainer';
export default {
  components: { PreviewContainer, ScrollContainer },
  data() {
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
