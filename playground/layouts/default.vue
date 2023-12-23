<template>
  <div>
    <page-header v-model="menuOpened" v-bind="pageHeaderData" />
    <main :inert="menuOpened">
      <slot />
    </main>
    <info-layer v-if="!$config.public.disableInfoLayer" critical />
    <github-corner :url="$config.public.githubRepoUrl" />
  </div>
</template>

<script setup>
import 'wicg-inert';
import { ref, defineAsyncComponent, computed } from 'vue';
import { useRoute, useHead } from '#app';
import boosterHydrate from '#booster/hydrate';

const InfoLayer = defineAsyncComponent(() => import('@/components/InfoLayer'));
const GithubCorner = boosterHydrate(
  () => import('@/components/elements/GithubCorner')
);
const PageHeader = boosterHydrate(() => import('@/components/PageHeader'));

const route = useRoute();

useHead(
  computed(() => {
    return {
      title: `${route.name} | nuxt-booster`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${route.name} - description`
        }
      ]
    };
  })
);

const menuOpened = ref(false);
const pageHeaderData = {
  lists: [
    {
      links: [
        {
          title: 'Home',
          to: '/'
        }
      ]
    },
    {
      headline: 'Test',
      links: [
        {
          title: 'v-font',
          to: '/tests/v-font/'
        },
        {
          title: 'v-font (media)',
          to: '/tests/v-font-media/'
        },
        {
          title: 'v-font (scroll)',
          to: '/tests/v-font-scroll/'
        },
        {
          title: 'Picture',
          to: '/tests/picture/'
        },
        {
          title: 'Image',
          to: '/tests/image/'
        },
        {
          title: 'Youtube',
          to: '/tests/youtube/'
        },
        {
          title: 'Vimeo',
          to: '/tests/vimeo/'
        },
        {
          title: 'Iframe',
          to: '/tests/iframe/'
        }
      ]
    }
  ]
};
</script>

<style lang="postcss">
html {
  height: stretch;
}

body {
  min-height: 100vh;
  min-height: stretch;
  margin: 0;
  color: #000;
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    background-color: #333;
  }

  @media (width >=375px) {
    font-size: vw(16, 375);
  }

  @media (width >=576px) {
    font-size: vw(16, 576);
  }

  @media (width >=768px) {
    font-size: vw(16, 768);
  }

  @media (width >=992px) {
    font-size: vw(16, 992);
  }

  @media (width >=1200px) {
    font-size: 16px;
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
