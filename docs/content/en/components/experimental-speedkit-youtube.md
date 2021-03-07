---
title: SpeedkitYoutube (Experimental)
description: ''
position: 34
category: Components

features:
  - Lazy Load Integration
  - Automatically generated poster
  - 
---

We have integrated `ExperimentalSpeedkitYoutube` as an example to show how iFrame content must be integrated in a performance-optimized manner.
For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page.
So that no empty space is visible to the user, we use the functionality of the `ExperimentalSpeedkitPicture` and preload the corresponding Youtube poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.

<alert type="warning">`ExperimentalSpeedkitYoutube` is based on the component `ExperimentalSpeedkitPicture`. We hope that with the final completion of [`@nuxt/image`](https://image.nuxtjs.org/) we will be able to modify this component and can use `@nuxt/image` & `NuxtPicture` with full functionality.</alert>

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/experimental/SpeedkitYoutube.vue)

## Usage


```html
<speedkit-youtube id="…" />
```

`SpeedkitYoutube` wird verwendet für das einfache einbinden eines Youtube Videos.

## Features

<list :items="features"></list>

## Properties


```js
{
  id: 'XXXXXXX',
  autoplay: false
}
```

### `id`
- Type: `String`
  - <badge>required</badge>

Legt die Youtube-ID fest.

### `autoplay`
- Type: `Boolean`
  - Default: `false`

Wenn gesetzt, wird wenn die mitte des Viewports erreicht ist, der Player automatisch gestartet.

## Events

```html
<speedkit-picture 
  @ready="console.log('Ready!')" 
  @loading="console.log('Video Loading!')" 
  @playing="console.log('Video Playing!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `ready`

Tritt ein wenn Youtube-Api komplett geladen ist.

### `loading`

Tritt ein wenn Video angefangen wird zu laden.

### `playing`

Tritt ein wenn Video fertiggeladen ist und abspielt.

### `enter`

Tritt ein wenn Komponente den Viewport erreicht hat.



