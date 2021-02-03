<template>
  <div>
    <organism-page-header v-bind="pageHeader" />
    <Nuxt />
    <info-layer critical />
    <GithubCorner />
    <google-lighthouse />
  </div>
</template>

<script>
import InfoLayer from '@/components/InfoLayer';

export default {
  speedkitComponents: {
    GoogleLighthouse: () => import(/* webpackMode: "eager" */ 'nuxt-speedkit/components/GoogleLighthouse'),
    OrganismPageHeader: () => import(/* webpackMode: "eager" */ '@/components/organisms/PageHeader')
  },
  components: {
    InfoLayer
  },

  data () {
    return {
      pageHeader: {
        menu: {

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
                  title: 'SpeedkitPicture',
                  to: '/tests/speedkit-picture/'
                },
                {
                  title: 'SpeedkitYoutube',
                  to: '/tests/speedkit-youtube/'
                },
                {
                  title: 'SpeedkitIframe',
                  to: '/tests/speedkit-iframe/'
                }
              ]
            },
            {
              headline: 'Experimental',
              links: [
                {
                  title: 'Home',
                  to: '/experimental/'
                },
                {
                  title: 'SpeedkitYoutube',
                  to: '/experimental/speedkit-youtube/'
                },
                {
                  title: 'SpeedkitPicture (5 Pictures)',
                  to: '/experimental/speedkit-picture/5/'
                }
              ]
            }

          ]
        }
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
  min-height: 100vh;
  min-height: stretch;
  margin: 0;
  font-size: calc(16 / 320 * 100vw);
  color: #000;
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    background-color: #333;
  }

  @media (min-width: 375px) {
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
  }
}

</style>
