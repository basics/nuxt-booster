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

<script setup>
import LoaderTest from '@/components/elements/LoaderTest';
import PreviewContainer from '@/components/PreviewContainer';
</script>
