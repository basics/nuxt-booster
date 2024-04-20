---
title: Caveats
---

# {{$frontmatter.title}}

## `v-font` and custom head

When a `v-font` directive is called in a component with a custom head, the directive specific head settings must be applied in the `head`.

The method `this.$booster.head(headAddition)` is provided, it queries the required `head` settings and returns them.

By passing the `headAddition` argument, additional head settings can be applied.

::: warning
`$booster.head()` is only available in vue component scope.
:::

### Example

````html
<template>
  <span v-font="$getFont(…)"></span>
</template>

<script>
  export default {
    head () {
      return this.$booster.head({
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

### Issues

- <https://github.com/nuxt/vue-meta/issues/695>

## Browser compatibility

You can use `nuxt-booster` with **Internet Explorer 11** browser.

::: info
Note that there is no optimization based on preloads in IE 11.
:::

You need the following polyfills:

- [`object-fit-images`](https://www.npmjs.com/package/object-fit-images)
- [`picturefill`](https://www.npmjs.com/package/picturefill)
- [`intersection-observer`](https://www.npmjs.com/package/intersection-observer)

The PostCSS Plugin [`postcss-object-fit-images`](https://github.com/ronik-design/postcss-object-fit-images) and following `build.transpile` entries for `@nuxt/image`:

- `@nuxt/image`
- `image-meta`

For the polyfills, it is recommended to integrate them as a [plugin](https://nuxtjs.org/docs/2.x/directory-structure/plugins), polyfills loading must follow a specific order.

You can see a example with live demo at [Nuxt Booster Example](https://github.com/basics/nuxt-booster-example).

### Example

::: code-group

````js[plugins/polyfills.js]
async function polyfills (){

  if (!('IntersectionObserver' in global)) {
    await import('intersection-observer');
  }

  if (!('objectFit' in document.documentElement.style)) {
    await import('object-fit-images');
  }

  if (!('HTMLPictureElement' in global || 'picturefill' in global)) {
    await import('picturefill');
    await import('picturefill/dist/plugins/mutation/pf.mutation.js');
  }

}

polyfills ();
````

:::

<br>

::: code-group

````js[nuxt.config.js]
{
  build: {
    
    transpile: ['@nuxt/image', 'image-meta'],

    postcss: {
      plugins: {
        'postcss-object-fit-images': {}
      }
    }
    
  },

  plugins: [
    { src: "@/plugins/polyfills.js", mode: "client" }
  ]
}
````

:::

## Prevent `SPEEDINDEX_OF_ZERO` and `NO_LCP`

The `window` event `nuxt-booster:run` is provided and useable to run code outside the app during initialization.

If the performance is not sufficient on the client side, this can be retrieved with the help of the event object `e.detail.sufficient`.

### Example

A case where the event may be needed would be when the initial viewport on a website is blank and it is not displayed until the initialization is complete.

In this case, measurements with Lighthouse can lead to these errors `SPEEDINDEX_OF_ZERO` and `NO_LCP`.

In order to solve this case, it can be provided that the content of the stage can already be displayed outside of the app initialization in the case of a slow initialization.

In this case the global event `nuxt-booster:run` can be used. It will return an event object with `e.detail.sufficient` as value. With the help of this status you can decide whether the stage should be displayed in advance.

**Component Example**

```vue
<template>
  <div class="stage">…</div>
</template>

<script>
  export default {
    head () {
      return {
        script: [
          {
            hid: 'prevent-script',
            innerHTML: `
              window.addEventListener("nuxt-booster:run", function (e) {
                if (!e.detail.sufficient) {
                  // added style class to display the content
                  document.querySelector('.stage').classList.add('visible')
                }
              });
            `
          }
        ],
        __dangerouslyDisableSanitizers: [
          'script'
        ]
      };
    }
  };
</script>
```
