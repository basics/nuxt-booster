---
title: SpeedkitPicture
description: ''
position: 32
category: Components
features:
  - generation of multiple sources with multiple image resolutions (srcset)
  - breakpoint-based differentiation of multiple image resolutions and ratios (srcset + media-rule)
  - optimized preloading of critical image resources
  - lazy load of non-critical image resources
  - base path support
  - lazy hydration support
  - load and optimize remote images from custom domains
  - full SEO support

---

The `SpeedkitPicture` is a `picture` implementation based on the module [`@nuxt/image`](https://image.nuxtjs.org/).  
It uses the provided API `$img`.

## Features

With the current implementation of `SpeedkitPicture` we can cover the following functionality:

<list :items="features"></list>

## Usage

The `SpeedkitPicture` is used to automatically generate and display different image sizes and/or image ratios for different viewports.

The specified resources can be given by absolute path (static folder) or complete URL. [`nuxt/image`](https://image.nuxtjs.org/) downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder.

### Example

````vue
<template>
  <div>
    <speedkit-picture v-bind="picture" @load="onLoadPicture"  />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  data () {
    return {
      picture: {
        sources: [
          { src: '/img/landscape.png', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
          { src: '/img/portrait.png', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
        ],
        title: 'Image Title',
        alt: 'Image Alt'
      }
    };
  },
  methods: {
    onLoadPicture() {
      console.log('Picture loaded!');
    }
  }
};
</script>
````

## Properties

````js
{
  sources: [ … ],
  formats: ['avif', 'webp', 'jpg|jpeg|png'],
  loadingSpinner: new LoadingSpinner( … ),
  alt: 'Image Alt',
  title: 'Image Title',
}
````

### `hydrate`
- Type: `Boolean`
  - Default: `true`

The initialization of the `SpeedkitPicture` in the client can be controlled manually.  
Here for the property `hydrate` must be set externally.
If `true` the `SpeedkitPicture` is initialized.

### `sources`
- Type: `Array`

List of resources used.

The definitions in the `sources` are equivalent to the [`SpeedkitImage (source)` ](/components/speedkit-image#source).

The only differences are:
- The `media` property can be used. This allows even more dependencies for the display, e.g. `(orientation: portrait)`.
- The `format` property is not used. Instead `formats` is used for setting the output formats.

**Example**

In the following example, two different image ratios are used.

- `landscape.jpg` is applied at a viewport of `996px` with an image size of `996px (100vw)` by orientation `landscape`.  
- `portrait.jpg` is applied below `768px` and has two viewport dependent image sizes, at `(min-width: 768px)` the width `768px` and everything below that the width `320px` by orientation `portrait`

````js
[
  { src: '/img/landscape.png', sizes: { md: '100vw' }, media: '(orientation: landscape)' },
  { src: '/img/portrait.png', sizes: { default: '100vw', sm: '100vw' }, media: '(orientation: portrait)' }
]
````

### `formats`
- Type: `Array`
  - Default: `['webp', 'avif', 'jpg|jpeg|png|gif']`

> Overrides the [`pictureFormats`](/options#pictureformats) property defined in the module options.

Defines the formats that are to be generated and provided as source in the Picture.  
Is used to offer the correct image type for the browser.

<alert type="warning">Formats can also be specified as OR condition (`jpg|jpeg|png|gif`). This is important when using JPGs and PNGs with the same `format` configuration.</alert>

### `loadingSpinner`
- Type: [`LoadingSpinner`](/classes/loading-spinner)
  - Default: `undefined`

Sets a loading spinner definition of type [`LoadingSpinner`](/classes/loading-spinner), this describes the visual appearance of the loading state of the `SpeedkitImage` contained in the `SpeedkitPicture`.

### `alt`
- Type: `String`

Image alternative Text. 

[MDN - HTMLImageElement.alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `title`
- Type: `String`

Image Title. 

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title)

### `critical`
- Type: `Boolean`
  -  Default: `$parent.isCritical`

Set component as critical component. 

[Learn more about critical components](/usage#critical-prop-for-critical-components)


## Events

````html
<speedkit-picture 
  @load="console.log('Loaded!')" 
/>
````

| Name   | Description                                                   |
| ------ | ------------------------------------------------------------- |
| `load` | Triggered when the image resource has been completely loaded. |
