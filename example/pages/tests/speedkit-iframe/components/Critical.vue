<template>
  <organism-preview-container>
    <template #default>
      <speedkit-iframe v-bind="iframe" />
    </template>
    <template #title>
      <p>Critical<br>SpeedkitIframe</p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitIframe from 'nuxt-speedkit/components/SpeedkitIframe';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
export default {
  components: {
    SpeedkitIframe,
    OrganismPreviewContainer
  },
  data () {
    return {
      iframe: {
        src: 'https://grabarzundpartner.de'
      }
    };
  }
};
</script>
