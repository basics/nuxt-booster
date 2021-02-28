---
title: SpeedkitPicture (Experimental)
description: ''
position: 32
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

Das experimentelle `SpeedkitPicture` baut auf der Lazy Load Mechanik des [`SpeedkitPicture`](/components/speedkit-picture) auf, beinhaltet aber als Feature die Verwendung von `@nuxt/image` zum automatischen generieren der Abformate für die angebenen Resourcen.  
Die Unterscheidung zwischen der Experimentelle Variante liegt in der definierung der Resourcen.

<alert type="warning">**Wichtig:** Es entfällt die möglichkeit Viewport abhängige Bildverhältnisse zu verwenden.</alert>

Für die generiung der Bilder, wird die `@nuxt/image` API verwendet. [Learn more](https://image.nuxtjs.org/)

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
- Type: `Array`

Liste der im Picture enthaltenen Sourcen.

<alert type="warning">Kein Support für wechselnde  Viewport abhängige Bildverhältnisse.  
Wird nur Bildgrößen anpassung per `srcset` unterstützt. [Learn more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset)</alert>

```js
[
  { src: 'portrait.jpg', sizes: '299,300:599,600:899,900:1199' },
  { src: 'landscape.jpg', sizes: '1200:1599,1600:1899,1900:1920' }
]
```

| Key     | Type     | Required | Value                                                                                         |
| ------- | -------- | -------- | --------------------------------------------------------------------------------------------- |
| `src`   | `String` | yes      | Url zum Bild                                                                                  |
| `sizes` | `String` | yes      | Komma Separatierte angabe von Ziel Bildgrößen mit angabe des Viewports. e.g. `Width:MinWidth` |


#### 

### `alt`
- Type: `String`

Image alternative Text. 

[MDN - HTMLImageElement.alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `title`
- Type: `String`

Image Title. 

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title)

### `crossorigin`
- Type: `String`
  - default: `anonymus`

Image CrossOrigin. 

[MDN - HTMLImageElement.crossOrigin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin)

## Events

```html
<speedkit-picture 
  @load="console.log('Loaded!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `load`

Tritt ein wenn Bild Resource komplett geladen wurde.

### `enter`

Tritt ein wenn Komponente den Viewport erreicht hat.

