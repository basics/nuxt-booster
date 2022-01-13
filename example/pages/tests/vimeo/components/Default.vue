<template>
  <organism-preview-container>
    <template #default>
      <div>
        <default-vimeo v-bind="vimeo" />
      </div>
    </template>
    <template #title>
      <p v-html="title" />
    </template>
  </organism-preview-container>
</template>

<script>

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {
  speedkitComponents: {
    DefaultVimeo: () => import('nuxt-speedkit/components/SpeedkitVimeo')
  },

  components: {
    OrganismPreviewContainer
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
    vimeo () {
      return {
        url: this.vimeoUrl,
        autoplay: this.autoplay
      };
    }
  }

};
</script>
