---
title: BoosterVimeo
---

# {{$frontmatter.title}}

We have integrated `BoosterVimeo`  as an example to show how iFrame content must be integrated in a performance-optimized manner.
For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page.
So that no empty space is visible to the user, we use the functionality of the [`BoosterPicture`](/components/booster-picture) and preload the corresponding Vimeo poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.

## Usage

The `BoosterVimeo` is used to initialise Vimeo videos with [`Vimeo Player-SDK`](https://developer.vimeo.com/player/sdk/).  

> The `Vimeo Player-SDK` is not part of `nuxt-booster` and will be loaded by an external script. [Learn more](https://github.com/basics/nuxt-booster/blob/main/src/runtime/components/BoosterVimeo/utils/loader.js)

The `url` of the Vimeo video must be specified.  

The `BoosterPicture` is used for the poster, so the generation of the poster is automated, you can define the image sources with [`posterSources` (What is posterSources?)](/components/booster-picture#sources).

[Learn more about `BoosterPicture`](/components/booster-picture)

::: warning
Important: For using `BoosterVimeo` do not disable `@nuxt/image` via `disableNuxtImage`
:::

### Example

````vue
<template>
  <div>
    <booster-vimeo
      v-bind="{
        url,
        title,
        options,
        posterSources
      }"
      @playing="onPlaying"
    />
  </div>
</template>

<script setup lang="ts">
import BoosterVimeo from '#booster/components/BoosterVimeo.vue';
import { ref } from 'vue';

const url = ref('<vimeo-url>');
const title = ref('Vimeo Title');
const options = ref({
  controls: false
});
const posterSources = ref([
  {
    src: undefined,
    media: 'all',
    sizes: {
      default: '100vw'
    }
  }
]);

const onPlaying = () => console.log('Vimeo Player playing!');
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
  options: { … },
  posterSources: { … },
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

When set starts video in autoplay. It is required that the component is integrated via [`BoosterHydrate`](/guide/usage#import-components) or is only activated when entering the visible area.

### `mute`

- Type: `Boolean`
  - Default: `false`

When set the player is muted.

### `posterSources`

- Type: `Array`
  - Default: `[
          {
            src: undefined,
            media: 'all',
            sizes: {
              default: '100vw'
            }
          }
        ]`

Sets the image sources of the poster.

::: info
You can overwrite the poster `src` with your own.  
The `src` property is optionally available for this purpose.
:::

[Learn more about `sources`](/components/booster-picture#sources)

Sets the image sizes of the poster.

[Learn more about `sizes`](/components/booster-image#source)

### `options`

- Type: `Object`

Overrides the vimeo player options. These will be the same as the vimeo player embed options.

[Learn more about Vimeo Player Parameters](https://developer.vimeo.com/player/sdk/embed)

::: warning
For `autoplay` and `mute` the component properties are used.

Option `playsinline` is always set, `mute` is set automatically for touch devices.  
This is important for autoplay on mobile devices.
:::

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

| Name              | Description                                                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `default`         | Used to display more information about the video below the player.<br>The slot has a scoped property `videoData`. <br>This contains the result from the Vimeo `oembed` api.<br><br><https://developer.vimeo.com/api/oembed/videos#table-2> |
| `loading-spinner` | Overwrites the loading spinner.                                                                                                                                                                                                            |
| `play`            | Overwrites the play button.                                                                                                                                                                                                                |

## Events

````html
<booster-vimeo 
  @ready="console.log('Player Ready!')" 
  @playing="console.log('Player Playing!')" 
/>
````

| Name           | Description                                              |
| -------------- | -------------------------------------------------------- |
| `ready`        | Triggered when `Vimeo Player-SDK` is completely loaded.  |
| `playing`      | Triggered when video is finished loading and playing.    |
| `beforePlayer` | Used to place elements in the player container (before). |
| `afterPlayer`  | Used to place elements in the player container (after).  |
