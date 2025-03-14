import { defineNuxtConfig } from 'nuxt/config';
import { readPackage } from 'read-pkg';
import svgLoader from 'vite-svg-loader';
import checker from 'vite-plugin-checker';

import type { NuxtConfig } from '@nuxt/schema';
import * as postcssFunctions from './postcss/functions';

const isDev = process.env.NODE_ENV === 'development';

function getBuilder() {
  return (process.env.npm_config_builder ??
    process.env.BUILDER ??
    'vite') as NuxtConfig['builder'];
}

const { repository } = await readPackage();
export default defineNuxtConfig({
  compatibilityDate: '2024-08-01',
  dev: isDev,

  builder: getBuilder(),

  ssr: true,

  imports: {
    autoImport: false
  },

  runtimeConfig: {
    public: {
      githubRepoUrl: repository?.url.replace(/^git\+(.*)\.git$/, '$1'),
      disableInfoLayer: true
    }
  },

  app: {
    baseURL: getBaseUrl(),

    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },

    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  devServer: {
    port: getPort(),
    host: getHost()
  },

  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component' // or 'raw'
      }),
      checker({
        vueTsc: true
      })
    ]
  },

  postcss: {
    plugins: {
      'postcss-preset-env': {
        preserve: true,
        stage: 0,
        features: {
          'nesting-rules': true
        }
      },
      'postcss-functions': {
        functions: postcssFunctions
      }
    },
    order: 'cssnanoLast'
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
    domains: [
      'https://picsum.photos',
      'https://img.youtube.com',
      'https://i.vimeocdn.com',
      'https://i.pickadummy.com'
    ],
    alias: {
      picsum: 'https://picsum.photos',
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
      pickadummy: 'https://i.pickadummy.com'
    }
  },

  booster: {
    // debug: true,
    // targetFormats: ['jpg|jpeg|png|gif'],
    // densities: 'x1 x2',

    // optimizeSSR: {
    //   cleanPreloads: true,
    //   cleanPrefetches: true,
    //   inlineStyles: true
    // },

    // detection: {
    //   performance: true,
    //   browserSupport: true,
    //   battery: true
    // },

    // experimental: {
    //   fallbackInit: {
    //     duration: 3000
    //   }
    // },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      }
    },
    fonts: [
      {
        family: 'Quicksand',
        locals: ['Quicksand'],
        fallback: ['sans-serif'],
        variances: [
          {
            style: 'normal',
            weight: 300,
            sources: [
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 400,
            sources: [
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 500,
            sources: [
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 600,
            sources: [
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 700,
            sources: [
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff2',
                type: 'woff2'
              }
            ]
          }
        ]
      },
      {
        family: 'Merriweather',
        locals: ['Merriweather'],
        fallback: ['Georgia', 'sans-serif'],
        variances: [
          {
            style: 'normal',
            weight: 300,
            sources: [
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'italic',
            weight: 300,
            sources: [
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300italic.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300italic.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 400,
            sources: [
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-regular.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-regular.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'italic',
            weight: 400,
            sources: [
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-italic.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-italic.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 700,
            sources: [
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'italic',
            weight: 700,
            sources: [
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700italic.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700italic.woff2',
                type: 'woff2'
              }
            ]
          }
        ]
      },
      {
        family: 'Montserrat Alternates',
        locals: ['Montserrat Alternates', 'Montserrat-Alternates'],
        fallback: ['sans-serif'],
        variances: [
          {
            style: 'normal',
            weight: 300,
            sources: [
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'italic',
            weight: 300,
            sources: [
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300italic.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300italic.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 400,
            sources: [
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-regular.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-regular.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'italic',
            weight: 400,
            sources: [
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-italic.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-italic.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'normal',
            weight: 700,
            sources: [
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700.woff2',
                type: 'woff2'
              }
            ]
          },
          {
            style: 'italic',
            weight: 700,
            sources: [
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700italic.woff',
                type: 'woff'
              },
              {
                src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700italic.woff2',
                type: 'woff2'
              }
            ]
          }
        ]
      }
    ]
  },

  modules: ['@nuxt/eslint', '../src/module'],

  typescript: {
    tsConfig: {
      include: ['../../test/**/*.ts']
    }
  }
});

function getBaseUrl() {
  return process.env.npm_config_base_url ?? process.env.BASE_URL ?? '/';
}

function getHost() {
  return process.env.npm_config_host ?? process.env.HOST ?? 'localhost';
}

function getPort() {
  return Number(process.env.npm_config_port ?? process.env.PORT ?? 3000);
}
