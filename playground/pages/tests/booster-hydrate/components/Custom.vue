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

<script setup lang="ts">
import LoaderTest from '@/components/elements/LoaderTest.vue';
import PreviewContainer from '@/components/PreviewContainer.vue';
</script>
