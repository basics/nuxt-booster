<template>
  <preview-container>
    <template #default>
      <loader-test id="customBoosterHydrate" />
    </template>
    <template #title>
      <p>Custom<br />BoosterHydrate</p>
    </template>
  </preview-container>
</template>

<script setup>
import LoaderTest from '@/components/elements/LoaderTest';
import PreviewContainer from '@/components/PreviewContainer';
</script>
