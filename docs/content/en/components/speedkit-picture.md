---
title: SpeedkitPicture
description: ''
position: 32
category: Components
---

Since the [`SpeedkitPicture` (Experimental)](/components/experimental-speedkit-picture) is still marked as experimental, we still offer the simplified version called `SpeedkitPicture`. Here, all resources that are generated fully automatically in the experimental module must be defined manually.

Except for the manual resource definition, all other [features](/components/experimental-speedkit-picture#features) of [`SpeedkitPicture` (Experimental)](/components/experimental-speedkit-picture) are identical.

## Usage

Without using [`@nuxt/image`](https://image.nuxtjs.org/), all **sources** and **placeholders** must be specified.

Examples for defining the resources can be found in the [example](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/example/pages/index.vue) of the module.

<alert>**Think about the optimisation of the images!**<br> If possible, use the format `webp`, analog to the existing `jpg` files and make sure that the images are optimised.
</alert>

### Example

```vue
<template>
  <div>
    <speedkit-picture v-bind="image" />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  data () {
    return {
      image: {
        placeholders: [
          {
            media: '(min-width: 768px)',
            format: 'jpg',
            url: 'data:image/jpeg;base64,…' // landscape
          },
          {
            format: 'jpg',
            url: 'data:image/jpeg;base64,…' // portrait
          }
        ],
        sources: [
          {
            media: '(min-width: 768px)',
            format: 'webp',
            sizes: [
              { width: 768, media: '(min-width: 768px)', url: '768.webp' },
              { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
            ]
          },
          {
            media: '(min-width: 768px)',
            format: 'jpg',
            sizes: [
              { width: 768, media: '(min-width: 768px)', url: '768.jpg' },
              { width: 1024, media: '(min-width: 1024px)', url: '1024.jpg' }
            ]
          },
          {
            format: 'webp',
            sizes: [
              { width: 414, media: 'all', url: '414.webp' }
            ]
          },
          {
            format: 'jpg',
            sizes: [
              { width: 414, media: 'all', url: '414.jpg' }
            ]
          }
        ],
        alt: 'Image Alt',
        title: 'Image Title',
        crossorigin: 'anonymous'
      }
    };
  }
};
</script>
```
## Properties

All properties except [`sources`](/components/speedkit-picture#sources) and [`placeholders`](/components/speedkit-picture#placeholders) are identical to the `SpeedkitPicture` (Experimental).

Learn more about [`ExperimentalSpeedkitPicture` - Properties](/components/experimental-speedkit-picture#properties).

### `sources`
- Type: `Array`

Contains resources that are to be displayed depending on the viewport.

```js
[
  {
    media: '(min-width: 768px)',
    format: 'webp',
    sizes: [
      { width: 768, media: '(min-width: 768px)', url: '768.webp' },
      { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
    ]
  },
  {
    media: '(min-width: 768px)',
    format: 'jpg',
    sizes: [
      { width: 768, media: '(min-width: 768px)', url: '768.jpg' },
      { width: 1024, media: '(min-width: 1024px)', url: '1024.jpg' }
    ]
  },
  {
    format: 'webp',
    sizes: [
      { width: 414, media: 'all', url: '414.webp' }
    ]
  },
  {
    format: 'jpg',
    sizes: [
      { width: 414, media: 'all', url: '414.jpg' }
    ]
  }
]
```

Each source in the list describes a file format with its viewport dependent image sizes.

Property `sizes` is used to define the viewport dependent image sizes and `media` is used to display different aspect ratios depending on the viewport.  



| Key      | Type     | Required | Value                                                         | Default |
| -------- | -------- | -------- | ------------------------------------------------------------- | ------- |
| `sizes`  | `Array`  | yes      | Describes the different image sizes.                          | `[]`    |
| `format` | `String` | yes      | Image format of the specified resource, e.g. `webp`, `jpg`, … |         |
| `media`  | `String` |          | CSS Media Query e.g. `(min-width: 768px)`                     |         |


<alert>`media` can be used for breakpoint specific aspect ratios.</alert>


```js
{
  media: '(min-width: 768px)',
  format: 'webp',
  sizes: [
    { width: 768, media: '(min-width: 768px)', url: '768.webp' },
    { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
  ]
}
```

```js
{ 
  width: 768, 
  media: '(min-width: 768px)', 
  url: '768.webp' 
}
```
The size object in `sizes` describes the different image sizes for the respective breakpoints.

From the list `sizes`, the `srcset` & `sizes` is generated.

More about [`HTMLImageElement.srcset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) & [`HTMLImageElement.sizes`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes)


`url` and `width` are applied in `srcset` (e.g. `srcset="image.jpg 768w"`).  
`media` is applied in `sizes` for media query to width (e.g. `sizes="(min-width: 768px) 768px"`). 

| Key     | Required | Value                                       | Default     |
| ------- | -------- | ------------------------------------------- | ----------- |
| `url`   | yes      | Absolute Path to the ressource.             |             |
| `width` |          | Viewport width as `Number` (e.g. `768`)     | `undefined` |
| `media` |          | CSS Media Query (e.g. `(min-width: 768px)`) | `undefined` |

<alert>**Important:** The `url` specification is absolute. If an alias is used (e.g. `@/assets/img/image.jpg`), the path must be resolved by `require` (e.g. `url: require('@/assets/img/image.jpg')`).</alert>

**Example**

```js
[
  { width: 768, media: '(min-width: 768px)', url: '768.webp' },
  { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
]
```

### `placeholders`
- Type: `Array`

Describes the placeholders that are displayed as long as no resources have been loaded.

It is possible to define different image ratios for the placeholders via the `media` property.

<alert type="warning">Make sure that the placeholders have a width of `30px` and are optimized.</alert>


| Key      | Type     | Required | Value                                                         |
| -------- | -------- | -------- | ------------------------------------------------------------- |
| `url`    | `String` | yes      | Url or Base64 of an image.                                    |
| `format` | `String` | yes      | Image format of the specified resource. e.g. `webp`, `jpg`, … |
| `media`  | `String` |          | CSS Media Query e.g. `(min-width: 768px)`                     |

```js
[
  {
    media: '(min-width: 768px)',
    format: 'jpg',
    url: 'landscape.jpg' // base64 or url
  },
  {
    format: 'jpg',
    url: 'portrait.jpg' // base64 or url
  }
]
```

## Events

More on events at [`SpeedkitPicture` (Experimental) - Events](/components/experimental-speedkit-picture#events).
