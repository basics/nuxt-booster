---
title: SpeedkitYoutube
description: ''
position: 34
category: Components
features:
  - Lazy Load Integration
---

Verwende das `SpeedkitYoutube` anstatt dem [`ExperimentalSpeedkitYoutube`](http://localhost:3000/components/experimental-speedkit-youtube), wenn du keine [`@nuxt/image`](https://image.nuxtjs.org/) Integration verwendest.

## Usage

Es unterscheidet sich nur die Angaben des Poster [`poster`](/components/speedkit-youtube#poster), dieses wurde durch das `SpeedkitPicture` ersetzt, alle weiteren [Features](/components/experimental-speedkit-youtube#features) aus dem [`ExperimentalSpeedkitYoutube`](/components/experimental-speedkit-youtube) bleiben bestehen.
## Properties


```js
{
  id: 'XXXXXXX',
  autoplay: false,
  poster: { … }
}
```

### `id`
- Type: `String`
  - <badge>required</badge>

Legt die Youtube-ID fest.

### `autoplay`
- Type: `Boolean`
  - Default: `false`

Wenn gesetzt, wird wenn die mitte des Viewports erreicht ist, der Player automatisch gestartet.

### `poster`
- Type: `Object` als Konfiguration wird das <nuxt-link to="/components/speedkit-picture">SpeedkitPicture</nuxt-link> verwendet.
  - <badge>required</badge>

Poster wird angezeigt solange Player nicht abspielt.

## Events

Mehr zu Events unter [`ExperimentalSpeedkitYoutube` (Events)](/components/experimental-speedkit-youtube#events).
