<template>
  <header class="page-header">
    <organism-menu v-bind="$attrs" v-on="$listeners" />
  </header>
</template>

<script>
import OrganismMenu from '@/components/organisms/Menu';

export default {
  components: {
    OrganismMenu
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
