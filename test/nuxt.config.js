import { defineNuxtConfig } from 'nuxt/config';
import { createResolver } from '@nuxt/kit';

import { join, resolve } from 'pathe';
import nuxtConfig from '../playground/nuxt.config.js';

const resolver = createResolver(import.meta.url);

const rootDir = resolver.resolve('.');

export const distDir = join(rootDir, 'dist');

export default defineNuxtConfig(async () => {
  const defaultConfig = await nuxtConfig();
  defaultConfig.runtimeConfig.public.isTest = true;
  defaultConfig.runtimeConfig.public.disableInfoLayer = true;

  return {
    ...defaultConfig,
    srcDir: resolver.resolve('../playground'),
    buildDir: resolver.resolve('../playground/.nuxt'),
    distDir: resolve(rootDir, 'dist'),

    nitro: {
      prerender: {
        crawlLinks: false,
        routes: [
          '/booster-layer',
          '/booster-hydrate',
          '/iframe',
          '/image',
          '/picture',
          '/useBoosterHead',
          '/v-font',
          '/v-font-media',
          '/v-font-scroll',
          '/vimeo',
          '/weak-hardware-overlay',
          '/youtube',
          '/useBoosterHead'
        ]
      }
    },

    dir: {
      pages: 'pages/tests'
    },

    ssr: true,

    booster: {
      ...defaultConfig.booster,
      targetFormats: ['jpg|jpeg|png|gif']
    }
  };
});
