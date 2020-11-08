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
  yarn add @nuxtjs/xxx
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxtjs/xxx
  ```

  </code-block>
</code-group>

Then, add `@nuxtjs/xxx` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
    // Simple usage
    'nuxt-speedkit',

    // With options
    ['nuxt-speedkit', { 
        fonts: [{
          family: 'Font A',
          fallback: ['Arial', 'sans-serif'],
          variance: [
            {
              style: 'normal',
              weight: 300,
              src: '@/assets/fonts/font-a-300'
            }, {
              style: 'italic',
              weight: 300,
              src: '@/assets/fonts/font-a-300Italic'
            }, {
              style: 'normal',
              weight: 400,
              src: '@/assets/fonts/font-a-regular'
            }, {
              style: 'italic',
              weight: 400,
              src: '@/assets/fonts/font-a-regularItalic'
            }, {
              style: 'normal',
              weight: 700,
              src: '@/assets/fonts/font-a-700'
            }, {
              style: 'italic',
              weight: 700,
              src: '@/assets/fonts/font-a-700Italic'
            }
          ]
        }]
     }]
}
```

## Module Options

| Property              | Type      | Description                                                                                                                               | Default |
| --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `fonts`               | `Array`   | List of included [fonts](#font-object).                                                                                                   | `[]`    |
| `componentAutoImport` | `Boolean` | If set Component automatically import from module.                                                                                        | `[]`    |
| `componentPrefix`     | `String`  | Defines a prefix for the module components, important for auto import (`componentAutoImport`). E.g.: `LazyPicture` -> `PrefixLazyPicture` | `[]`    |


### Font Object

| Property   | Type     | Description                                     | Default     |
| ---------- | -------- | ----------------------------------------------- | ----------- |
| `family`   | `String` | Font-Family Name                                | `undefined` |
| `fallback` | `Array`  | Fallback fonts e.g. `['Arial', 'sans-serif']`   | `undefined` |
| `variance` | `Array`  | List of [font variances](#font-variance-object) | `[]`        |


### Font Variance Object

| Property | Type     | Description                                            | Default     |
| -------- | -------- | ------------------------------------------------------ | ----------- |
| `style`  | `String` | CSS-Prop. `font-style`                                 | `undefined` |
| `weight` | `String` | CSS-Prop. `font-weight`                                | `undefined` |
| `src`    | `String` | File Path without extension. `require` path available. | `[]`        |


