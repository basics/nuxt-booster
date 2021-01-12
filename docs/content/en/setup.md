---
title: Setup
description: ''
position: 2
category: Guide
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Add `@nuxtjs/xxx` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxtjs/nuxt-speedkit
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxtjs/nuxt-speedkit
  ```

  </code-block>
</code-group>

Then, add `@nuxtjs/nuxt-speedkit` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
    // Simple usage
    'nuxt-speedkit',

    // With options
    ['nuxt-speedkit', { 
        fonts: [{
          family: 'Font A',
          locals: ['Font A'],
          fallback: ['Arial', 'sans-serif'],
          variance: [
            {
              style: 'normal',
              weight: 300,
              src: [
                '@/assets/fonts/font-a-300.woff',
                '@/assets/fonts/font-a-300.woff2'
              ]
            }, {
              style: 'italic',
              weight: 300,
              src: [
                '@/assets/fonts/font-a-300Italic.woff',
                '@/assets/fonts/font-a-300Italic.woff2'
              ]
            }, {
              style: 'normal',
              weight: 400,
              src: [
                '@/assets/fonts/font-a-regular.woff',
                '@/assets/fonts/font-a-regular.woff2'
              ]
            }, {
              style: 'italic',
              weight: 400,
              src: [
                '@/assets/fonts/font-a-regularItalic.woff',
                '@/assets/fonts/font-a-regularItalic.woff2'
              ]
            }, {
              style: 'normal',
              weight: 700,
              src: [
                '@/assets/fonts/font-a-700.woff',
                '@/assets/fonts/font-a-700.woff2'
              ]
            }, {
              style: 'italic',
              weight: 700,
              src: [
                '@/assets/fonts/font-a-700Italic.woff',
                '@/assets/fonts/font-a-700Italic.woff2'
              ]
            }
          ]
        }]
     }]
}
```

## Module Options

| Property              | Type      | Description                                                                                                                                       | Default |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ignorePerformance`   | `Boolean` | If set SpeedkitLayer is disabled.                                                                                                                 | `false` |
| `performance`         | `Object`  | Configuration for performance detection.                                                                                                          |         |
| `fonts`               | `Array`   | List of included [fonts](#font-object).                                                                                                           | `[]`    |
| `componentAutoImport` | `Boolean` | If set Component automatically import from module.                                                                                                | `false` |
| `componentPrefix`     | `String`  | Defines a prefix for the module components, important for auto import (`componentAutoImport`). E.g.: `SpeedkitPicture` -> `PrefixSpeedkitPicture` | `null`  |
| `lazyOffset`          | `Object`  | Options for IntersectionObserver `v-font`, `assets` (e.g. `SpeedkitPicture`) and `components` (e.g. `speedkitComponents`)                         |         |



### performance

| Property                         | Type      | Description                                 | Default                     |
| -------------------------------- | --------- | ------------------------------------------- | --------------------------- |
| `device`                         | `Object`  | Device detection Options                    | [defaults](#device-default) |
| `timing`                         | `Object`  | Timing detection Options                    | [defaults](#timing-default) |
| `lighthouseDetectionByUserAgent` | `Boolean` | If sets, `lighthouse` detection is enabled. | `false`                     |


#### device (default)

```js
{
  hardwareConcurrency: { min: 2, max: 48 },
  deviceMemory: { min: 2 }
}
 ```

#### timing (default)

```js
{
  fcp: 800,
  dcl: 1200 // fallback if fcp is not available (safari)
}
 ```

 ### fonts

#### Font Object

| Property   | Type     | Description                                     | Default     |
| ---------- | -------- | ----------------------------------------------- | ----------- |
| `family`   | `String` | Font-Family Name                                | `undefined` |
| `locals`   | `String` | Font-Family local font definition               | `undefined` |
| `fallback` | `Array`  | Fallback fonts e.g. `['Arial', 'sans-serif']`   | `undefined` |
| `variance` | `Array`  | List of [font variances](#font-variance-object) | `[]`        |

```js[example]
{
  family: 'Font A',
  locals: ['Font A'],
  fallback: ['Arial', 'sans-serif'],
  variance: []
}
```

#### Font Variance Object

| Property | Type     | Description                                            | Default     |
| -------- | -------- | ------------------------------------------------------ | ----------- |
| `style`  | `String` | CSS-Prop. `font-style`                                 | `undefined` |
| `weight` | `String` | CSS-Prop. `font-weight`                                | `undefined` |
| `src`    | `String` | File Path without extension. `require` path available. | `[]`        |

```js[example]
{
  style: 'normal',
  weight: 400,
  src: [
    '@/assets/fonts/font-a-regular.woff',
    '@/assets/fonts/font-a-regular.woff2'
  ]
}
```

### lazyOffset

| Property    | Type     | Description                                             | Default |
| ----------- | -------- | ------------------------------------------------------- | ------- |
| `component` | `Object` | `rootMargin` for `speedkitComponents` components.       | `0%`    |
| `asset`     | `Object` | `rootMargin` for `SpeedkitPicture` and `SpeedkitImage`. | `0%`    |


```js[example]
{
  lazyOffset: {
    component: '0%',
    asset: '0%'
  }
}
```
