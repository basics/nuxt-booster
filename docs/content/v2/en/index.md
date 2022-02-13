---
title: Introduction
description: ''
position: 1
version: 2
requirements:
  - NodeJS >= 12.x.x
  - NuxtJS >= 2.15.0
features:
  - dynamic loading of viewport based page resources like fonts (subselectors, media queries), components, pictures
  - optional loading prevention of resources at low bandwidth or weak hardware
  - prevents the loading of unnecessary resources (including components) that are outside the current viewport.
  - optional info layer concept to inform users about a reduced UX when bandwidth or hardware is compromised.
results:
  - delivery of the minimum required resources based on the current viewport
  - if you use the tools as specified you will get a lighthouse performance score of 100/100
---

<!-- <img src="/preview.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/preview-dark.png" class="dark-img" width="1280" height="640" alt=""/> -->
<img src="/intro-light.png" width="1280" height="640" alt=""/>

[Module]() for [NuxtJS](https://nuxtjs.org).

Nuxt Speedkit takes over the lighthouse performance optimization of your generated website.

In order to achieve a performance score of 100/100, only the necessary resources located in the current viewport may be initialized when the page is loaded. This includes images, fonts and the js-modules. Until now, there has been no practical and usable concept to help developers maintain an overview and enable accurate targeting in nuxtJS projects. 

This module addresses this problem and provides a holistic approach to intelligently load the necessary viewport related resources to reduce FCP, DCL, TTI, TBT and CLS.

For this goal we provide the following CMS-friendly features:
- completely new approach of font declaration
  - template related declaration by a directive
  - supports critical load
  - support lazy hydration mode
- full optimized picture component
  - supports critical load
  - supports SEO-friendly lazy hydration mode
  - supports viewport based sources (e.g. landscape/portrait)
  - auto generated modern file formats (avif, Webp, jpg)
  - supports custom loading spinner
- full optimized image component
  - supports critical load
  - supports SEO-friendly lazy hydration mode
  - supports custom loading spinner
- full optimized youtube component
  - auto generated poster image in different resolutions
  - supports lazy hydration mode
  - supports custom loading spinner
- full optimized vimeo component
  - auto generated poster image in different resolutions
  - supports lazy hydration mode
  - supports custom loading spinner
- full optimized load of javascript files
  - elimation of unnecessary javascript files at initial page load
  - optional blocking of javascript execution by initial performance measuring

We have not reinvented everything. We use use the lazy hydration concept of [Markus Oberlehner](https://github.com/maoberlehner/vue-lazy-hydration) to load js components in an efficient way and use the [nuxt/image](https://github.com/nuxt/image) module as a basis for the optimized version of our picture and image component.

## Requirements

<list type="info" :items="requirements"></list>
## Features

<list type="success" :items="features"></list>

## Results

<list type="success" :items="results"></list>
