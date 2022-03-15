<template>
  <div>
    <organism-page-header v-model="menuOpened" v-bind="pageHeader" />
    <nuxt :inert="menuOpened" />
    <!-- <info-layer critical /> -->
    <github-corner />
    <google-lighthouse />
  </div>
</template>

<script>
import 'wicg-inert';
// import InfoLayer from '@/components/InfoLayer';

import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {
  components: {
    GoogleLighthouse: speedkitHydrate(() => import(/* webpackMode: "eager" */ 'nuxt-speedkit/components/GoogleLighthouse')),
    OrganismPageHeader: speedkitHydrate(() => import(/* webpackMode: "eager" */ '@/components/organisms/PageHeader'))
  },

  data () {
    return {
      menuOpened: false,
      pageHeader: {

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
      }
    };
  },

  head () {
    return {
      title: `${this.$route.name} | nuxt-speedkit`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$route.name} - description`
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
html {
  height: stretch;
}

body {
  /* width: 375px; */
  min-height: 100vh;
  min-height: stretch;
  margin: 0;
  font-size: 16px;

  /* font-size: calc(16 / 320 * 100vw); */
  color: #000;
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    background-color: #333;
  }

  /* @media (min-width: 375px) {
    font-size: calc(16 / 375 * 100vw);
  }

  @media (min-width: 414px) {
    font-size: calc(16 / 414 * 100vw);
  }

  @media (min-width: 768px) {
    font-size: calc(16 / 768 * 100vw);
  }

  @media (min-width: 992px) {
    font-size: 16px;
  } */
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
