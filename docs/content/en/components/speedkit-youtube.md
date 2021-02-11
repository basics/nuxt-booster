---
title: SpeedkitYoutube
description: ''
position: 13
category: Components
features:
  - Lazy Load Integration
---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitYoutube.vue)


```html
<speedkit-youtube id="…" />
```

`SpeedkitYoutube` wird verwendet für das einfache einbinden eines Youtube Videos.

**Features:**

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

<badge>required</badge>

Id eines Youtube Videos.


### `autoplay`

Wenn gesetzt, wird wenn die mitte des Viewports erreicht ist, der Player automatisch gestartet.

- Default: `false`

### `poster`

<badge>required</badge>

Poster wird angezeigt solange Player nicht abspielt.

Als Konfiguration wird das <nuxt-link to="/components/speedkit-picture/">SpeedkitPicture</nuxt-link> verwendet.

- Default: `undefined`

## Events

```vue[example]
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

Tritt ein wenn Komponente sich im Viewport befindet.



