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
import DefaultIframe from '#booster/components/BoosterIframe';
import PreviewContainer from '@/components/PreviewContainer';

const iframeSrc = 'https://grabarzundpartner.de';
</script>
