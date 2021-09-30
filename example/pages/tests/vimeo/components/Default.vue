<template>
  <organism-preview-container>
    <template #default>
      <div>
        <default-vimeo v-bind="youtube" />
      </div>
    </template>
    <template #title>
      <p v-html="title" />
    </template>
  </organism-preview-container>
</template>

<script>

import DefaultVimeo from 'nuxt-speedkit/components/Vimeo';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';

export default {

  components: {
    DefaultVimeo,
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
    }
  },

  computed: {
    youtube () {
      return {
        url: this.vimeoUrl,
        title: this.title
      };
    }
  }

};
</script>
