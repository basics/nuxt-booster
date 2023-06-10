import { defineNuxtConfig } from 'nuxt/config';
import { createResolver } from '@nuxt/kit';

import { join, resolve } from 'pathe';
import nuxtConfig from '../playground/nuxt.config.mjs';

const resolver = createResolver(import.meta.url);

const rootDir = resolver.resolve(`.`);

export const distDir = join(rootDir, 'dist');

export default defineNuxtConfig(async () => {
  return {
    ...(await nuxtConfig()),
    srcDir: resolver.resolve('../playground'),
    buildDir: join(rootDir, '.nuxt'),
    distDir: resolve(rootDir, 'dist'),

    nitro: {
      crawlLinks: false
    },

    ssr: true,
    runtimeConfig: {
      public: {
        disableInfoLayer: true
      }
    },
    generate: { cache: false },
    dir: {
      pages: 'pages/tests'
    }
  };
});
