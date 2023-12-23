<template>
  <preview-container>
    <template #default>
      <loader-test id="criticalBoosterHydrate" />
    </template>
    <template #title>
      <p>Critical<br />BoosterHydrate</p>
    </template>
  </preview-container>
</template>

<script setup>
import LoaderTest from '@/components/elements/LoaderTest';
import PreviewContainer from '@/components/PreviewContainer';
</script>
