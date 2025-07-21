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

<script setup lang="ts">
import { ref } from 'vue';
import DefaultIframe from '#booster/components/BoosterIframe.vue';
import PreviewContainer from '@/components/PreviewContainer.vue';

const iframeSrc = ref('https://basics.github.io/nuxt-booster/playground/');
</script>
