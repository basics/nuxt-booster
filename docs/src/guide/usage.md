---
title: Usage
---

# {{$frontmatter.title}}

The following tools are provided to optimize your webpage:

## Critical prop for critical components

A critical component is visible in the viewport when the web page is initially loaded. This can be communicated to the automated background process via a critical prop. The flag is passed on to all child components. This means that only the main component (organism) must be provided with it. With the help of this flag, the corresponding static resources (images & fonts) are also declared as preload tags in the page head. All other components and their associated resources, that do not have a positive critical prop, are lazy loaded on demand.

````html
<component critical />
````

::: info
In the current version, the critical flag must be set manually on the components. Automation would be conceivable in the future. However, according to current knowledge, this would have a massive impact on deployment times when using Puppeteer or similar tools. We are still collecting ideas here. If you know of a more efficient way, please send us a feature request.
:::

## Font declaration

The integration of fonts is component-based directly in the Vue template. All fonts, which have been declared in `nuxt.config`, can be assigned directly to the corresponding HTML element or component. In addition, subselectors and media queries can be defined, which enable viewport-based declarations or rich-text declarations.
The cool thing about this is that it saves the additional declaration in the CSS. You no longer have to keep the template and the CSS with its corresponding selectors for fonts in sync. Yeah! This is extremely helpful, especially when it comes to theming.

````html
<element v-font="$getFont(…)" />
````

[Learn more](/directives/v-font) about directive `v-font`.

::: warning
Fonts are no longer explicitly defined via CSS, otherwise the loading behavior of the fonts cannot be controlled and an optimized loading behavior of the page can no longer be guaranteed.
:::

## Import components

Until now, components were imported either statically (`import component from '@/component';`) or dynamically (`import('@/component')`). However, with these two variants, hydration cannot be controlled. As a result, all components are also initialized on initial load. `nuxt-speedkit` offers a corresponding loader for this feature request. Each async component import should be enclosed with this loader in a page or layout.

- 'Ensures that components are initialized only when needed in the visible viewport.'
- 'Optimizes initialization of critical components on initial page load (critical components are initially in the visible viewport).'

In the background, the module [`vue3-lazy-hydration`](https://github.com/freddy38510/vue3-lazy-hydration) inspired by `vue-lazy-hydration` from [Markus Oberlehner](https://github.com/maoberlehner/vue-lazy-hydration) is used in a standardised way.

````js
import speedkitHydrate from '#speedkit/hydrate';

export default {
  components: {
    Stage: speedkitHydrate(() => import('@/components/organisms/Stage')),
  }
};
````

Whether a component is in the viewport or not is determined in the background by the intersection observer. If the initialisation is to take place earlier, e.g. when scrolling, this can be adjusted accordingly via the `rootMargin` option in the [nuxt.config](/guide/options#lazyoffset).

::: warning
Although the <code>#speedkit/hydrate</code> function can be used in any component, we recommend its explicit use only in pages and layout. Its use within components can be useful only in explicit special cases.  Here we recommend the general use of static imports.
:::

::: info
With <code>NODE-ENV (development)</code>, the components are included directly. <br>This is relevant for the hot reload of the imported vue files.
:::

## Speedkit Components

In order to be able to load further static resources such as pictures, iFrames or Vimeo/Youtube videos in the iFrame in a performance-optimised way, we provide the following components. The speedkit components can be imported via the namespace `#speedkit/components`.

- [SpeedkitLayer](/components/speedkit-layer)
- [SpeedkitPicture](/components/speedkit-picture)
- [SpeedkitImage](/components/speedkit-image)
- [SpeedkitIframe](/components/speedkit-iframe)
- [SpeedkitVimeo](/components/speedkit-vimeo)
- [SpeedkitYoutube](/components/speedkit-youtube)

````html
<template>
  <speedkit-picture>
</template>

<script>
import SpeedkitPicture from '#speedkit/components/SpeedkitPicture'
export default {
  components: {
    SpeedkitPicture
  }
}
</script>
````

::: info
The speedkit components will be expanded in the future. If you have explicit wishes, please send us a feature request or directly a pull request with the corresponding feature :)
:::

## Example

You can check out a sample integration of `nuxt-speedkit` at [Nuxt Booster Example](https://github.com/GrabarzUndPartner/nuxt-speedkit-example).

<iframe class="embed-sandbox" src="//codesandbox.io/embed/github/GrabarzUndPartner/nuxt-speedkit-example/tree/main/?hidenavigation=1&theme=dark"></iframe>
