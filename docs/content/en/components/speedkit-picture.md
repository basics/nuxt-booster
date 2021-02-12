---
title: SpeedkitPicture
description: ''
position: 11
category: Components

features:
  - Lazy Load Integration
  - Placeholder for multiple image ratios

---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitPicture.vue)


```html
<speedkit-picture src="…" />
```

`SpeedkitPicture` ersetzt den Einsatz eines nativen `<picture>` Elements.

## Features

<list :items="features"></list>

## Properties

```js
{
  placeholders: […],
  sources: […],
  alt: 'Image Alt',
  title: 'Image Title',
  crossorigin: 'anonymous'
}
```


### `sources`
- Type: `Array`

```js
[
  {
    media: '(min-width: 768px)',
    format: 'webp',
    sizes: [
      { width: 768, media: '(min-width: 768px)', url: '768.webp' },
      { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
    ]
  },
  {
    media: '(min-width: 768px)',
    format: 'jpg',
    sizes: [
      { width: 768, media: '(min-width: 768px)', url: require('768.jpg' },
      { width: 1024, media: '(min-width: 1024px)', url: require('1024.jpg' }
  },
  {
    format: 'webp',
    sizes: [
      { width: 414, media: 'all', url: '414.webp' }
    ]
  },
  {
    format: 'jpg',
    sizes: [
      { width: 414, media: 'all', url: '414.jpg' }
    ]
  }
]
```

#### source
- Type: `Object`

```js
{
  media: '(min-width: 768px)',
  format: 'webp',
  sizes: [
    { width: 768, media: '(min-width: 768px)', url: '768.webp' },
    { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
  ]
}
```
<br>


| Key      | Type     | Required | Value                                                                                                    | Default |
| -------- | -------- | -------- | -------------------------------------------------------------------------------------------------------- | ------- |
| `sizes`  | `Array`  | yes      | Bechreibt die unterschiedlichen Varianten. [Mehr zu Size definierung](/components/speedkit-picture#size) | `[]`    |
| `format` | `String` | yes      | Bildformat der angebenen Ressource,  e.g. `webp`, `jpg`, …                                               |         |
| `media`  | `String` |          | CSS Media Query e.g. `(min-width: 768px)`                                                                |         |

<alert>`media` kann verwendet werden für Breakpoints spezifische Bildverhältnisse.</alert>


#### Size
- Type: `Object`

```js
{ 
  width: 768, 
  media: '(min-width: 768px)', 
  url: '768.webp' 
}
```
 
`url` und `width` werden im `srcset` angewendet (e.g. `srcset="image.jpg 768w"`).  
`media` wird im `sizes` angewendet für Media Query zu Breite (e.g. `sizes="(min-width: 768px) 768px"`), 

| Key     | Required | Value                                       | Default     |
| ------- | -------- | ------------------------------------------- | ----------- |
| `url`   | yes      | Path to the ressource                       |             |
| `width` |          | Viewport width as `Number` (e.g. `768`)     | `undefined` |
| `media` |          | CSS Media Query (e.g. `(min-width: 768px)`) | `undefined` |

**Example**

```js
[
  { width: 768, media: '(min-width: 768px)', url: '768.webp' },
  { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
]
```


### `placeholders`
- Type: `Array`

```js
[
  {
    media: '(min-width: 576px)',
    format: 'jpg',
    url: 'landscape.jpg' // base64 or url
  },
  {
    format: 'jpg',
    url: 'portrait.jpg' // base64 or url
  }
]
```

Beschreibt die Platzhalter, diese werden angezeigt solange keine Resourcen geladen wurden.


| Key      | Type     | Required | Value                                                      |
| -------- | -------- | -------- | ---------------------------------------------------------- |
| `url`    | `String` | yes      | Url oder Base64 von einem Bild                             |
| `format` | `String` | yes      | Bildformat der angebenen Ressource,  e.g. `webp`, `jpg`, … |
| `media`  | `String` |          | CSS Media Query e.g. `(min-width: 768px)`                  |

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
