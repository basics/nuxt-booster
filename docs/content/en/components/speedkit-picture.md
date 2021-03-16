---
title: SpeedkitPicture
description: ''
position: 32
category: Components
---

Da das [`SpeedkitPicture` (Experimental)](/components/experimental-speedkit-picture) noch als experimental gekennzeichnet ist, bieten wir noch die vereinfachte Version namens `SpeedkitPicture` an. Hier müssen alle Ressourcen, die im Experimental-Modul vollautomatisiert generiert werden, manuell definiert werden.

Bis auf die manuelle Ressourcendefinition sind alle weiteren [Features](/components/experimental-speedkit-picture#features) von [`SpeedkitPicture` (Experimental)](/components/experimental-speedkit-picture) deckungsgleich.

## Usage

Ohne die Verwendung von [`@nuxt/image`](https://image.nuxtjs.org/) müssen alle **Sourcen** (`sources`) und **Platzhalter** (`placeholders`) angeben werden.

Beispiele für das Definieren der Ressourcen, findest du im [Beispiel](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/example/pages/index.vue) des Moduls.

<alert>**Denke an die Optimierung der Bilder!**<br> Verwende wenn möglich das Format `webp`, analog zu den vorhandenen `jpg` Dateien und achte auf eine Bildoptimierung.
</alert>

### Example

```vue
<template>
  <div>
    <speedkit-picture v-bind="image" />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit-component/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  data () {
    return {
      image: {
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
        alt: 'Image Alt',
        title: 'Image Title',
        crossorigin: 'anonymous'
      }
    };
  }
};
</script>
```
## Properties

Alle Eigenschaften bis auf [`sources`](/components/speedkit-picture#sources) und [`placeholders`](/components/speedkit-picture#placeholders) sind mit dem `SpeedkitPicture` (Experimental) identisch.

Learn more about [`ExperimentalSpeedkitPicture` - Properties](/components/experimental-speedkit-picture#properties).

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

Jedes Source in der Liste beschreibt ein Dateiformat mit seinen Viewport abhängigen Bildgrößen.

Eigenschaft `media` wird verwendent um unterschiedliche Bildverhältnisse, je nach Viewport anzeigen zu lassen.
`sizes` dient zum definieren der Viewport abhängigen Bildgrößen.


| Key      | Type     | Required | Value                                                      | Default |
| -------- | -------- | -------- | ---------------------------------------------------------- | ------- |
| `sizes`  | `Array`  | yes      | Bechreibt die unterschiedlichen Varianten.                 | `[]`    |
| `format` | `String` | yes      | Bildformat der angebenen Ressource,  e.g. `webp`, `jpg`, … |         |
| `media`  | `String` |          | CSS Media Query e.g. `(min-width: 768px)`                  |         |


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

```js
{ 
  width: 768, 
  media: '(min-width: 768px)', 
  url: '768.webp' 
}
```
 
Das Size Objekt in `sizes` beschreibt die unterschiedlichen Bildgrößen für die jeweiligen Breakpoints.

Aus der gesamt `sizes` Liste wird am ende ein `srcset` & `sizes` generiert.

Mehr zu  [`HTMLImageElement.srcset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) & [`HTMLImageElement.sizes`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes)


`url` und `width` werden im `srcset` angewendet (e.g. `srcset="image.jpg 768w"`).  
`media` wird im `sizes` angewendet für Media Query zu Breite (e.g. `sizes="(min-width: 768px) 768px"`), 

| Key     | Required | Value                                       | Default     |
| ------- | -------- | ------------------------------------------- | ----------- |
| `url`   | yes      | Absolute Path to the ressource.             |             |
| `width` |          | Viewport width as `Number` (e.g. `768`)     | `undefined` |
| `media` |          | CSS Media Query (e.g. `(min-width: 768px)`) | `undefined` |

<alert>**Important:** `url` Angabe ist absolut. Wenn ein Alias verwendet wird (e.g. `@/assets/img/image.jpg`), muss der Pfad per `require` aufgelöst werden (e.g. `url: require('@/assets/img/image.jpg')`)</alert>

**Example**

```js
[
  { width: 768, media: '(min-width: 768px)', url: '768.webp' },
  { width: 1024, media: '(min-width: 1024px)', url: '1024.webp' }
]
```

### `placeholders`
- Type: `Array`

Beschreibt die Platzhalter die angezeigt werden, solange keine Ressourcen geladen wurden.

Es ist möglich über die Eigenschaft `media`, unterschiedliche Bildverhältnisse für die Platzhalter zu definieren.

<alert type="warning">Achte darauf das die Platzhalter eine Breite von `30px` haben und optimiert sind. </alert>


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

## Events

Mehr zu Events unter [`SpeedkitPicture` (Experimental) - Events](/components/experimental-speedkit-picture#events).
