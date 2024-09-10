<template>
  <preview-container>
    <template #default>
      <loader-test id="lazyBoosterHydrate" />
    </template>
    <template #title>
      <p>Lazy<br />BoosterHydrate</p>
    </template>
  </preview-container>
</template>

<script setup>
import LoaderTest from '@/components/elements/LoaderTest';
import PreviewContainer from '@/components/PreviewContainer';
</script>
