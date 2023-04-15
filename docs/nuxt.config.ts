export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html']
    }
  },

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
  github: {
    owner: 'GrabarzUndPartner',
    repo: 'nuxt-speedkit',
    branch: 'main'
  }

});
