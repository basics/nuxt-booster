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
    buildDir: join(rootDir, '.nuxt'),
    distDir: resolve(rootDir, 'dist'),

    nitro: {
      prerender: {
        crawlLinks: false
      }
    },

    ssr: true,

    dir: {
      pages: 'pages/tests'
    },

    booster: {
      ...defaultConfig.booster,
      targetFormats: ['jpg|jpeg|png|gif']
    }
  };
});
