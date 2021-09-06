---
title: Introduction
description: ''
position: 1
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

In order to achieve a performance score of 100/100, only the resources that are necessary in the current viewport may be loaded. Concepts already exist for the loading of javascript components and images.
However, there is not yet a practicable concept for loading fonts dynamically. This module provides a holistic approach to load all necessary resources on demand, including fonts, based on the current viewport.

This module implements the lazy-hydration concept of [Markus Oberlehner](https://github.com/maoberlehner/vue-lazy-hydration) and embeds a [modified version](https://github.com/StephanGerbeth/image) of [nuxt/image](https://github.com/nuxt/image).

## Requirements

<list type="info" :items="requirements"></list>
## Features

<list type="success" :items="features"></list>

## Results

<list type="success" :items="results"></list>
