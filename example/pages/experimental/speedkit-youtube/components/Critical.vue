<template>
  <organism-preview-container>
    <template #default>
      <div>
        <speedkit-youtube v-bind="youtube" />
      </div>
    </template>
    <template #title>
      <p>Critical<br>SpeedkitYoutube</p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitYoutube from 'nuxt-speedkit/components/experimental/SpeedkitYoutube';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
export default {
  components: {
    SpeedkitYoutube,
    OrganismPreviewContainer
  },
  data () {
    return {
      youtube: {
        id: 'cLKvbhfVBUU'
      }
    };
  }
};
</script>
