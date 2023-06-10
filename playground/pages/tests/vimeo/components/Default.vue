<template>
  <preview-container>
    <template #default>
      <div>
        <default-vimeo v-bind="vimeo" />
      </div>
    </template>
    <template #title>
      <p v-html="title" />
    </template>
  </preview-container>
</template>

<script>
import DefaultVimeo from '#speedkit/components/SpeedkitVimeo';
import PreviewContainer from '@/components/PreviewContainer';

export default {
  components: {
    DefaultVimeo,
    PreviewContainer
  },

  props: {
    vimeoUrl: {
      type: String,
      default: 'https://vimeo.com/440265549'
    },

    title: {
      type: String,
      default: 'Vimeo'
    },

    autoplay: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    vimeo() {
      return {
        url: this.vimeoUrl,
        autoplay: this.autoplay
      };
    }
  }
};
</script>
