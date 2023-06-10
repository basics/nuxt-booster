<template>
  <preview-container>
    <template #default>
      <div>
        <default-youtube v-bind="youtube" />
      </div>
    </template>
    <template #title>
      <p v-html="title" />
    </template>
  </preview-container>
</template>

<script>
import DefaultYoutube from '#speedkit/components/SpeedkitYoutube';
import PreviewContainer from '@/components/PreviewContainer';

export default {
  components: {
    PreviewContainer,
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
    youtube() {
      return {
        url: this.youtubeUrl,
        title: this.title,
        autoplay: this.autoplay
      };
    }
  }
};
</script>
