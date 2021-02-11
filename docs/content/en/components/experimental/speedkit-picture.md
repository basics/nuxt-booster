---
title: SpeedkitPicture (Experimental)
description: ''
position: 11
category: Components

features:
  - Lazy Load Integration
  - Platzhalter für multiple Bildverhältnisse

---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/experimental/SpeedkitPicture.vue)

<alert type="warning">Experimental Komponente. `nuxt-speedkit-components/experimental/SpeedkitPicture`</alert>

```html
<speedkit-picture src="…" />
```

`SpeedkitPicture` ersetzt den Einsatz eines `NuxtPicture` aus dem Module `@nuxt/image`.

## Features

<list :items="features"></list>

## Properties

```js
{
  sources: […],
  alt: 'Image Alt',
  title: 'Image Title',
  crossorigin: 'anonymous'
}
```


### `sources`


```js
[
  { src: 'portrait.jpg', sizes: '299,300:599,600:899,900:1199' },
  { src: 'landscape.jpg', sizes: '1200:1599,1600:1899,1900:1920' }
]
```

### `alt`

Image alternative Text. 

[MDN - HTMLImageElement.alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `title`

Image Title. 

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title)

### `crossorigin`

Image CrossOrigin. 

[MDN - HTMLImageElement.crossOrigin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin)

## Events

```htnk
<speedkit-picture 
  @load="console.log('Loaded!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `load`

Tritt ein wenn Bild Resource komplett geladen wurde.

### `enter`

Tritt ein wenn Komponente sich im Viewport befindet.

