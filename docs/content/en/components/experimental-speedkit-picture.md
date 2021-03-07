---
title: SpeedkitPicture (Experimental)
description: ''
position: 32
category: Components

features:
  - generation of multiple image resolutions (srcset)
  - breakpoint-based differentiation of multiple image resolutions and ratios (srcset + media-rule)
  - generation of breakpoint-based placeholders (different ratios e.g. for mobile portrait and landscape)
  - optimized preloading of critical image resources
  - lazy load of non-critical image resources
  - base path support
  - lazy hydration support
  - load and optimize remote images from custom domains
  - full SEO support

---

`SpeedkitPicture` is based on the module "@nuxt/image@0.2.0". However, we have created a separate Vue component for it, because at the time of the implementation of the module the component `NuxtPicture` and the API for generating the images were not yet completely finished, or this module did not yet completely cover our use-case. We hope that with the final completion of [`@nuxt/image`](https://image.nuxtjs.org/) we will be able to remove our component `SpeedkitPicture` and can use `@nuxt/image` & `NuxtPicture` with full functionality.

<alert type="warning">This is an experimental component that we will offer until `@nuxt/image` is fully feature-complete released. This also means that we will accept bug reports for the `SpeedkitPicture` component. However, we will not fix bugs that are present in the generator of `@nuxt/image`.</alert>

## Features

With the current implementation of `SpeedkitPicture` we can cover the following functionality:

<list :items="features"></list>

## Usage

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/experimental/SpeedkitPicture.vue)

```html
<speedkit-picture src="…" />
```

## Properties

```js
{
  sources: […],
  alt: 'Image Alt',
  title: 'Image Title',
  crossorigin: 'anonymous'
}
```


### `sources`
- Type: `Array`

Liste der im Picture enthaltenen Sourcen.


```js
[
  { src: 'portrait.jpg', sizes: '299,300:599,600:899,900:1199' },
  { src: 'landscape.jpg', sizes: '1200:1599,1600:1899,1900:1920' }
]
```

| Key     | Type     | Required | Value                                                                                         |
| ------- | -------- | -------- | --------------------------------------------------------------------------------------------- |
| `src`   | `String` | yes      | Url zum Bild                                                                                  |
| `sizes` | `String` | yes      | Komma Separatierte angabe von Ziel Bildgrößen mit angabe des Viewports. e.g. `Width:MinWidth` |


#### 

### `alt`
- Type: `String`

Image alternative Text. 

[MDN - HTMLImageElement.alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `title`
- Type: `String`

Image Title. 

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title)

### `crossorigin`
- Type: `String`
  - default: `anonymus`

Image CrossOrigin. 

[MDN - HTMLImageElement.crossOrigin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin)

## Events

```html
<speedkit-picture 
  @load="console.log('Loaded!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `load`

Tritt ein wenn Bild Resource komplett geladen wurde.

### `enter`

Tritt ein wenn Komponente den Viewport erreicht hat.

