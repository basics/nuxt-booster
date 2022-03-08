<template>
  <organism-preview-container>
    <template #default>
      <loader-test id="criticalSpeedkitHydrate" />
    </template>
    <template #title>
      <p>Critical<br>SpeedkitHydrate</p>
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
