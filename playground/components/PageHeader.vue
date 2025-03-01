<template>
  <header class="page-header">
    <page-header-menu v-bind="$attrs" />
  </header>
</template>

<script setup lang="ts">
import PageHeaderMenu from './fragments/PageHeaderMenu.vue';

defineOptions({
  inheritAttrs: false
});
</script>

<style scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
