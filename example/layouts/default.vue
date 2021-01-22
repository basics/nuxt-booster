<template>
  <div>
    <google-lighthouse />
    <organism-page-header critical />
    <Nuxt />
    <info-layer />
    <GithubCorner />
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
  color: #2f495e;
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    color: #f5f7fa;
    background-color: #2c3e50;
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
