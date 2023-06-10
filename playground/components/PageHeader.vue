<template>
  <header class="page-header">
    <page-header-menu v-bind="$attrs" />
  </header>
</template>

<script>
import PageHeaderMenu from './fragments/PageHeaderMenu';

export default {
  components: {
    PageHeaderMenu
  },
  inheritAttrs: false
};
</script>

<style scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
