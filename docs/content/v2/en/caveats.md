---
title: Caveats
description: ''
position: 14
category: Guide
---

## Optimize `runtime` & `vendor` App

It is recommended to check the initial javascript file sizes, they should not exceed `40KB (gzip)`.

If this is the case or if you want to reduce the size of the files, it is recommended to create a CacheGroup in Webpack to extract resources from the files.

For this, a new CacheGroup must be created in `nuxt.config.js` under `build.optimization`.

- It is recommended to remove the dependency `node-libs-browser`, otherwise it will bring a relatively large buffer into the runtime app.
- If `@nuxt/i18n` is `vue-i18n` included in the runtimeApp, this can also be extracted.


````js[Example Configuration]

{
  build: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            // extend the regex for more dependencies 
            // e.g. node-libs-browser|vue-i18n|…
            test: /[\\/]node_modules[\\/](node-libs-browser)[\\/]/,
            name: 'vendor'
          }
        }
      }
    }
  }
}

````

In the example you get a saving of up to `5KB` in the runtime app. A positive effect is on the vendor app, which disappears in this usecase and is no longer needed.

**Stats without CacheGroup.**

<a href="/caveats/unoptimized.jpg" target="_blank"><img src="/caveats/unoptimized.jpg" alt="stats unoptimized"/></a>


**Stats with CachGroup and Dependency `node-libs-browser`.**

<a href="/caveats/optimized.jpg" target="_blank"><img src="/caveats/optimized.jpg" alt="stats optimized"/></a>



## `v-font` and custom head

When a `v-font` directive is called in a component with a custom head, the directive specific head settings must be applied in the `head`.

The method `this.$speedkitHead(headAddition)` is provided, it queries the required `head` settings and returns them.

By passing the `headAddition` argument, additional head settings can be applied.

#### Example:

````html
<template>
  <span v-font="$getFont(…)"></span>
</template>

<script>
  export default {
    head () {
      return this.$speedkitHead({
        link: […],
        style: […],
        noscript: [
          { hid: 'critical-css', innerHTML: '<style> … </style>' }
        ],
        __dangerouslyDisableSanitizers: [
          'noscript'
        ]
      });
    }
  }
</script>
````
