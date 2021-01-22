---
title: Setup
description: ''
position: 2
category: Guide
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Add `@nuxtjs/nuxt-speedkit` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxtjs/nuxt-speedkit
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxtjs/nuxt-speedkit
  ```

  </code-block>
</code-group>

Then, add `@nuxtjs/nuxt-speedkit` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
    // Simple usage
    'nuxt-speedkit',

    // With options
    ['nuxt-speedkit', { 
        fonts: [{
          family: 'Font A',
          locals: ['Font A'],
          fallback: ['Arial', 'sans-serif'],
          variance: [
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
        }]
     }]
}
```
See [module options](/options/).
