<template>
  <organism-preview-container id="lazyContainer">
    <template #default>
      <default-iframe v-bind="iframe" />
    </template>
    <template #title>
      <p>Lazy<br>Iframe</p>
    </template>
  </organism-preview-container>
</template>

<script>

import DefaultIframe from 'nuxt-speedkit/components/Iframe';
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
