export default {
  failOnWarn: false,
  externals: [
    'glob',
    'consola',
    'change-case',
    'hash-sum',
    'probe-image-size',
    'vue3-lazy-hydration',
    'node-cache',

    // package
    '@nuxt/image',
    'browserslist-useragent-regexp',
    'cheerio',
    'defu',
    'dom-serializer',
    'dynamic-class-list',
    'htmlparser2',
    'image-meta',
    'pathe',
    'sort-css-media-queries',
    'vue3-lazy-hydration',
    'mime-types',
    'mime-db'
  ],
  hooks: {
    'build:done': async () => {
      // copy all things under src/assets to dist/assets
      const { copy } = await import('fs-extra');
      await copy('src/assets', 'dist/assets');
    }
  }
};
