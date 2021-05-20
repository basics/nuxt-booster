---
title: SpeedkitYoutube
description: ''
position: 34
category: Components
features:
  - Lazy Load Integration
---
> Please note the privacy policy when using. [Google Youtube-API](https://developers.google.com/youtube/v3) is integrated via dependency [`youtube-player`](https://www.npmjs.com/package/youtube-player).

Since the [`SpeedkitYoutube` (Experimental)](/components/experimental-speedkit-youtube) is still marked as experimental, we still offer the simplified version called `SpeedkitYoutube`. Here, all resources that are generated fully automatically in the experimental module must be defined manually.

Except for the manual resource definition for the poster, all other [features](/components/experimental-speedkit-youtube#features) of [`SpeedkitYoutube` (Experimental)](/components/experimental-speedkit-youtube) are identical.

## Usage
The `SpeedkitYoutube` differs from the [`SpeedkitYoutube` (Experimental)](/components/experimental-speedkit-youtube) in the definition of the `poster`.  
A `SpeedkitPicture` must be additionally defined in the `poster` property.

[Learn more about `SpeedkitPicture`](/components/speedkit-picture)

### Example

```vue
<template>
  <div>
    <speedkit-youtube v-bind="youtube" @playing="onPlaying" />
  </div>
</template>

<script>
import SpeedkitYoutube from 'nuxt-speedkit/components/SpeedkitYoutube';
export default {
  components: { SpeedkitYoutube },
  data () {
    return {
      youtube: {
        id: 'youtube-id',
        host: 'https://www.youtube-nocookie.com',
        config: { … },
        poster: {
          placeholders: [
            {
              format: 'jpg',
              url: 'data:image/jpeg;base64,…'
            }
          ],
          sources: [
            {
              format: 'jpg',
              sizes: [
                { width: 414, url: 'poster-414.jpg' },
                { width: 576, media: '(min-width: 576px)', url: 'poster-576.jpg' },
                { width: 768, media: '(min-width: 768px)', url: 'poster-768.jpg' },
                { width: 1024, media: '(min-width: 1024px)', url: 'poster-1024.jpg' },
                { width: 1280, media: '(min-width: 1200px)', url: 'poster-1280.jpg' }
              ]
            },
            {
              format: 'webp',
              sizes: [
                { width: 414, url: 'poster-414.webp') },
                { width: 576, media: '(min-width: 576px)', url: 'poster-576.webp' },
                { width: 768, media: '(min-width: 768px)', url: 'poster-768.webp' },
                { width: 1024, media: '(min-width: 1024px)', url: 'poster-1024.webp' },
                { width: 1280, media: '(min-width: 1200px)', url: 'poster-1280.webp' }
              ]
            }
          ],
          alt: 'Youtube Alt',
          title: 'Youtube Title'
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
```
## Properties

```js
{
  id: 'youtube-id',
  autoplay: false,
  host: 'https://www.youtube-nocookie.com',
  config: { … }
}
```

All properties except `poster` are identical to `SpeedkitYoutube`.

Learn more about [`SpeedkitYoutube` (Experimental) - Properties](/components/experimental-speedkit-youtube#events).

### `poster`
- Type: `Object` The [SpeedkitPicture](/components/speedkit-picture) is used as the configuration.
  - <badge>required</badge>

Poster is displayed as long as the player is not playing.

## Events

More on events at [`SpeedkitYoutube` (Experimental) - Events](/components/experimental-speedkit-youtube#events).
