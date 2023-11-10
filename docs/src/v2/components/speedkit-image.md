---
title: SpeedkitImage

---

# {{$frontmatter.title}}

The `SpeedkitImage` is a `img` implementation based on the module [`@nuxt/image`](https://image.nuxtjs.org/).  
It uses the provided API `$img`.

## Features

With the current implementation of `SpeedkitImage` we can cover the following functionality:

- generation of multiple image resolutions (srcset)
- breakpoint-based differentiation of multiple image resolutions (srcset)
- optimized preloading of critical image resources
- lazy load of non-critical image resources
- base path support
- lazy hydration support
- load and optimize remote images from custom domains
- full SEO support

## Usage

The `SpeedkitImage` is used to automatically generate and display different image sizes for different viewports.

The specified resources can be given by absolute path (static folder) or complete URL. [`nuxt/image`](https://image.nuxtjs.org/) downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder.

::: warning
Important: For using `SpeedkitImage` do not disable `@nuxt/image` via `disableNuxtImage`.
:::

### Example

````vue
<template>
  <div>
    <speedkit-image v-bind="image" @load="onLoadImage"  />
  </div>
</template>

<script>
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
export default {
  components: { SpeedkitImage },
  data () {
    return {
      image: {
        source: { format: 'jpg', src: '/img/image.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } },
        title: 'Image Title',
        alt: 'Image Alt'
      }
    };
  },
  methods: {
    onLoadImage() {
      console.log('Image loaded!');
    }
  }
};
</script>
````

## Properties

````js
{
  source: { … },
  title: 'Image Title',
  alt: 'Image Alt',
  loadingSpinner: new LoadingSpinner( … ),
}
````

### `hydrate`

- Type: `Boolean`
  - Default: `true`

The initialization of the `SpeedkitImage` in the client can be controlled manually.  
Here for the property `hydrate` must be set externally.
If `true` the `SpeedkitImage` is initialized.

### `source`

- Type: `Object`

````js
{
  format: '<output-format>', 
  src: '<file-path|url>', 
  sizes: { … }, 
  modifiers: { … }, 
  preset: { … }, 
  provider: '<provider>'
}
````

#### `format`

Sets the image output format.

Available formats:

- `avif`
- `webp`
- `png`
- `jpg`

::: warning
Important: Note that if you specify `src` without a file extension, the format must be included.
:::

#### `src`

Information on property `src` can be found at [here](https://image.nuxtjs.org/components/nuxt-img#src).

#### `sizes`

Describes the image sizes in which the resource should be displayed. The image `sizes` are passed as an `object` and describe with the key-value pairs the image width and the width of the viewport depending on it, e.g. `ImageWidth:MinWidth`.

The image width, is definied by [`screens`](https://image.nuxtjs.org/api/options#screens) option from `@nuxt/image`

**Example**

In the following example, one image with two different image sizes by breakpoints and output format is `webp`.

````js
[
  { format: 'webp', src: '/img/image.jpg', sizes: { default: '100vw', sm: '100vw' } }
]
````

#### `modifiers`

- Type: `Object`

You can give separate modifiers to each source.
This overwrites the global ones of the preset if available.

Learn more about `modifiers`:

- <https://image.nuxtjs.org/api/options/#presets>

#### `preset`

- Type: `Object`

If a preset is set on a source, the globally defined one is ignored.

This means that a separate preset can be specified for each source.

Learn more about `preset`:

- <https://image.nuxtjs.org/api/$img#imggetsizes>
- <https://image.nuxtjs.org/api/options/#presets>

#### `provider`

- Type: `String`

If a provider is set on a source, the globally defined one is ignored.

This means that a separate provider can be specified for each source.

Learn more about `provider`:

- <https://image.nuxtjs.org/api/$img#imggetsizes>
- <https://image.nuxtjs.org/api/options/#providers>

### `loadingSpinner`

- Type: [`LoadingSpinner`](/v2/classes/loading-spinner)
  - Default: `this.$speedkit.loader()`

Sets a loading spinner definition of type [`LoadingSpinner`](/v2/classes/loading-spinner), this describes the visual appearance of the loading state.

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

[Learn more about `crossorigin` option](/v2/guide/options#crossorigin)

[MDN - HTML.Attributes.crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

### `critical`

- Type: `Boolean`
  - Default: `$parent.isCritical`

Set component as critical component.

[Learn more about critical components](/v2/guide/usage#critical-prop-for-critical-components)

## Events

````html
<speedkit-image 
  @load="console.log('Image Loaded!')" 
/>
````

| Name   | Description                                                   |
| ------ | ------------------------------------------------------------- |
| `load` | Triggered when the image resource has been completely loaded. |
