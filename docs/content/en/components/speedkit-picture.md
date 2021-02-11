---
title: SpeedkitPicture
description: ''
position: 11
category: Components

features:
  - Lazy Load Integration
  - Platzhalter für multiple Bildverhältnisse

---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitPicture.vue)


```html
<speedkit-picture src="…" />
```

Das `SpeedkitPicture` ersetzt den Einsatz eines nativen `<picture>` Elements und bringt folgende Features mit:

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

##### `media`

CSS Media Query e.g. `(min-width: 768px)`

<alert>Kann verwendet werden für Breakpoints spezifische Bildverhältnisse.</alert>

- Default: `undefined`

##### `format`

Bildformat der angebenen Ressource. e.g. `webp`, `jpg`, …

- Default: `undefined`

##### `sizes`

Bechreibt die Attribute `srcset` und `sizes` einer Picture `source`.  
`url` und `width` werden im `srcset` angewendet (e.g. `srcset="image.jpg 768w"`).  
`media` wird im `sizes` angewendet für Media Query zu Breite (e.g. `sizes="(min-width: 768px) 768px"`), 

| Property | Required | Value                                       | Default     |
| -------- | -------- | ------------------------------------------- | ----------- |
| `url`    | yes      | Path to the ressource                       |             |
| `width`  |          | Viewport width as `Number` (e.g. `768`)     | `undefined` |
| `media`  |          | CSS Media Query (e.g. `(min-width: 768px)`) | `undefined` |

- Default: `[]`
### `placeholders`

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
### `alt`

Image alternative Text. 

[MDN - HTMLImageElement.alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `title`

Image Title. 

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title)

### `crossorigin`

Image CrossOrigin. 

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin)

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

