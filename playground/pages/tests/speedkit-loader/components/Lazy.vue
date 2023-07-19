<template>
  <preview-container>
    <template #default>
      <loader-test id="lazySpeedkitHydrate" />
    </template>
    <template #title>
      <p>Critical<br />SpeedkitHydrate</p>
    </template>
  </preview-container>
</template>

<script setup>
import LoaderTest from '@/components/elements/LoaderTest';
import PreviewContainer from '@/components/PreviewContainer';
</script>
