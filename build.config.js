import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  failOnWarn: false,
  externals: [
    'vue-bundle-renderer',
    '@nuxt/image',
    'browserslist-useragent-regexp',
    'cheerio',
    'defu',
    'dom-serializer',
    'dynamic-class-list',
    'htmlparser2',
    'image-meta',
    'pathe',
    'mime-types',
    'mime-db',
    '#build/types/booster',
    'sort-css-media-queries'
  ],
  hooks: {
    'build:done': async () => {
      // copy all things under src/assets to dist/assets
      const { copy } = await import('fs-extra');
      await copy('src/assets', 'dist/assets');
    }
  }
});
