---
title: SpeedkitVimeo
description: ''
position: 36
category: Components
---

We have integrated `SpeedkitVimeo`  as an example to show how iFrame content must be integrated in a performance-optimized manner.
For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page.
So that no empty space is visible to the user, we use the functionality of the [`SpeedkitPicture`](/components/speedkit-picture) and preload the corresponding Vimeo poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.

## Usage

The `SpeedkitVimeo`is used to initialise Vimeo videos with [`Vimeo Player-SDK`](https://developer.vimeo.com/player/sdk/).  
<alert>The SDK is not part of `nuxt-speedkit` and will be loaded by an external script.</alert>

The `url` of the Vimeo video must be specified.  

The `SpeedkitPicture` is used for the poster, so the generation of the poster is automated, you can define the image sizes with [`sizes` (What is `sizes`?)](/components/speedkit-image#source). 



[Learn more about `SpeedkitPicture`](/components/speedkit-picture)

### Example

````vue
<template>
  <div>
    <speedkit-vimeo v-bind="vimeo" @playing="onPlaying"  />
  </div>
</template>

<script>
import SpeedkitVimeo from 'nuxt-speedkit/components/SpeedkitVimeo';
export default {
  components: { SpeedkitVimeo },
  data () {
    return {
      vimeo: {
        url: '<vimeo-url>',
        title: 'Vimeo Title',
        loadingSpinner: undefined,
        options: {
          controls: false // use boolean instead of 0 or 1
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
      console.log('Vimeo Player playing!');
    }
  }
};
</script>
````

## Properties

````js
{
  url: '<vimeo-url>',
  title: 'Player Title',
  autoplay: false,
  mute: false,
  posterSizes: { … },
  options: { … }
}
````

### `url`
- Type: `String`

Sets a video via the vimeo url.
 
### `title`
- Type: `String`

Sets the title for the player iframe and poster.

### `autoplay`
- Type: `Boolean`
  - Default: `false`

When set starts video in autoplay. It is required that the component is integrated via [`SpeedkitLoader`](/usage#import-components) or is only activated when entering the visible area.

### `mute`
- Type: `Boolean`
  - Default: `false`

When set the player is muted.

### posterLoadingSpinner
- Type: [`LoadingSpinner`](#)
  - Default: `undefined`

Sets a loading spinner definition of type [`LoadingSpinner`](#), this describes the visual appearance of the loading state of the `SpeedkitImage` contained in the `SpeedkitPicture`.

### `posterSizes`
- Type: `String`
  - Default: `{ default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }`

Sets the image sizes of the poster.

[Learn more about `sizes`](/components/speedkit-image#source)

### `options`
- Type: `Object`

Overrides the vimeo player options. These will be the same as the vimeo player embed options.

Use `boolean` values instead of integers (e.g. `0`, `1`).

[Learn more about Vimeo Player Parameters](https://developer.vimeo.com/player/sdk/embed)

<alert type="warning">

For `autoplay` and `mute` the component properties are used.

Option `playsinline` is always set, `mute` is set automatically for touch devices.  
This is important for autoplay on mobile devices.

</alert>

## Slots

````html
<template #default="{ videoData }">
  {{videoData.title}}
</template>

<template #loading-spinner>
  Loading…
</template>

<template #play>
  <span>Click!</span>
</template>
````

| Name              | Description                                                                                                                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`         | Used to display more information about the video below the player.<br>The slot has a scoped property `videoData`. <br>This contains the result from the Vimeo `oembed` api.<br><br>https://developer.vimeo.com/api/oembed/videos#table-2 |
| `loading-spinner` | Overwrites the loading spinner.                                                                                                                                                                                                          |
| `play`            | Overwrites the play button.                                                                                                                                                                                                              |


## Events

````html
<speedkit-vimeo 
  @ready="console.log('Player Ready!')" 
  @playing="console.log('Player Playing!')" 
/>
````

| Name      | Description                                             |
| --------- | ------------------------------------------------------- |
| `ready`   | Triggered when `Vimeo Player-SDK` is completely loaded. |
| `playing` | Triggered when video is finished loading and playing.   |
