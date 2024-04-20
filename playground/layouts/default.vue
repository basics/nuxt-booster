<template>
  <div>
    <organism-page-header v-model="menuOpened" v-bind="pageHeader" />
    <nuxt :inert="menuOpened" />
    <info-layer v-if="!disableInfoLayer" critical />
    <github-corner />
    <google-lighthouse />
  </div>
</template>

<script>
import 'wicg-inert';
import boosterHydrate from '#booster/hydrate';
import InfoLayer from '@/components/InfoLayer';

export default {
  components: {
    InfoLayer,
    GithubCorner: boosterHydrate(
      () => import(/* webpackMode: "eager" */ '@/components/atoms/GithubCorner')
    ),
    GoogleLighthouse: boosterHydrate(
      () =>
        import(
          /* webpackMode: "eager" */ 'nuxt-booster/components/GoogleLighthouse'
        )
    ),
    OrganismPageHeader: boosterHydrate(
      () =>
        import(/* webpackMode: "eager" */ '@/components/organisms/PageHeader')
    )
  },

  data() {
    return {
      disableInfoLayer:
        String(process.env.DISABLE_INFO_LAYER).toLowerCase() === 'true',
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

  head() {
    return {
      title: `${this.$route.name} | nuxt-booster`,
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
  min-height: 100vh;
  min-height: stretch;
  margin: 0;
  color: #000;
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    background-color: #333;
  }

  @media (width >= 375px) {
    font-size: vw(16, 375);
  }

  @media (width >= 576px) {
    font-size: vw(16, 576);
  }

  @media (width >= 768px) {
    font-size: vw(16, 768);
  }

  @media (width >= 992px) {
    font-size: vw(16, 992);
  }

  @media (width >= 1200px) {
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
