<template>
  <preview-container>
    <template #default>
      <default-iframe class="test-iframe" v-bind="iframe" />
    </template>
    <template #title>
      <p>Critical<br />Iframe</p>
    </template>
  </preview-container>
</template>

<script>
import DefaultIframe from '#speedkit/components/SpeedkitIframe';
import PreviewContainer from '@/components/PreviewContainer';

export default {
  components: {
    DefaultIframe,
    PreviewContainer
  },

  data() {
    return {
      iframe: {
        src: 'https://grabarzundpartner.de'
      }
    };
  }
};
</script>
