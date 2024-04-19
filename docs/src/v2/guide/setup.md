---
title: Setup
---

# {{$frontmatter.title}}

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Install `nuxt-booster` as a dependency to your project:

::: code-group

  ```bash [Yarn]
  yarn add nuxt-booster
  ```

  ```bash [NPM]
  npm install nuxt-booster
  ```

:::

Add `nuxt-booster` to the `modules` section of `nuxt.config.js`:

### @nuxt/image

**Nuxt Booster** uses the module `@nuxt/image`, if this is not already present, it will be integrated automatically.

It is necessary for the use of the components `BoosterYoutube` and `BoosterVimeo` to add aliases and domains to the `@nuxt/image` options. These are needed to retrieve the images from Youtube and Vimeo.

::: code-group

````js[@nuxt/image]
{
  domains: ['img.youtube.com', 'i.vimeocdn.com'],
  alias: {
    youtube: 'https://img.youtube.com',
    vimeo: 'https://i.vimeocdn.com',
  }
}
````

:::

More about `@nuxt/image` module options can be found [here](https://image.nuxtjs.org/api/options).

## Example Configuration

::: code-group

````js[nuxt.config.js]
{
  modules: [
    'nuxt-booster'
  ],

  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    fonts: [{
      family: 'Font A',
      locals: ['Font A'],
      fallback: ['Arial', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
            { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/font-a-regularItalic.woff', type:'woff' },
            { src: '@/assets/fonts/font-a-regularItalic.woff2', type:'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/font-a-700.woff', type:'woff' },
            { src: '@/assets/fonts/font-a-700.woff2', type:'woff2' }
          ]
        }
      ]
    }],

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },

    loader: {
      dataUri: null,
      size: '100px',
      backgroundColor: 'grey'
    }
    
  },

  image: {
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

    domains: ['img.youtube.com', 'i.vimeocdn.com'],

    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    }
  }
}
````

:::

See [module options](/v2/guide/options).
