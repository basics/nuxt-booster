<template>
  <div>
    <google-lighthouse url="https://grabarzundpartner.de" />
    <organism-page-header />
    <Nuxt />
  </div>
</template>

<script>
import GoogleLighthouse from 'lazy-resources/components/GoogleLighthouse'
import OrganismPageHeader from '@/components/organisms/PageHeader'

export default {
  components: {
    GoogleLighthouse,
    OrganismPageHeader
  },

  head () {
    return {
      title: this.$route.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$route.name} - description`
        }
      ]
    }
  }
}
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
