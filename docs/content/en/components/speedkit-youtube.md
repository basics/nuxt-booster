---
title: SpeedkitYoutube
description: ''
position: 33
category: Components
features:
  - Lazy Load Integration
---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitYoutube.vue)


```html
<speedkit-youtube id="…" />
```

`SpeedkitYoutube` wird verwendet für das einfache einbinden eines Youtube Videos.

## Features

<list :items="features"></list>

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

```html
<speedkit-picture 
  @ready="console.log('Ready!')" 
  @loading="console.log('Video Loading!')" 
  @playing="console.log('Video Playing!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `ready`

Tritt ein wenn Youtube-Api komplett geladen ist.

### `loading`

Tritt ein wenn Video angefangen wird zu laden.

### `playing`

Tritt ein wenn Video fertiggeladen ist und abspielt.

### `enter`

Tritt ein wenn Komponente den Viewport erreicht hat.



