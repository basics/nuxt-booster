<template>
  <header class="page-header">
    <organism-menu v-bind="menu" />
  </header>
</template>

<script>
import OrganismMenu from '@/components/organisms/Menu';

export default {
  components: {
    OrganismMenu
  },
  props: {
    menu: {
      type: Object,
      default () {
        return {
          lists: []
        };
      }
    }
  }
};
</script>

<style scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.page-header .overview-link {
  display: inline-block;
  padding: calc(10 / 18 * 1em);
  font-size: calc(18 / 16 * 1em);
  color: #f5f7fa;
  text-decoration: none;
  background-color: #2c3e50;
  border-radius: 0 0 calc(5 / 18 * 1em) 0;
  box-shadow: 0 0 calc(5 / 18 * 1em) rgba(255, 255, 255, 0.6);

  @media (prefers-color-scheme: dark) {
    color: #2f495e;
    background-color: #fff;
    box-shadow: 0 0 calc(5 / 18 * 1em) rgba(0, 0, 0, 0.6);
  }
}
</style>
