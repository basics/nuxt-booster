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

import DefaultYoutube from '#speedkit/components/SpeedkitYoutube';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {
  components: {
    OrganismPreviewContainer,
    DefaultYoutube

  },

  props: {
    youtubeUrl: {
      type: String,
      default: 'https://www.youtube.com/watch?v=cLKvbhfVBUU'
    },

    title: {
      type: String,
      default: 'Youtube'
    },

    autoplay: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    youtube () {
      return {
        url: this.youtubeUrl,
        title: this.title,
        autoplay: this.autoplay
      };
    }
  }

};
</script>
