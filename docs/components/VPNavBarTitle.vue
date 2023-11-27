<script setup>
import { useData } from 'vitepress/dist/client/theme-default/composables/data';
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs';
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar';
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils';
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import Logo from './Logo.vue';

const { site, theme } = useData();
const { hasSidebar } = useSidebar();
const { currentLang } = useLangs();
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="theme.logoLink ?? normalizeLink(currentLang.link)">
      <slot name="nav-bar-title-before" />
      <logo v-if="theme.logoComponent" class="logo" />
      <v-p-image v-else-if="theme.logo" class="logo" :image="theme.logo" />
      <template v-else-if="theme.siteTitle">{{ theme.siteTitle }}</template>
      <template v-else-if="theme.siteTitle === undefined">{{
        site.title
      }}</template>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid transparent;
  transition: opacity 0.25s;
}

@media (width >= 960px) {
  .title {
    flex-shrink: 0;
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  height: var(--vp-nav-logo-height);
  margin-right: 8px;
}
</style>
