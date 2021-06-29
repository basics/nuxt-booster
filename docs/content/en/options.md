---
title: Options
descriptio: ''
position: 12
category: Guide

---

## `crossorigin`
- Type: `String`
  - Default: `'anonymous'`
  - String values: `'anonymous'`, `'use-credentials'` or `undefined` [learn more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

Sets the global `crossorigin` value of the nuxt-speedkit preloads.  
The default value is the `crossorigin` from the [Render Configuration](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#crossorigin).

## `detection`
- Type: `Object`

These options can be used to define which initial checks are to be carried out when using the [`SpeedkitLayer`](/components/speedkit-layer).
  
```js
{
  performance: true,
  browserSupport: true
}
```

 | Key              | Type      | Required | Description                                                                                                                                                                                      | Default |
 | ---------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
 | `performance`    | `Boolean` | yes      | Checks whether the minimum [performance requirement](/options#performancemetrics) has been met. If this is not the case, the [`SpeedkitLayer`](/components/speedkit-layer) is displayed.         | `true`  |
 | `browserSupport` | `Boolean` | yes      | Überprüft, ob die Webseite über einen supported Browser besucht wird. Handelt es sich hierbei um einen unsupported Browser, wird der [`SpeedkitLayer`](/components/speedkit-layer) eingeblendet. | `true`  |

<alert type="info">
For the browser support detection, the default <a href="https://github.com/browserslist/browserslist">Browserslist</a> of the NuxtJS configuration is used.
</alert>

## `performanceMetrics`
- Type: `Object`

With the help of the metrics, the actual performance check on client side can be configured. An explicit lighthouse check via user agent can be optionally added.

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
### `device`
- Type: `Object`

Describes the minimum hardware requirements that a device should meet to display the website.

```js
{
  hardwareConcurrency: { min: 2, max: 48 },
  deviceMemory: { min: 2 }
}
```

 | Key                   | Type     | Required | Description            | Default               |
 | --------------------- | -------- | -------- | ---------------------- | --------------------- |
 | `hardwareConcurrency` | `Object` | yes      | min/max number of CPUs | `{ min: 2, max: 48 }` |
 | `deviceMemory`        | `Object` | yes      | min size of memory     | `{ min: 2 }`          |

### `timing`
- Type: `Object`

Defines the max. time (ms) for the FCP. If the specified value is exceeded, the [`SpeedkitLayer`](/components/speedkit-layer) is displayed. If the browser does not yet grant access to the FCP, the DCL is evaluated as an alternative.

```js
{
  fcp: 800,
  dcl: 1200 // fallback if fcp is not available (safari)
}
```

 | Key   | Type     | Required | Description                                                                                                                       | Default |
 | ----- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
 | `fcp` | `Number` | yes      | Max. First contentful paint duration in ms [learn More](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint) | `800`   |
 | `dcl` | `Number` | yes      | Max. Dom content load duration in ms                                                                                              | `1200`  |


### `lighthouseDetectionByUserAgent`
- Type: `Boolean`
  - Default: `false`

Fallback to detect lighthouse user agent when the other ressources like the hardware detect don't work anymore.

<alert type="warning">
We recommend that you disable the explicit lighthouse check . In the description of the <nuxt-link to="/components/speedkit-layer">SpeedkitLayer</nuxt-link> you will find a more detailed description of the trick that can be used to detect a lighthouse test.
</alert>

## `fonts`
- Type: `Array`

List of all font families used in the project. Only the fonts that are listed in the configuration can be retrieved and integrated via [`$fonts.getFont(...)`](/directives/v-font).

```js
[
  {
    family: 'Font A',
    locals: ['Font A'],
    fallback: ['Arial', 'sans-serif'],
    variances: […]
  },
  {
    family: 'Font B',
    locals: ['Font B'],
    fallback: ['Arial', 'sans-serif'],
    variances: […]
  }
]
```
### Font-Family
- Type: `Object`

Describes a font family with all its variants.

```js
{
  family: 'Font A',
  locals: ['Font A'],
  fallback: ['Arial', 'sans-serif'],
  variances: […]
}
```

| Key         | Type     | Required | Description                                      |
| ----------- | -------- | -------- | ------------------------------------------------ |
| `family`    | `String` | yes      | name of the font family                          |
| `locals`    | `Array`  | yes      | system font name of the specified font family    |
| `fallback`  | `Array`  | yes      | fallback fonts e.g. `['Arial', 'sans-serif']`    |
| `variances` | `Array`  | yes      | list of font family variants (e.g. Bold, Italic) |

<alert type="warning">
Prevent sizing discrepancy between your custom and fallback font for perfect swap and reduction of layout shifts. <a href="https://meowni.ca/font-style-matcher/">more</a>
</alert>

### Font-Variance
- Type: `Object`

A font variant describes an instance of a font family and is used to generate the `FontFace` declaration.
Font variants differ in [`style`](https://developer.mozilla.org/de/docs/Web/CSS/font-style) and [`weight`](https://developer.mozilla.org/de/docs/Web/CSS/font-weight).

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

| Key       | Type                 | Required | Description                                                            |
| --------- | -------------------- | -------- | ---------------------------------------------------------------------- |
| `style`   | `String`             | yes      | `font-style` of FontFace, e.g. `normal`, `italic`                      |
| `weight`  | `String` or `Number` | yes      | `font-weight` of FontFace, e.g. `400`, `normal`                        |
| `sources` | `Array`              | yes      | list of all font files assigned to the variant ([`sources`](#sources)) |

### `sources`
- Type: `Array`

List of all available font files of a font family variation.

```js
[
  { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
  { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
]
```

| Key    | Type     | Required | Value                                                      |
| ------ | -------- | -------- | ---------------------------------------------------------- |
| `src`  | `String` | yes      | path to a font file, the use of aliases is possible        |
| `type` | `String` | yes      | file format of the specified file, e.g. `woff`, `woff2`, … |

## `componentAutoImport`
- Type: `Boolean`
  - Default: `false`

With this attribute all components that can be found under `nuxt-speedkit/components` can be registered globally.
[Learn more @nuxt/components](https://github.com/nuxt/components)

### Available components


| Global Name                    | Import Path                                               |                                                                                                                          |
| ------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `SpeedkitIframe`               | `nuxt-speedkit/components/SpeedkitIframe`                 | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitIframe.vue)                 |
| `SpeedkitLayer`                | `nuxt-speedkit/components/SpeedkitLayer`                  | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitLayer.vue)                  |
| `SpeedkitPicture`              | `nuxt-speedkit/components/SpeedkitPicture`                | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitPicture.vue)                |
| `SpeedkitYoutube`              | `nuxt-speedkit/components/SpeedkitYoutube`                | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitYoutube.vue)                |
| `AbstractIntersectionObserver` | `nuxt-speedkit/components/abstracts/IntersectionObserver` | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/abstracts/IntersectionObserver.vue) |
| `AbstractOnlySsr`              | `nuxt-speedkit/components/abstracts/OnlySsr`              | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/abstracts/OnlySsr.vue)              |
| `ExperimentalSpeedkitPicture`  | `nuxt-speedkit/components/experimental/SpeedkitPicture`   | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/experimental/SpeedkitPicture.vue)   |
| `ExperimentalSpeedkitYoutube`  | `nuxt-speedkit/components/experimental/SpeedkitYoutube`   | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/experimental/SpeedkitYoutube.vue)   |

## `componentPrefix`
- Type: `String`
  - Default: `undefined`

Defines a prefix for the module components, important for auto import e.g. option `componentAutoImport`. 

**Example:** `SpeedkitPicture` => `PrefixSpeedkitPicture`

## `lazyOffset`
- Type: `Object`

Global option for the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) built into the `nuxt-speedkit`.

```js
{
  // rootMargin for speedkitComponents components
  component: '0%',
  // rootMargin for SpeedkitPicture and SpeedkitImage
  asset: '0%' 
}
```

 | Key         | Type     | Required | Description                                                                                                                                                       | Default |
 | ----------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
 | `component` | `String` | yes      | [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) value for `speedkitComponents`                                   | `0%`    |
 | `asset`     | `String` | yes      | [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) value for all static ressources (`v-font` und `SpeedkitPicture`) | `0%`    |

