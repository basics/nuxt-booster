<script setup lang="ts">
import { useData } from 'vitepress';
import VPNavScreenMenuLink from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue';
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue';
import useVersion from '../composables/version';

const { theme } = useData();
const { nav: versionNav } = useVersion();
</script>

<template>
  <div>
    <nav
      v-if="versionNav"
      aria-label="Screen Navigation"
      class="VPNavScreenMenu"
    >
      <template v-for="item in versionNav" :key="item.text">
        <v-p-nav-screen-menu-link v-if="'link' in item" :item="item" />
        <v-p-nav-screen-menu-group
          v-else
          :text="item.text || ''"
          :items="item.items"
        />
      </template>
    </nav>
    <nav
      v-if="theme.nav"
      aria-label="Screen Navigation"
      class="VPNavScreenMenu"
    >
      <template v-for="item in theme.nav" :key="item.text">
        <v-p-nav-screen-menu-link v-if="'link' in item" :item="item" />
        <v-p-nav-screen-menu-group
          v-else
          :text="item.text || ''"
          :items="item.items"
        />
      </template>
    </nav>
  </div>
</template>
