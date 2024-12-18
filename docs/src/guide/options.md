---
title: Options
---

# {{$frontmatter.title}}

## `crossorigin`

- Type: `String`, `Boolean`
  - Default: `'anonymous'`
  - Valid values: `anonymous`, `use-credentials`, `''`, `true`, `false`

Sets the global `crossorigin` value of the **Nuxt Booster** preloads.  
The default value is the `crossorigin` value from the [Render Configuration](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#crossorigin).  
> Set `false` to disable the `crossorigin`.

[MDN - HTML.Attributes.crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

## `optimizeSSR`

- Type: `Boolean`, `Object`
  - Default: `true`

Activating this option optimizes the initial load.

- remove unnecessary preloads
- remove unnecessary prefetches
- inline critical CSS

The following NuxtJS settings are made or overwritten in the `nuxt.config`:

| Property                                    | Value  |
| ------------------------------------------- | ------ |
| `nuxt.options.experimental.inlineSSRStyles` | `false` |
| `nuxt.options.vite.build.manifest`          | `false` |
| `nuxt.options.vite.build.cssCodeSplit`      | `true` |
| `nuxt.options.webpack.extractCSS`           | `true` |

You can also pass an object to customize the optimization.

````js
{
  optimizeSSR: {
    cleanPreloads: true,
    cleanPrefetches: true,
    inlineStyles: true
  }
}
````

## `detection`

- Type: `Object`

These options can be used to define the initial checks to display the [`BoosterLayer`](/components/booster-layer). The prerequisite are that the [`BoosterLayer`](/components/booster-layer) has been embedded into the layout.
  
````js
{
  performance: true,
  browserSupport: true,
  battery: true
}
````

 | Key              | Type      | Required | Description                                                                                                                                                                                            | Default |
 | ---------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
 | `performance`    | `Boolean` | yes      | Checking whether the [minimum characteristic values](/guide/options#performancemetrics) have been reached. If the test is negative, the [`BoosterLayer`](/components/booster-layer) will be displayed. | `true`  |
 | `browserSupport` | `Boolean` | yes      | Check if the current browser on client side is supported. If the test is negative, the [`BoosterLayer`](/components/booster-layer) will be displayed.                                                  | `true`  |
 | `battery`        | `Boolean` | yes      | Check if the current user save power in browser. If the test is negative, the [`BoosterLayer`](/components/booster-layer) will be displayed.                                                           | `true`  |

::: info
For the browser support detection, the default [Browserslist](https://github.com/browserslist/browserslist) of the NuxtJS configuration is used.
:::

## `performanceMetrics`

- Type: `Object`

With the help of the metrics, the actual performance check on client side can be configured.

````js
{
  device: {
    hardwareConcurrency: { min: 2, max: 48 },
    deviceMemory: { min: 2 }
  },
  timing: {
    fcp: 800,
    dcl: 1200 // fallback if fcp is not available (safari)
  }
}
````

### `device`

- Type: `Object`

Definition of the minimum hardware requirements for visiting the website.

````js
{
  hardwareConcurrency: { min: 2, max: 48 },
  deviceMemory: { min: 2 }
}
````

 | Key                   | Type     | Required | Description            | Default               |
 | --------------------- | -------- | -------- | ---------------------- | --------------------- |
 | `hardwareConcurrency` | `Object` | yes      | min/max number of CPUs | `{ min: 2, max: 48 }` |
 | `deviceMemory`        | `Object` | yes      | min size of memory     | `{ min: 2 }`          |

### `timing`

- Type: `Object`

Definition of the max. FCP duration (ms). If the specified value is exceeded, the [`BoosterLayer`](/components/booster-layer) will be displayed. If the browser does not grant access to the FCP, as fallback the DCL will be evaluated.

````js
{
  fcp: 800,
  dcl: 1200 // fallback if fcp is not available (safari)
}
````

 | Key   | Type     | Required | Description                                                                                                    | Default |
 | ----- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- | ------- |
 | `fcp` | `Number` | yes      | Max. FCP duration in ms [learn More](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint) | `800`   |
 | `dcl` | `Number` | yes      | Max. DCL duration in ms                                                                                        | `1200`  |

## `fonts`

- Type: `Array`

List of all font families used in the project. Only the fonts that are listed in the configuration can be retrieved and integrated via [`$fonts.getFont(...)`](/directives/v-font).

````js
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
````

### Font-Family

- Type: `Object`

Describes a font family with all its variants.

````js
{
  family: 'Font A',
  locals: ['Font A'],
  fallback: ['Arial', 'sans-serif'],
  variances: […]
}
````

| Key         | Type     | Required | Description                                      |
| ----------- | -------- | -------- | ------------------------------------------------ |
| `family`    | `String` | yes      | name of the font family                          |
| `locals`    | `Array`  | yes      | system font name of the specified font family    |
| `fallback`  | `Array`  | yes      | fallback fonts e.g. `['Arial', 'sans-serif']`    |
| `variances` | `Array`  | yes      | list of font family variants (e.g. Bold, Italic) |

::: warning
Prevent sizing discrepancy between your custom and fallback font for perfect swap and reduction of layout shifts. [Learn more](https://meowni.ca/font-style-matcher/)
:::

### Font-Variance

- Type: `Object`

A font variant describes an instance of a font family and is used to generate the `FontFace` declaration.
Font variants differ in [`style`](https://developer.mozilla.org/de/docs/Web/CSS/font-style) and [`weight`](https://developer.mozilla.org/de/docs/Web/CSS/font-weight).

````js
{
  style: 'normal',
  weight: 400,
  sources: [
    { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
    { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
  ]
}
````

| Key       | Type                 | Required | Description                                                            |
| --------- | -------------------- | -------- | ---------------------------------------------------------------------- |
| `style`   | `String`             | yes      | `font-style` of FontFace, e.g. `normal`, `italic`                      |
| `weight`  | `String` or `Number` | yes      | `font-weight` of FontFace, e.g. `400`, `normal`                        |
| `sources` | `Array`              | yes      | list of all font files assigned to the variant ([`sources`](#sources)) |

### `sources`

- Type: `Array`

List of all available font files of a font family variation.

````js
[
  { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
  { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
]
````

| Key    | Type     | Required | Value                                                      |
| ------ | -------- | -------- | ---------------------------------------------------------- |
| `src`  | `String` | yes      | path to a font file, the use of aliases is possible        |
| `type` | `String` | yes      | file format of the specified file, e.g. `woff`, `woff2`, … |

## `targetFormats`

- Type: `Array`
  - Default: `['webp', 'avif', 'jpg|jpeg|png|gif']`

Sets the default formats for the `BoosterPicture`.

Can be overridden in the `BoosterPicture` via the [`formats`](/components/booster-picture#formats) property.

For `png`, `jpeg` and `gif` formats we have added the `|` operator in the declaration.  
This adjusts the destination format to the source format.

### Example

**<span style="color: red;">Bad</span>**

The declaration below generates a `png`, `jpeg` and `gif` (destination format) for each `jpeg` (source format). The same applies to a `png` and a `gif` as source format. However, this is not practical for the source specifications in the Picture.

````js
{
  targetFormats: ['jpg', 'jpeg', 'png', 'gif']
}
````

**<span style="color: green;">Good</span>**

Based on the source format, the appropriate target format is created using the declaration described below.

````js
{
  targetFormats: ['jpg|jpeg|png|gif']
}
````

::: info
For the <code>avif</code> and <code>webp</code> formats the <code>|</code> operator is not needed, because these two image formats do not depend on the source format, as it is the case for <code>png</code>, <code>jpeg</code> and <code>gif</code>.
:::

## `lazyOffset`

- Type: `Object`

Global option for the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) built into the **Nuxt Booster**.

````js
{
  component: '0%',
  asset: '0%' 
}
````

 | Key         | Type     | Required | Description                                                                                                                                                                     | Default |
 | ----------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
 | `component` | `String` | yes      | [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) value for [`BoosterHydrate`](/guide/usage#import-components).                  | `0%`    |
 | `asset`     | `String` | yes      | [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) value for all static ressources (`v-font`, `BoosterPicture` & `BoosterImage`). | `0%`    |

## `disableNuxtFontaine`

- Type: `Boolean`
  - Default: `false`

If set, `@nuxtjs/fontaine` will not be integrated.

::: info
For more information: <https://github.com/nuxt-modules/fontaine>
:::

## `disableNuxtImage`

- Type: `Boolean`
  - Default: `false`

If set, `@nuxt/image` will not be integrated.

::: danger
Note that the use of `BoosterImage`, `BoosterPicture`, `BoosterVimeo` and `BoosterYoutube` is not supported if `@nuxt/image` is not integrated.
:::
