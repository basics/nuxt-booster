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

<script setup>
import { computed } from 'vue';
import DefaultVimeo from '#booster/components/BoosterVimeo';
import PreviewContainer from '@/components/PreviewContainer';

const props = defineProps({
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
});

const vimeo = computed(() => {
  return {
    url: props.vimeoUrl,
    autoplay: props.autoplay
  };
});
</script>
