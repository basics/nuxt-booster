import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html']
    }
  },

  runtimeConfig: {},

  // @ts-ignore
  modules: [
    '@nuxtlabs/github-module',
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: () => ['/reports']
      }
    ]
  ],
  // @ts-ignore
  github: {
    owner: 'GrabarzUndPartner',
    repo: 'nuxt-speedkit',
    branch: 'main'
  }

});
