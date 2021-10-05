<template>
  <organism-preview-container>
    <template #default>
      <div>
        <scroll-container id="verticalScroll" v-bind="scrollContainer" />
      </div>
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
        items: Array(5).fill({}).map((v, index) => ({ title: `Item ${index + 1}` }))
      }
    };
  }
};
</script>
