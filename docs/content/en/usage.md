---
title: Usage
description: ''
position: 13
category: Guide
components:
  - "Directive zum anwenden von Fonts"
  - Komponenten mit Lazy funktionialität
developmentSandboxUrl: https://codesandbox.io/embed/github/GrabarzUndPartner/nuxt-speedkit-example/tree/main/?hidenavigation=1&theme=dark

---

The following tools are provided to optimize your webpage:

## Critical prop for critical components

A critical component is visible in the viewport when the web page is initially loaded. This can be communicated to the automated background process via a critical prop. The flag is passed on to all child components. This means that only the main component (organism) must be provided with it. With the help of this flag, the corresponding static resources (images & fonts) are also declared as preload tags in the page head. All other components and their associated resources, that do not have a positive critical prop, are lazy loaded on demand.

```html
<component :critical="true" />
```

<alert type="info">
In the current version, the critical flag must be set manually on the components. Automation would be conceivable in the future. However, according to current knowledge, this would have a massive impact on deployment times when using Puppeteer or similar tools. We are still collecting ideas here. If you know of a more efficient way, please send us a feature request.
</alert>

## Font declaration

The integration of fonts is component-based directly in the Vue template. All fonts, which have been declared in `nuxt.config`, can be assigned directly to the corresponding HTML element or component. In addition, subselectors and media queries can be defined, which enable viewport-based declarations or rich-text declarations. 
The cool thing about this is that it saves the additional declaration in the CSS. You no longer have to keep the template and the CSS with its corresponding selectors for fonts in sync. Yeah! This is extremely helpful, especially when it comes to theming.

```html
<component v-font="$fonts.getFont(…)" />
```

[Learn more](/directives/v-font) about directive `v-font`.

<alert type="warning">
Fonts are no longer declared via CSS with the help of this module. They may even no longer be explicitly defined via CSS, as otherwise the loading behaviour would be negatively affected in the worst case.
</alert>

## Import components

Until now, the components available in the page were always declared via the attribute `components`. The import was done statically (`import component from '@/component';`) or dynamically (`import('@/component')`). `nuxt-speedkit` provides a new attribute named `speedkitComponents` that only allows dynamic imports. This ensures that only the components visible in the viewport are executed on initial load and the remaining components outside the viewport are executed on demand. In the background, the module by [Markus Oberlehner](https://github.com/maoberlehner/vue-lazy-hydration) is used in a standardised way.

```js
{
  speedkitComponents: {
    Stage: () => import('@/components/organisms/Stage'),
  }
}
```

Whether a component is in the viewport or not is determined in the background by the intersection observer. If the initialisation is to take place earlier, e.g. when scrolling, this can be adjusted accordingly via the `rootMargin` option in the <nuxt-link to="/options#components">nuxt.config</nuxt-link>.

<alert type="warning">
Although the attribute "speedkitComponents" can be filled in every component, we recommend its explicit use only in pages and layout. The use within components can only make sense in explicit special cases. Here we recommend the general use of static imports.
</alert>

## Speedkit Components

In order to be able to load further static resources such as pictures, iFrames or Youtube videos in the iFrame in a performance-optimised way, we provide the following components. The speedkit components can be imported via the namespace `nuxt-speedkit/components`.

- [SpeedkitLayer](/components/speedkit-layer)
- [SpeedkitPicture](/components/speedkit-picture)
- [SpeedkitPicture (Experimental)](/components/experimental-speedkit-picture)
- [SpeedkitIframe](/components/speedkit-iframe)
- [SpeedkitYoutube](/components/speedkit-youtube)
- [SpeedkitYoutube (Experimental)](/components/experimental-speedkit-youtube)

```html
<template>
  <speedkit-picture>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture'
export default {
  components: {
    SpeedkitPicture
  }
}
</script>
```

<alert type="info">
The speedkit components will be expanded in the future. If you have explicit wishes, please send us a feature request or directly a pull request with the corresponding feature :)
</alert>

## Example

You can check out a sample integration of `nuxt-speedkit` at [Nuxt Speedkit Example](https://github.com/GrabarzUndPartner/nuxt-custom-speedkit).

<code-sandbox :src="developmentSandboxUrl"></code-sandbox>

## Browser Support

### IE 11

```js

{
  build: {
    transpile: ['@nuxt/image'],
  },

  modules: [
    // Polyfills for IE 11
    // npm i object-fit-images picturefill intersection-observer
    [
      'nuxt-polyfill', {
        features: [
          {
            require: 'object-fit-images',
            detect: () => 'objectFit' in document.documentElement.style,
            install: objectFitImages => (window.objectFitImages = objectFitImages)
          },
          {
            require: 'picturefill',
            detect: () => 'HTMLPictureElement' in window || 'picturefill' in window
          },
          {
            require: 'picturefill/dist/plugins/mutation/pf.mutation.js',
            detect: () => 'HTMLPictureElement' in window || 'picturefill' in window
          },
          {
            require: 'intersection-observer',
            detect: () => 'IntersectionObserver' in window
          }
        ]
      }
    ]]
}

```
