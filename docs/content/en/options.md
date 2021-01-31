---
title: Options
description: ''
position: 3
category: Guide
---

## `ignorePerformance`

Wenn gesetzt wird die im Modul enthaltenen Performance überprüfung deaktiviert.

<alert>Der `SpeedkitLayer` wird automatisch deaktiviert.</alert>

See page [Performance](/performance/)

- Default: `false`

## `performance`

Konfiguration für die im Module enthaltene Performance überprüfung.

Diese dient zum Definieren der minimalen Hardware Anforderung und Verbindungs-Geschwindigkeits (überprüfung anhand des `fcp`) der Benutzer.

Eine überprüfung auf Lighthouse kann optional hinzugeschaltet werden.

```js[Default]
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

### `device`

Beschreibt die Hardware-Anforderungen die ein Benutzer erfüllen muss. Dazu gehört Prozessor Anzahl (`hardwareConcurrency`) und Arbeitsspeicher (`deviceMemory`)

Gesezt wird der min/max Bereich für [`hardwareConcurrency`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) und [`deviceMemory`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory).

```js[Default]
{
  hardwareConcurrency: { min: 2, max: 48 },
  deviceMemory: { min: 2 }
}
```

### `timing`

Beschreibt die Lade-Geschwindigkeit des Benutzers. Die Geschwindigkeit wird anhand des `fcp` ermittelt. Alternativ wird der `dcl` verwendet wenn der abruf von `fcp` nicht möglich ist.

Alle werte werden in `ms` gesetzt und beschreiben den Maximum.

More Information to [`fcp` (First contentful paint)](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint)

```js[Default]
{
  fcp: 800,
  dcl: 1200 // fallback if fcp is not available (safari)
}
```


### `lighthouseDetectionByUserAgent`

Fallback to detect lighthouse user agent when the other ressources like the hardware detect don't work anymore.

- Default: `false`




## `fonts`

Liste aller im Projekt enthaltenen Font-Families.  
Diese sind die Vorlage für die im Projekt enthaltenen `FontFace` definitionen.

```js[FontFamily]
{
  fonts: [
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
}
```

### Font-Family

Beschreibt eine Font-Family mit all ihren Varianten.

```js[FontFamily]
{
  family: 'Font A',
  locals: ['Font A'],
  fallback: ['Arial', 'sans-serif'],
  variance: […]
}]
```

#### `family` <badge>required</badge>

Name der Schriftarten Familie.

#### `locals`

System-Schriftnamen der angegebenen Familie.

#### `fallback` <badge>required</badge>

Fallback Schriftarten Familien.

e.g. `font-family: 'Font A', 'Arial', 'sans-serif'`

<alert>Look for similarity in fonts to system fonts for perfect swap and reduction of layout shifts.</alert>

#### `variances` <badge>required</badge>

Enthält die Varianten einer Font-Family. (e.g. Bold, Italic)

### Font-Variance

Eine Font-Variance beschreibt eine Ausprägung einer Font-Family und dient zum erzeugen des `FontFace`.

Font-Variancen unterscheiden sich im [`style`](https://developer.mozilla.org/de/docs/Web/CSS/font-style) und [`weight`](https://developer.mozilla.org/de/docs/Web/CSS/font-weight).

```js[FontVariance]
{
  style: 'normal',
  weight: 400,
  sources: [
    { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
    { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
  ]
}
```
#### `style` <badge>required</badge>

`font-style` des FontFaces.

#### `weight` <badge>required</badge>

`font-weight` des FontFaces.
#### `sources` <badge>required</badge>

Liste aller der Variante zugeordneten Schrift-Dateien.

<alert>Es wird die erste Source anhand der Sortierung (`['embedded-opentype', 'woff2', 'woff', 'truetype', 'svg']`) als Preload verwendet.</alert>


```js[example]
[
  { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
  { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
]
```

## componentAutoImport

Wenn gesetzt, werden alle unter `nuxt-speedkit-components` enthaltenen Komponenten global registriert.

Somit muss kein explizierter `import` mehr stattfinden.

- Default: `false`

## componentPrefix

Defines a prefix for the module components, important for auto import (`componentAutoImport`). e.g. `SpeedkitPicture` => `PrefixSpeedkitPicture`

- Default: `''`

## lazyOffset

Option für den `IntersectionObserver`, die im Modul verbaut sind.


```js[Default]
{
  // rootMargin for speedkitComponents components
  component: '0%',
  // rootMargin for SpeedkitPicture and SpeedkitImage
  asset: '0%' 
}
```

### `asset`

Beschreibt den `rootMargin` für den `IntersectionObserver` von `v-font`, `SpeedkitPicture` und `SpeedkitImage`.

### `components`

Beschreibt den `rootMargin` für die benutzung von `speedkitComponents`.
