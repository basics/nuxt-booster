---
title: Setup
---

# {{$frontmatter.title}}

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Add `nuxt-speedkit` dependency to your project:

::: code-group

  ```bash [Yarn]
  yarn add nuxt-speedkit
  ```

  ```bash [NPM]
  npm install nuxt-speedkit
  ```

:::

Then, add `nuxt-speedkit` to the `modules` section of `nuxt.config.js`:

::: code-group

````js[nuxt.config.js]
{
  modules: [
    'nuxt-speedkit'
  ],
  speedkit: {
    // Options
  }
}
````

:::

## Example Configuration

````js
{
  speedkit: {
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
      },
      lighthouseDetectionByUserAgent: false
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

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  }
}
````

See [module options](/v1/options).
