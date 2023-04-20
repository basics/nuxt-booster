<template>
  <organism-preview-container>
    <template #default>
      <default-iframe class="test-iframe" v-bind="iframe" />
    </template>
    <template #title>
      <p>Critical<br>Iframe</p>
    </template>
  </organism-preview-container>
</template>

<script>

import DefaultIframe from '#speedkit/components/SpeedkitIframe';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    DefaultIframe,
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
