---
title: Caveats
description: ''
position: 14
category: Guide
---

## `v-font` and custom head

When a `v-font` directive is called in a component with a custom head, the directive specific head settings must be applied in the `head`.

The method `this.$speedkit.head(headAddition)` is provided, it queries the required `head` settings and returns them.

By passing the `headAddition` argument, additional head settings can be applied.

<alert type="warning">`$speedkit.head()` is only available in vue component scope.</alert>

### Example

````html
<template>
  <span v-font="$getFont(…)"></span>
</template>

<script>
  export default {
    head () {
      return this.$speedkit.head({
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
- https://github.com/nuxt/vue-meta/issues/695
## Browser compatibility

You can use `nuxt-speedkit` with **Internet Explorer 11** browser. 

<alert type="info">Note that there is no optimization based on preloads in IE 11.</alert>

You need the following polyfills:

- [`object-fit-images`](https://www.npmjs.com/package/object-fit-images)
- [`picturefill`](https://www.npmjs.com/package/picturefill)
- [`intersection-observer`](https://www.npmjs.com/package/intersection-observer)

The PostCSS Plugin [`postcss-object-fit-images`](https://github.com/ronik-design/postcss-object-fit-images) and following `build.transpile` entries for `@nuxt/image`: 

- `@nuxt/image`
- `image-meta`

For the polyfills, it is recommended to integrate them as a [plugin](https://nuxtjs.org/docs/2.x/directory-structure/plugins), polyfills loading must follow a specific order.

You can see a example with live demo at [Nuxt Speedkit Example](https://github.com/GrabarzUndPartner/nuxt-speedkit-example).

### Example

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

<br>

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

## Prevent `SPEEDINDEX_OF_ZERO ` and `NO_LCP `

The `window` event `nuxt-speedkit:run` is provided which can be used to run code outside the app during initialization.

In the callback it can be checked via `e.detail.success` if the performance of the client was sufficient during initialization.

If `success` equals `true`, it is a client without performance weaknesses.

### Example

Viewport is initially blank and only after initialization start an animation with fade-ins. 

In this case, when measuring with Lighhouse, errors (`SPEEDINDEX_OF_ZERO`, `NO_LCP`) can occur, due to not visible content.

To solve this case, the value `e.detail.success` can be used in the `window` event `nuxt-speedkit:run` to allow content to be faded in via CSS or JS.  
If `success` is equal to `false`.


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
              window.addEventListener("nuxt-speedkit:run", function (e) {
                if (!e.detail.success) {
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

