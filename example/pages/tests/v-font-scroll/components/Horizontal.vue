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
        items: Array(10).fill({}).map((v, index) => ({ title: `Item ${index + 1}` }))
      }
    };
  }
};
</script>
