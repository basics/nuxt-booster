<script setup>
import { useData } from 'vitepress/dist/client/theme-default/composables/data';
import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue';
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue';
import { useVersion } from '../composables/version.js';

const { theme } = useData();

const { nav: versionNav } = useVersion();
</script>

<template>
  <div>
    <nav
      v-if="versionNav"
      aria-labelledby="main-nav-aria-label"
      class="VPNavBarMenu"
    >
      <span id="main-nav-aria-label" class="visually-hidden"
        >Version Navigation</span
      >
      <template v-for="item in versionNav" :key="item.text">
        <v-p-nav-bar-menu-link v-if="'link' in item" :item="item" />
        <v-p-nav-bar-menu-group v-else :item="item" />
      </template>
    </nav>
    <nav
      v-if="theme.nav"
      aria-labelledby="main-nav-aria-label"
      class="VPNavBarMenu"
    >
      <span id="main-nav-aria-label" class="visually-hidden"
        >Main Navigation</span
      >
      <template v-for="item in theme.nav" :key="item.text">
        <v-p-nav-bar-menu-link v-if="'link' in item" :item="item" />
        <v-p-nav-bar-menu-group v-else :item="item" />
      </template>
    </nav>
  </div>
</template>

<style scoped>
/* stylelint-disable selector-class-pattern */
.VPNavBarMenu {
  display: none;
}

@media (width >=768px) {
  .VPNavBarMenu {
    display: flex;
  }
}
</style>
