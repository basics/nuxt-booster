import { defineNuxtConfig } from 'nuxt/config';
import { createResolver } from '@nuxt/kit';

import { join, resolve } from 'pathe';
import nuxtConfig from '../playground/nuxt.config.mjs';

const resolver = createResolver(import.meta.url);

const rootDir = resolver.resolve('.');

export const distDir = join(rootDir, 'dist');

export default defineNuxtConfig(async () => {
  const defaultConfig = await nuxtConfig();
  return {
    ...defaultConfig,
    srcDir: resolver.resolve('../playground'),
    buildDir: join(rootDir, '.nuxt'),
    distDir: resolve(rootDir, 'dist'),

    nitro: {
      prerender: {
        crawlLinks: false
      }
    },

    ssr: true,
    runtimeConfig: {
      public: {
        disableInfoLayer: true
      }
    },

    dir: {
      pages: 'pages/tests'
    },

    speedkit: {
      ...defaultConfig.speedkit,
      targetFormats: ['jpg|jpeg|png|gif']
    }
  };
});
