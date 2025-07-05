// import type { ModuleOptions } from '../src/types/module';
import { defineNuxtConfig } from 'nuxt/config';
import type { NuxtConfig } from 'nuxt/config';
import { createResolver } from '@nuxt/kit';

import { join, resolve } from 'pathe';
import nuxtConfig from '../playground/nuxt.config.js';

interface ExtendedNuxtConfig extends NuxtConfig {
  booster?: {
    targetFormats?: string[];
  };
}

const resolver = createResolver(import.meta.url);

const rootDir = resolver.resolve('.');

export const distDir = join(rootDir, 'dist');

export default defineNuxtConfig(
  await (async () => {
    const defaultConfig =
      (await (nuxtConfig as CallableFunction)) as ExtendedNuxtConfig;
    if (defaultConfig.runtimeConfig?.public) {
      defaultConfig.runtimeConfig.public.isTest = true;
      defaultConfig.runtimeConfig.public.disableInfoLayer = true;
    }

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
            '/useBoosterHead/1',
            '/useBoosterHead/2',
            '/useBoosterHead/empty-1',
            '/useBoosterHead/empty-2',
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
  })()
);
