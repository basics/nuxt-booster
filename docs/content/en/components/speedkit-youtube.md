---
title: SpeedkitYoutube
description: ''
position: 34
category: Components
features:
  - Lazy Load Integration
---

Da das [`ExperimentalSpeedkitYoutube`](http://localhost:3000/components/experimental-speedkit-youtube) noch als experimental gekennzeichnet ist, bieten wir noch die vereinfachte Version namens `SpeedkitYoutube` an. Hier müssen alle Ressourcen, die im Experimental-Modul vollautomatisiert generiert werden, manuell definiert werden.

Bis auf die manuelle Ressourcendefinition für das Poster sind alle weiteren [Features](/components/experimental-speedkit-youtube#features) von [`ExperimentalSpeedkitYoutube`](/components/experimental-speedkit-youtube) deckungsgleich.

## Usage


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
