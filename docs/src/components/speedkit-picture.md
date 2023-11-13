---
title: SpeedkitPicture
---

# {{$frontmatter.title}}

The `SpeedkitPicture` is a `picture` implementation based on the module [`@nuxt/image`](https://image.nuxtjs.org/).  
It uses the provided API `$img`.

## Features

With the current implementation of `SpeedkitPicture` we can cover the following functionality:

- generation of multiple sources with multiple image resolutions (srcset)
- breakpoint-based differentiation of multiple image resolutions and ratios (srcset + media-rule)
- optimized preloading of critical image resources
- lazy load of non-critical image resources
- base path support
- lazy hydration support
- load and optimize remote images from custom domains
- full SEO support

## Usage

The `SpeedkitPicture` is used to automatically generate and display different image sizes and/or image ratios for different viewports.

The specified resources can be given by absolute path (static folder) or complete URL. [`nuxt/image`](https://image.nuxtjs.org/) downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder.

::: warning
Important: For using `SpeedkitPicture` do not disable `@nuxt/image` via `disableNuxtImage`.
:::

### Example

````vue
<template>
  <div>
    <speedkit-picture v-bind="{ sources, title, alt }" @load="onLoadPicture" />
  </div>
</template>

<script setup>
import SpeedkitPicture from '#speedkit/components/SpeedkitPicture';

defineProps({
  sources: {
    type: Object,
    default() {
      return [
        {
          src: '/img/landscape.png',
          sizes: {
            sm: '100vw',
            md: '100vw',
            lg: '100vw',
            xl: '100vw',
            xxl: '100vw'
          },
          media: '(orientation: landscape)'
        },
        {
          src: '/img/portrait.png',
          sizes: { default: '100vw', xxs: '100vw', xs: '100vw' },
          media: '(orientation: portrait)'
        }
      ];
    }
  },
  title: String,
  alt: String
});

const onLoadPicture = () => console.log('Picture loaded!');
</script>

````

## Properties

````js
{
  sources: [ … ],
  formats: ['avif', 'webp', 'jpg|jpeg|png'],
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

The definitions in the `sources` are equivalent to the [`SpeedkitImage (source)`](/components/speedkit-image#source).

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

> Overrides the [`pictureFormats`](/guide/options#pictureformats) property defined in the module options.

Defines the formats that are to be generated and provided as source in the Picture.  
Is used to offer the correct image type for the browser.

::: warning
Formats can also be specified as OR condition (`jpg|jpeg|png|gif`). This is important when using JPGs and PNGs with the same `format` configuration.
:::

### `alt`

- Type: `String`

Image alternative Text.

[MDN - HTMLImageElement.alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `title`

- Type: `String`

Image Title.

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title)

### `crossorigin`

- Type: `String`, `Boolean`

If not set, the global crossorigin is used `this.$speedkit.crossorigin`.

[Learn more about `crossorigin` option](https://nuxt-speedkit.grabarzundpartner.dev/options#crossorigin)

[MDN - HTML.Attributes.crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

### `sortSources`

- Type: `Boolean`
  - Default: `true`

If set, the sources are sorted by the `media` properties.

This is made possible by [`sort-css-media-queries`](https://www.npmjs.com/package/sort-css-media-queries).

### `critical`

- Type: `Boolean`
  - Default: `$parent.isCritical`

Set component as critical component.

[Learn more about critical components](/guide/usage#critical-prop-for-critical-components)

## Events

````html
<speedkit-picture 
  @load="console.log('Loaded!')" 
/>
````

| Name   | Description                                                   |
| ------ | ------------------------------------------------------------- |
| `load` | Triggered when the image resource has been completely loaded. |
