<template>
  <organism-preview-container>
    <template #default>
      <loader-test id="criticalBoosterHydrate" />
    </template>
    <template #title>
      <p>Critical<br />BoosterHydrate</p>
    </template>
  </organism-preview-container>
</template>

<script>
import LoaderTest from '@/components/atoms/LoaderTest';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {
  components: {
    OrganismPreviewContainer,
    LoaderTest
  }
};
</script>
