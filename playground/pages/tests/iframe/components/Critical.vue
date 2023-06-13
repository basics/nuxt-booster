<template>
  <preview-container>
    <template #default>
      <default-iframe class="test-iframe" :iframe-src="iframeSrc" />
    </template>
    <template #title>
      <p>Critical<br />Iframe</p>
    </template>
  </preview-container>
</template>

<script setup>
import DefaultIframe from '#speedkit/components/SpeedkitIframe';
import PreviewContainer from '@/components/PreviewContainer';

const iframeSrc = 'https://grabarzundpartner.de';
</script>
