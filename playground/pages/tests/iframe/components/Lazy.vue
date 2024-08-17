<template>
  <preview-container id="lazyContainer">
    <template #default>
      <default-iframe class="test-iframe" :src="iframeSrc" />
    </template>
    <template #title>
      <p>Lazy<br />Iframe</p>
    </template>
  </preview-container>
</template>

<script setup>
import { ref } from 'vue';
import DefaultIframe from '#booster/components/BoosterIframe';
import PreviewContainer from '@/components/PreviewContainer';

const iframeSrc = ref('https://basics.github.io/nuxt-booster/playground/');
</script>
