---
title: SpeedkitYoutube
description: ''
position: 335
category: Components
---

We have integrated `SpeedkitYoutube`  as an example to show how iFrame content must be integrated in a performance-optimized manner.
For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page.
So that no empty space is visible to the user, we use the functionality of the [`SpeedkitPicture`](/components/speedkit-picture) and preload the corresponding Youtube poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.

## Usage

The `SpeedkitYoutube`is used to initialise Youtube videos with [Youtube Iframe-API](https://developers.google.com/youtube/iframe_api_reference?hl=de).

The `url` of the Youtube video must be specified.  

The `SpeedkitPicture` is used for the poster, so the generation of the poster is automated, you can define the image sizes with [`sizes` (What is `sizes`?)](/components/speedkit-picture#sources). 

[Learn more about `SpeedkitPicture`](/components/speedkit-picture)

<alert type="warning">Important: For using `SpeedkitYoutube` do not disable `@nuxt/image` via `disableNuxtImage`.</alert>

### Example

````vue
<template>
  <div>
    <speedkit-youtube v-bind="youtube" @playing="onPlaying"  />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitYoutube';
export default {
  components: { SpeedkitPicture },
  data () {
    return {
      youtube: {
        url: '<youtube-url>',
        title: 'Youtube Title',
        loadingSpinner: undefined,
        host: 'https://www.youtube.com',
        options: {
          fs: false // use boolean instead of 0 or 1
        },
        posterSizes: {
          default: '100vw',
          md: '50vw'
        }
      }
    };
  },
  methods: {
    onPlaying () {
      console.log('Youtube Player playing!');
    }
  }
};
</script>
````


## Properties

````js
{
  url: '<youtube-url>',
  title: 'Player Title',
  autoplay: false,
  mute: false,
  posterSizes: { … },
  options: { … }
}
````

### `url`
- Type: `String`

Sets a video via the youtube url.
 
### `title`
- Type: `String`

Sets the title for the player iframe and poster.

### `autoplay`
- Type: `Boolean`
  - Default: `false`

When set starts video in autoplay. It is required that the component is integrated via [`SpeedkitHydrate`](/usage#import-components) or is only activated when entering the visible area.

### `mute`
- Type: `Boolean`
  - Default: `false`

When set the player is muted.

### `posterLoadingSpinner`
- Type: [`LoadingSpinner`](/classes/loading-spinner)
  - Default: `undefined`

Sets a loading spinner definition of type [`LoadingSpinner`](/classes/loading-spinner), this describes the visual appearance of the loading state of the `SpeedkitImage` contained in the `SpeedkitPicture`.

### `posterSizes`
- Type: `String`
  - Default: `{ default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }`

Sets the image sizes of the poster.

[Learn more about `sizes`](/components/speedkit-picture#sources)

### `options`
- Type: `Object`

Overrides the youtube player options. These will be the same as the youtube player parameters.

Use `boolean` values instead of integers (e.g. `0`, `1`).

[Learn more about Youtube Player Parameters](https://developers.google.com/youtube/player_parameters#Parameters)

<alert type="warning">

For `autoplay` and `mute` the component properties are used.

Option `playsinline` is always set, `mute` is set automatically for touch devices.  
This is important for autoplay on mobile devices.

</alert>

### `host`
- Type: `String`
  - default: `'https://www.youtube-nocookie.com'`

Sets the host for the player.

<alert>It is recommended to use the default (https://www.youtube-nocookie.com).</alert>

## Slots

````html
<template #loading-spinner>
  Loading…
</template>

<template #play>
  <span>Click!</span>
</template>
````

| Name              | Description                     |
| ----------------- | ------------------------------- |
| `loading-spinner` | Overwrites the loading spinner. |
| `play`            | Overwrites the play button.     |

## Events

````html
<speedkit-youtube 
  @ready="console.log('Player Ready!')" 
  @playing="console.log('Player Playing!')" 
/>
````

| Name      | Description                                           |
| --------- | ----------------------------------------------------- |
| `ready`   | Triggered when `Youtube-API` is completely loaded.    |
| `playing` | Triggered when video is finished loading and playing. |
