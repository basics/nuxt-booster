---
title: SpeedkitYoutube (Experimental)
description: ''
position: 33
category: Components
---

> Please note the privacy policy when using. [Google Youtube-API](https://developers.google.com/youtube/v3) is integrated via dependency [`youtube-player`](https://www.npmjs.com/package/youtube-player).

We have integrated `SpeedkitYoutube` (Experimental) as an example to show how iFrame content must be integrated in a performance-optimized manner.
For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page.
So that no empty space is visible to the user, we use the functionality of the [`SpeedkitPicture` (Experimental)](/components/experimental-speedkit-picture) and preload the corresponding Youtube poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.

<alert type="warning">`SpeedkitYoutube` (Experimental) is based on the component [`SpeedkitPicture` (Experimental)](/components/experimental-speedkit-picture). We hope that with the final completion of [`@nuxt/image`](https://image.nuxtjs.org/) we will be able to modify this component and can use `@nuxt/image` & `NuxtPicture` with full functionality.</alert>

## Usage

Das `SpeedkitYoutube` (Experimental) wird verwendet um Youtube Videos mit Youtube-API erst zu initialisieren, wenn diese sich im sichtbaren Viewport befinden.

Es muss die `id` des Youtube-Videos und die passenden Viewport abhängiigen Breiten in [`sizes` (What is `sizes`?)](/components/experimental-speedkit-picture#sources) angegeben werden. 
Für das Poster wird das `SpeedkitPicture` (Experimental) verwendet, die generierung des Poster ist somit automatisiert.

[Learn more about `SpeedkitPicture` (Experimental)](/components/experimental-speedkit-picture)

### Example

```vue
<template>
  <div>
    <speedkit-youtube v-bind="youtube" @playing="onPlaying"  />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit-component/experimental/SpeedkitYoutube';
export default {
  components: { SpeedkitPicture },
  data () {
    return {
      youtube: {
        id: 'youtube-id',
        host: 'https://www.youtube-nocookie.com',
        config: { … },
        poster: {
          sources: [
            { src: 'poster.jpg', sizes: '414,768:768,576:576,1024:1024,1280:1280,1680:1680,1920:1920' },
          ],
          title: 'Image Title',
          alt: 'Image Alt'
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

### `id`
- Type: `String`
  - <badge>required</badge>

Legt die Youtube-ID fest.

### `sizes`
- Type: `String`
  - Default: `undefined`

Definiert die Viewport abhängigen Bildgrößen für das Poster.

Wenn `undefined` wird die Bildgröße von Youtube-THumbnail verwendet (e.g. `https://img.youtube.com/vi/${id}/maxresdefault.jpg`).

### `autoplay`
- Type: `Boolean`
  - Default: `false`

Wenn gesetzt, wird bei erreichen der Viewport mitte, der Player automatisch gestartet.

### `host`
- Type: `String`
  - Default: `https://www.youtube-nocookie.com`

Setzt die Host-Url für den Youtube-Player.

### `config`
- Type: `Object`
  - Default: `{ playsinline: 1, modestbranding: 1 }`

Setzt die Youtube-Player Konfiguration. 

[Learn more about Youtube Player Parameters](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5)

## Events

```html
<speedkit-picture 
  @ready="console.log('Ready!')" 
  @loading="console.log('Video Loading!')" 
  @playing="console.log('Video Playing!')" 
  @enter="console.log('Viewport!')" 
/>
```

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| `ready`   | Tritt ein wenn Youtube-Api komplett geladen ist.     |
| `loading` | Tritt ein wenn Video angefangen wird zu laden.       |
| `playing` | Tritt ein wenn Video fertiggeladen ist und abspielt. |
| `enter`   | Tritt ein wenn Komponente den Viewport erreicht hat. |
