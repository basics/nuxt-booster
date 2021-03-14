---
title: SpeedkitYoutube
description: ''
position: 34
category: Components
features:
  - Lazy Load Integration
---
> Please note the privacy policy when using. [Google Youtube-Api](https://developers.google.com/youtube/v3) is integrated via dependency [`youtube-player`](https://www.npmjs.com/package/youtube-player).

Da das [`SpeedkitYoutube` (Experimental)](/components/experimental-speedkit-youtube) noch als experimental gekennzeichnet ist, bieten wir noch die vereinfachte Version namens `SpeedkitYoutube` an. Hier müssen alle Ressourcen, die im Experimental-Modul vollautomatisiert generiert werden, manuell definiert werden.

Bis auf die manuelle Ressourcendefinition für das Poster sind alle weiteren [Features](/components/experimental-speedkit-youtube#features) von [`SpeedkitYoutube` (Experimental)](/components/experimental-speedkit-youtube) deckungsgleich.

## Usage


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

Learn more about [`SpeedkitYoutube` - Properties](/components/speedkit-youtube#properties).

### `poster`
- Type: `Object` als Konfiguration wird das <nuxt-link to="/components/speedkit-picture">SpeedkitPicture</nuxt-link> verwendet.
  - <badge>required</badge>

Poster wird angezeigt solange Player nicht abspielt.

## Events

Mehr zu Events unter [`SpeedkitYoutube` (Experimental) - Events](/components/experimental-speedkit-youtube#events).
