---
outline: deep
title: Introduction
---

<img class="poster-dark" src="/poster-dark.jpg" width="1280" height="640" alt="nuxt booster" title="nuxt booster"/>
<img class="poster-light" src="/poster-light.jpg" width="1280" height="640" alt="nuxt booster" title="nuxt booster"/>

[Module](https://www.npmjs.com/package/nuxt-booster) for [NuxtJS](https://nuxtjs.org).

::: tip You are reading the documentation for Nuxt Booster (v3)!

- **Nuxt Booster (v2)** documentation has been moved to [basics.github.io/nuxt-boosterv/v2/](https://basics.github.io/nuxt-booster/v2/).  
- Upgrading from **Nuxt Booster (v2)** ? Check out the [Migration Guide](/migration/v3).
:::

**Nuxt Booster** takes over the lighthouse performance optimization of your generated website.

In order to achieve a performance score of 100/100, only the necessary resources located in the current viewport may be initialized when the page is loaded. This includes images, fonts and the js-modules. Until now, there has been no practical and usable concept to help developers maintain an overview and enable accurate targeting in NuxtJS projects.

This module addresses this problem and provides a holistic approach to intelligently load the necessary viewport related resources to reduce FCP, DCL, TTI, TBT and CLS.

We didn't reinvent the whole wheel. We adapt the lazy hydration concept of [Markus Oberlehner](https://github.com/maoberlehner/vue-lazy-hydration) to load js components in an efficient way, use the [nuxt/image](https://github.com/nuxt/image) module as a base to retrieve optimized image resolutions for our picture and image components and add some new stuff to obtain a holistic solution.

## Requirements

- NodeJS `>= 19`
- NuxtJS `>= 3.5.0`

## Features

We provide the following CMS-friendly features:

- dynamic loading of viewport based page resources like fonts, components, pictures, images and iframes
- optional blocking of javascript execution by initial performance measuring
- optimized initial load of javascript files by eliminating of unnecessary javascript files
- prevents the loading of unnecessary resources (including components) that are outside the current viewport.
- optional info layer concept to inform users about a reduced UX when bandwidth or hardware is compromised.  
- completely new approach of font declaration
- optimized picture component (supports viewport based sources e.g. landscape/portrait)
- optimized image component
- supports SEO-friendly lazy hydration mode (picture + image)
- optimized youtube/vimeo component (auto generated poster image in different resolutions)

## Results

- delivery of the minimum required resources based on the current viewport
- if you use the tools as specified you will get a lighthouse performance score of 100/100

## Demos

- [Nuxt Booster Example](https://basics.github.io/nuxt-booster/playground/) ([Lighthouse](https://pagespeed.web.dev/report?url=https%3A%2F%2Fbasics.github.io/nuxt-booster%2Fplayground%2F))
