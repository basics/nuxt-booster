<template>
  <organism-preview-container>
    <template #default>
      <div>
        <default-youtube v-bind="youtube" />
      </div>
    </template>
    <template #title>
      <p v-html="title" />
    </template>
  </organism-preview-container>
</template>

<script>

import DefaultYoutube from 'nuxt-speedkit/components/Youtube';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    DefaultYoutube,
    OrganismPreviewContainer
  },

  props: {
    youtubeUrl: {
      type: String,
      default: 'https://www.youtube.com/watch?v=cLKvbhfVBUU'
    },

    title: {
      type: String,
      default: 'Youtube'
    }
  },

  computed: {
    youtube () {
      return {
        url: this.youtubeUrl,
        title: this.title
      };
    }
  }

};
</script>
