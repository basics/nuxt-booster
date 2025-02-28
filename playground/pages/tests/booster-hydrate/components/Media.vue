<template>
  <preview-container>
    <template #default>
      <loader-test id="mediaBoosterHydrate" />
    </template>
    <template #title>
      <p>Media<br />BoosterHydrate</p>
    </template>
  </preview-container>
</template>

<script setup lang="ts">
import LoaderTest from '@/components/elements/LoaderTest.vue';
import PreviewContainer from '@/components/PreviewContainer.vue';
</script>
