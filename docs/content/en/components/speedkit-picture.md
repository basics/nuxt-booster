---
title: SpeedkitPicture
description: ''
position: 32
category: Components
---

Verwende das `SpeedkitPicture` anstatt dem [`ExperimentalSpeedkitPicture`](http://localhost:3000/components/experimental-speedkit-picture), wenn du keine [`@nuxt/image`](https://image.nuxtjs.org/) Integration verwendest.

Es unterscheiden sich nur die Angaben der Ressourcen, alle weiteren [Features](/components/experimental-speedkit-picture#features) von [`ExperimentalSpeedkitPicture`](/components/experimental-speedkit-picture) bleiben bestehen.

## Requirement

Ohne die Verwendung von [`@nuxt/image`](https://image.nuxtjs.org/) müssen alle **Sourcen** (`sources`) und **Platzhalter** (`placeholders`) angeben werden.

Beispiele für das Setzen der Ressourcen, findest du [hier](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/example/pages/index.vue).

## Beware

### Platzhalter

Der Platzhalter sollte per **Base64** angeben werden und eine **Breite** von `30px` haben.

```js
{
  placeholders: [
    {
      url: 'data:image/jpeg;base64,…'
    }
  ]
}
```

### Sourcen

Denke an die Optimierung der Ressourcen!

- Verwende wenn möglich `webp`, analog zu den vorhandenen `jpg` Dateien
- Wende Optimierungen an, zum Beipiel per [Module `nuxt-optimized-images`](https://github.com/juliomrqz/nuxt-optimized-images) oder einem externen [Dienst TinyJPG](https://tinyjpg.com/).


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

Beinhaltet Ressourcen die abängig vom Viewport angezeigt werden sollen.

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
      { width: 768, media: '(min-width: 768px)', url: '768.jpg' },
      { width: 1024, media: '(min-width: 1024px)', url: '1024.jpg' }
    ]
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

Legt eine Resource fest die abängig vom Viewport angezeigt werden soll.   

Eigenschaft `media` wird verwendent um unterschiedliche Bildverhältnisse, je nach Viewport anzeigen zu lassen.
`sizes` dient zum aussteuern der Bildgrößen für den jeweiligen Viewport.


| Key      | Type     | Required | Value                                                                                                    | Default |
| -------- | -------- | -------- | -------------------------------------------------------------------------------------------------------- | ------- |
| `sizes`  | `Array`  | yes      | Bechreibt die unterschiedlichen Varianten. [Mehr zu Size definierung](/components/speedkit-picture#size) | `[]`    |
| `format` | `String` | yes      | Bildformat der angebenen Ressource,  e.g. `webp`, `jpg`, …                                               |         |
| `media`  | `String` |          | CSS Media Query e.g. `(min-width: 768px)`                                                                |         |


<alert>`media` kann verwendet werden für Breakpoints spezifische Bildverhältnisse.</alert>


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

Beschreibt die Platzhalter, diese werden angezeigt solange keine Ressourcen geladen wurden.

Es ist möglich über `media`, zu unterschiedlichen Bildverhältnissen aus `sources`, passende Platzhalter zu definieren.

Achte darauf das die Platzhalter eine Breite von `30px` haben und optimiert sind. 


| Key      | Type     | Required | Value                                                      |
| -------- | -------- | -------- | ---------------------------------------------------------- |
| `url`    | `String` | yes      | Url oder Base64 von einem Bild                             |
| `format` | `String` | yes      | Bildformat der angebenen Ressource,  e.g. `webp`, `jpg`, … |
| `media`  | `String` |          | CSS Media Query e.g. `(min-width: 768px)`                  |

```js
[
  {
    media: '(min-width: 768px)',
    format: 'jpg',
    url: 'landscape.jpg' // base64 or url
  },
  {
    format: 'jpg',
    url: 'portrait.jpg' // base64 or url
  }
]
```

### `critical`
- Type: `Boolean`

Set component as critical component. [Learn more](#)


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

## Example

```js

{
  placeholders: [
    {
      media: '(min-width: 768px)',
      format: 'jpg',
      url: 'data:image/jpeg;base64,…' // landscape
    },
    {
      format: 'jpg',
      url: 'data:image/jpeg;base64,…' // portrait
    }
  ],
  sources: [
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
        { width: 768, media: '(min-width: 768px)', url: '768.jpg' },
        { width: 1024, media: '(min-width: 1024px)', url: '1024.jpg' }
      ]
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
  ],
  title: 'Picture Title',
  alt: 'Picture Alt',
}

```
