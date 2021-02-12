---
title: Options
description: ''
position: 3
category: Guide

---

## `crossorigin`
- Type: `String`
  - Default: `nuxt.options.render.crossorigin || 'anonymous'`
  - String values: `anonymous`, `use-credentials` or `''` [learn more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

Legt den `crossorigin` der Link Preloads fest. Als Default wird der crossorigin aus der [Render Konfiguration](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#crossorigin) übernommen.

## `detection`
- Type: `Object`
  
```js
{
  performance: true,
  browserSupport: true
}
```
Über die Detektion Optionen kann definiert werden, welche überprüfung beim verwenden des `SpeedkitLayer` vorgenommen werden soll.
### `performance`
- Type: `Boolean`
  - Default: `true`

### `browserSupport`
- Type: `Boolean`
  - Default: `true`
## `performance`
- Type: `Object`

```js
{
  device: {
    hardwareConcurrency: { min: 2, max: 48 },
    deviceMemory: { min: 2 }
  },
  timing: {
    fcp: 800,
    dcl: 1200 // fallback if fcp is not available (safari)
  },
  lighthouseDetectionByUserAgent: false
}
```

Konfiguration für die im Module enthaltene Performance überprüfung.

Diese dient zum Definieren der minimalen Hardware Anforderung und Verbindungs-Geschwindigkeits (überprüfung anhand des `fcp`) der Benutzer.

Eine überprüfung auf Lighthouse kann optional hinzugeschaltet werden.

### `device`
- Type: `Object`

```js
{
  hardwareConcurrency: { min: 2, max: 48 },
  deviceMemory: { min: 2 }
}
```

Beschreibt die Hardware-Anforderungen die ein Benutzer erfüllen muss.

 | Key                   | Type      | Required | Description                      | Default               |
 | --------------------- | --------- | -------- | -------------------------------- | --------------------- |
 | `hardwareConcurrency` | `Boolean` | yes      | Min/Max Anzahl an Prozessoren    | `{ min: 2, max: 48 }` |
 | `deviceMemory`        | `Boolean` | yes      | Mindestgröße vom Arbeitsspeicher | `{ min: 2 }`          |


### `timing`
- Type: `Object`

```js
{
  fcp: 800,
  dcl: 1200 // fallback if fcp is not available (safari)
}
```

Beschreibt die Lade-Geschwindigkeit des Benutzers. Die Geschwindigkeit wird anhand des `fcp` ermittelt. Alternativ wird der `dcl` verwendet wenn der abruf von `fcp` nicht möglich ist.

Alle werte werden in `ms` gesetzt und beschreiben den Maximum.


 | Key   | Type     | Required | Description                                                                                                                 | Default |
 | ----- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
 | `fcp` | `Number` | yes      | Max. First contentful paint duration [learn More](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint) | `800`   |
 | `dcl` | `Number` | yes      | Max. Dom content load duration                                                                                              | `1200`  |


### `lighthouseDetectionByUserAgent`
- Type: `Boolean`
  - Default: `false`

Fallback to detect lighthouse user agent when the other ressources like the hardware detect don't work anymore.

## `fonts`
- Type: `Array`

```js
[
  {
    family: 'Font A',
    locals: ['Font A'],
    fallback: ['Arial', 'sans-serif'],
    variance: […]
  },
  {
    family: 'Font B',
    locals: ['Font B'],
    fallback: ['Arial', 'sans-serif'],
    variance: […]
  }
]
```
Liste aller im Projekt enthaltenen Font-Families.  
Diese sind die Vorlage für die im Projekt enthaltenen `FontFace` definitionen.


### Font-Family
- Type: `Object`

```js
{
  family: 'Font A',
  locals: ['Font A'],
  fallback: ['Arial', 'sans-serif'],
  variance: […]
}
```

Beschreibt eine Font-Family mit all ihren Varianten.

| Key         | Type     | Required | Description                                                                         |
| ----------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| `family`    | `String` | yes      | Name der Schriftarten Familie.                                                      |
| `locals`    | `Array`  | yes      | System-Schriftnamen der angegebenen Familie.                                        |
| `fallback`  | `Array`  | yes      | Fallback Schriftarten Familien. e.g. `font-family: 'Font A', 'Arial', 'sans-serif'` |
| `variances` | `Array`  | yes      | Enthält die Varianten einer Font-Family. (e.g. Bold, Italic)                        |

<alert type="warning">Look for similarity in fonts to system fonts for perfect swap and reduction of layout shifts.</alert>
### Font-Variance
- Type: `Object`

```js
{
  style: 'normal',
  weight: 400,
  sources: [
    { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
    { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
  ]
}
```

Eine Font-Variance beschreibt eine Ausprägung einer Font-Family und dient zum erzeugen des `FontFace`.

Font-Variancen unterscheiden sich im [`style`](https://developer.mozilla.org/de/docs/Web/CSS/font-style) und [`weight`](https://developer.mozilla.org/de/docs/Web/CSS/font-weight).



| Key       | Type                 | Required | Description                                            |
| --------- | -------------------- | -------- | ------------------------------------------------------ |
| `style`   | `String`             | yes      | `font-style` des FontFaces. e.g. `normal`, `italic`    |
| `weight`  | `String` or `Number` | yes      | `font-weight` des FontFaces. e.g. `400`, `normal`      |
| `sources` | `Array`              | yes      | Liste aller der Variante zugeordneten Schrift-Dateien. |

#### `sources`

<alert>Es wird die erste Source anhand der Sortierung (`['embedded-opentype', 'woff2', 'woff', 'truetype', 'svg']`) als Preload verwendet.</alert>


```js
[
  { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
  { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
]
```

## `componentAutoImport`
- Type: `Boolean`
  - Default: `false`

Wenn gesetzt, werden alle unter `nuxt-speedkit-components` enthaltenen Komponenten global registriert.

[Learn more @nuxt/components](https://github.com/nuxt/components)



### Available components


| Global Name                    | Import Path                                               |
| ------------------------------ | --------------------------------------------------------- |
| `SpeedkitIframe`               | `nuxt-speedkit-components/SpeedkitIframe`                 |
| `SpeedkitLayer`                | `nuxt-speedkit-components/SpeedkitLayer`                  |
| `SpeedkitPicture`              | `nuxt-speedkit-components/SpeedkitPicture`                |
| `SpeedkitYoutube`              | `nuxt-speedkit-components/SpeedkitYoutube`                |
| `AbstractIntersectionObserver` | `nuxt-speedkit-components/abstracts/IntersectionObserver` |
| `AbstractOnlySsr`              | `nuxt-speedkit-components/abstracts/OnlySsr`              |
| `ExperimentalSpeedkitPicture`  | `nuxt-speedkit-components/experimental/SpeedkitPicture`   |
| `ExperimentalSpeedkitYoutube`  | `nuxt-speedkit-components/experimental/SpeedkitYoutube`   |

## `componentPrefix`
- Type: `String`
  - Default: `undefined`

Defines a prefix for the module components, important for auto import (`componentAutoImport`). e.g. `SpeedkitPicture` => `PrefixSpeedkitPicture`

## `lazyOffset`
- Type: `Object`

```js
{
  // rootMargin for speedkitComponents components
  component: '0%',
  // rootMargin for SpeedkitPicture and SpeedkitImage
  asset: '0%' 
}
```

Option für den `IntersectionObserver`, die im Modul verbaut sind.

 | Key         | Type     | Required | Description                                                                                    | Default |
 | ----------- | -------- | -------- | ---------------------------------------------------------------------------------------------- | ------- |
 | `component` | `String` | yes      | Beschreibt den `rootMargin` für die benutzung von `speedkitComponents`.                        | `'0%'`  |
 | `asset`     | `String` | yes      | Beschreibt den `rootMargin` für den `IntersectionObserver` von `v-font` und `SpeedkitPicture`. | `'0%'`  |

## Example Configuration

```js
{ 
  detection: {
    performance: true,
    browserSupport: true
  },
  performance: {
    device: {
      hardwareConcurrency: { min: 2, max: 48 },
      deviceMemory: { min: 2 }
    },
    timing: {
      fcp: 800,
      dcl: 1200
    },
    lighthouseDetectionByUserAgent: false
  },
  fonts: [{
    family: 'Font A',
    locals: ['Font A'],
    fallback: ['Arial', 'sans-serif'],
    variance: [
      {
        style: 'normal',
        weight: 400,
        sources: [
          { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
          { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
        ]
      }, {
        style: 'italic',
        weight: 400,
        sources: [
          { src: '@/assets/fonts/font-a-regularItalic.woff', type:'woff' },
          { src: '@/assets/fonts/font-a-regularItalic.woff2', type:'woff2' }
        ]
      }, {
        style: 'normal',
        weight: 700,
        sources: [
          { src: '@/assets/fonts/font-a-700.woff', type:'woff' },
          { src: '@/assets/fonts/font-a-700.woff2', type:'woff2' }
        ]
      }
    ]
  }]

  componentAutoImport: false,
  componentPrefix: undefined,

  /**
   * IntersectionObserver rootMargin for Compoennts and Assets
   */
  lazyOffset: {
    component: '0%',
    asset: '0%'
  }
}
```
