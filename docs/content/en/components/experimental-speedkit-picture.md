---
title: SpeedkitPicture (Experimental)
description: ''
position: 31
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

`SpeedkitPicture` is based on the module `@nuxt/image@0.2.0`. However, we have created a separate Vue component for it, because at the time of the implementation of the module the component `NuxtPicture` and the API for generating the images were not yet completely finished, or this module did not yet completely cover our use-case. We hope that with the final completion of [`@nuxt/image`](https://image.nuxtjs.org/) we will be able to remove our component `SpeedkitPicture` and can use `@nuxt/image` & `NuxtPicture` with full functionality.

<alert type="warning">This is an experimental component that we will offer until [`nuxt/image`](https://image.nuxtjs.org/) is fully feature-complete released. This also means that we will accept bug reports for the `SpeedkitPicture` component. However, we will not fix bugs that are present in the generator of `@nuxt/image`.</alert>

## Features

With the current implementation of `SpeedkitPicture` we can cover the following functionality:

<list :items="features"></list>

## Usage

The `SpeedkitPicture` (Experimental) is used to automatically generate and display different image sizes and/or image ratios for different viewports.

The specified resources can be given by absolute path (static folder) or complete URL. [`nuxt/image`](https://image.nuxtjs.org/) downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder.

### Example

```vue
<template>
  <div>
    <speedkit-picture v-bind="image" />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/experimental/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  data () {
    return {
      image: {
        sources: [
          { src: 'landscape.jpg', sizes: '576:576,1024:1024,1280:1280,1680:1680,1920:1920' },
          { src: 'portrait.jpg', sizes: '414,768:768' }
        ],
        title: 'Image Title',
        alt: 'Image Alt'
      }
    };
  }
};
</script>
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

List of resources used.

<alert><strong>Note:</strong> If more than one resource is included, the smallest width from the `sizes` property is taken as the condition for the source e.g. `(min-width: 992px)`.
This allows viewport dependent aspect ratios.</alert>

Information on property `src` can be found at [here](https://image.nuxtjs.org/components/nuxt-img#src).

Property `sizes` describes the image sizes in which the resource is to be displayed. Image sizes are comma separated and describe the image width and its dependent viewport width e.g. `ImageWidth:MinWidth`.

In the following example, two different image ratios are used.

- `landscape.jpg` is applied at a viewport of `992px` with an image size of `1024px`.  
- `portrait.jpg` is applied below `992px` and has two viewport dependent image sizes, at `(min-width: 768px)` the width `768px` and everything below that the width `414px`.

```js
[
  
  { src: 'landscape.jpg', sizes: '992:1024' },
  { src: 'portrait.jpg', sizes: '414,768:768' }
]
```
#### 

### `critical`
- Type: `Boolean`
  -  Default: `$parent.isCritical`

Set component as critical component. 

[Learn more about critical components](/usage#critical-prop-for-critical-components)

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

| Name    | Description                                                   |
| ------- | ------------------------------------------------------------- |
| `load`  | Triggered when the image resource has been completely loaded. |
| `enter` | Triggered when component has reached the viewport.            |
