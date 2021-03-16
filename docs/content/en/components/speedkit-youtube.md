---
title: SpeedkitYoutube
description: ''
position: 34
category: Components
features:
  - Lazy Load Integration
---
> Please note the privacy policy when using. [Google Youtube-API](https://developers.google.com/youtube/v3) is integrated via dependency [`youtube-player`](https://www.npmjs.com/package/youtube-player).

Da das [`SpeedkitYoutube` (Experimental)](/components/experimental-speedkit-youtube) noch als experimental gekennzeichnet ist, bieten wir noch die vereinfachte Version namens `SpeedkitYoutube` an. Hier müssen alle Ressourcen, die im Experimental-Modul vollautomatisiert generiert werden, manuell definiert werden.

Bis auf die manuelle Ressourcendefinition für das Poster sind alle weiteren [Features](/components/experimental-speedkit-youtube#features) von [`SpeedkitYoutube` (Experimental)](/components/experimental-speedkit-youtube) deckungsgleich.

## Usage
Das `SpeedkitYoutube` unterscheidet sich in der Verwendung zum [`SpeedkitYoutube` (Experimental)](#) nur in der definierung des Posters. Es muss in der Eigenschaft `poster`, ein `SpeedkitPicture` zusätzlich definiert werden.

[Learn more about `SpeedkitPicture`](/components/speedkit-picture)

### Example

```vue
<template>
  <div>
    <speedkit-youtube v-bind="youtube" @playing="onPlaying" />
  </div>
</template>

<script>
import SpeedkitYoutube from 'nuxt-speedkit-component/SpeedkitYoutube';
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

Alle Eigenschaften bis auf `poster` sind mit dem `SpeedkitYoutube` identisch.

Learn more about [`SpeedkitYoutube` (Experimental) - Properties](/components/experimental-speedkit-youtube#events).

### `poster`
- Type: `Object` als Konfiguration wird das <nuxt-link to="/components/speedkit-picture">SpeedkitPicture</nuxt-link> verwendet.
  - <badge>required</badge>

Poster wird angezeigt solange Player nicht abspielt.

## Events

Mehr zu Events unter [`SpeedkitYoutube` (Experimental) - Events](/components/experimental-speedkit-youtube#events).
