<template>
  <preview-container>
    <template #default>
      <scroll-container id="verticalScroll" v-bind="data" />
    </template>
    <template #title>
      <p>Vertical Scroll - v-font</p>
    </template>
  </preview-container>
</template>

<script setup>
import PreviewContainer from '@/components/PreviewContainer';
import ScrollContainer from '@/components/fragments/ScrollContainer';

const data = {
  items: [
    { font: ['Montserrat Alternates', 300, 'normal'] },
    { font: ['Montserrat Alternates', 300, 'italic'] },
    { font: ['Montserrat Alternates', 400, 'normal'] },
    { font: ['Montserrat Alternates', 400, 'italic'] },
    { font: ['Montserrat Alternates', 700, 'normal'] },
    { font: ['Montserrat Alternates', 700, 'italic'] }
  ]
};
</script>
