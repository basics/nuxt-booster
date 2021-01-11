# nuxt-speedkit

[![Grabarz & Partner - Module][grabarz-partner-module-src]][grabarz-partner-href] 

[![Master][github-workflow-master-src]][github-workflow-master-href]

[![npm version][npm-version-latest-src]][npm-version-latest-href]
[![npm version][npm-version-beta-src]][npm-version-beta-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

[![Renovate - Status][renovate-status-src]][renovate-status-href]
[![License][license-src]][license-href]

# <span style="color: red;">⚠️⚠️⚠️ This Package is work in progress… ⚠️⚠️⚠️</span>

Nuxt Speedkit takes over the Lighthouse performance optimization of your generated website.
All used components and resources are loaded on demand based on the viewport.

Features:
- automatic preloading critical font resources
- dynamic viewport based loading of font resources (subselectors, media queries)
- dynamic loading of images based on bandwidth

Result:
- delivery of the minimum required resources based on the current viewport

[**Release Notes** 📖](./CHANGELOG.md)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Vivaldi |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                            | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           | last 2 versions                                                                                                                                                                                                   |


## Setup

1. Add `nuxt-speedkit` dependency to your project.

```bash
npm run add nuxt-speedkit # or npm install nuxt-speedkit
```

2. Add `nuxt-speedkit` to the `modules` section of `nuxt.config.js`.

```js
{
  modules: [
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
  ]
}
```

## Options

| Property              | Type      | Description                                                                                                                                   | Default |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `fonts`               | `Array`   | List of included [fonts](#font-object).                                                                                                       | `[]`    |
| `componentAutoImport` | `Boolean` | If set Component automatically import from module.                                                                                            | `[]`    |
| `componentPrefix`     | `String`  | Defines a prefix for the module components, important for auto import (`componentAutoImport`). E.g.: `SpeedkitPicture` -> `PrefixLazyPicture` | `[]`    |


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


## Components

The use of the components is default `lazy`.  
`lazy` components are activated by [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).  
If you use the attribute `critical`, the components switch to `eager`.

It is recommended that you declare components visible in the initial viewport with `critical`.  
Any Vue component can be set with the attribute `critical`. 

Important `critical` option is inherited on child nodes.

When using `slot` and `v-font` on a component set directly with `critical`, the font must be set as `critical` separately via [isCritical](#iscritical).

### SpeedkitIframe [[code](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/master/lib/components/SpeedkitIframe.vue)]

Use native attributes to configure [iframe](https://www.w3schools.com/tags/tag_iframe.asp) (eg. `<iframe>`).

```html
<speedkit-iframe src="…" />
```

### LazyImage [[code](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/master/lib/components/LazyImage.vue)]

Use native attributes to configure [image](https://www.w3schools.com/tags/tag_img.asp) (eg. `<img>`).

> Do not use the `loading` attribute, this will break the LazyLoad mechanism.


```html
<lazy-image src="…" />
```

### LazyPicture [[code](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/master/lib/components/LazyPicture.vue)]

Use native attributes to configure [picture](https://www.w3schools.com/tags/tag_picture.asp) (eg. `<picture>`).

```html
<lazy-picture src="…" />
```

#### Properties


```js
{
  alt: '…', // Image alt
  title: '…', // Image Title    
  sources: [
    {
      // srcset can be filled with additional objects for different densities. 
      srcset: [
      {
        url: '…', // File path
        density: undefined// Value for density eg. 1x, 2x, by default not set.
      }
      ],
      type: // mimetype
    }
  ]
}
```


## Using


### Critical Attribute & Option

Use `critical` to switch the component contained in the module or $getFont to `eager`.

#### Examples

**Attribute**

```html
<!-- use default attribute -->
<lazy-picture src="…" critical/>

<!-- use boolean -->
<lazy-picture src="…" :critical="true"/>
```

**Single File Example**

```html
<template>
  <div>
    <span v-font="$getFont(…)"></span>
  </div>
</template>

<script>
export default {
  critical: true,
  props: { … }
}
</script>
```

### v-font

For using the `v-font` directive, you can use `$getFont` to register a font on the current node.  
By multiple Fonts Variants you can set a array.

**Single Variance**
```html 
<node v-font="$getFont(…)">…
```

**Multiple Variance**
```html 
<node v-font="[$getFont(…).bySelector('b,strong'), $getFont(…).bySelector('i')]">…
```

When registering the font with $getFont, a font object is returned.  
This can be used to restrict the font to selectors (`bySelector`) or set as critical (`isCritical`).


### $getFont (family, weight = 400, style = 'normal')

**Parameters**

| Property | Value                           | Default    |
| -------- | ------------------------------- | ---------- |
| family   | Font-Family (eg. `Custom Font`) | *required* |
| weight   | Font-Weight (eg. `700`)         | `400`      |
| style    | Font-Style (eg. `italic`)       | `normal`   |


`$getFont` returns a `FontObject`, with these can be used for other operations.


### `FontObject` Methods

#### isCritical()

**Return:** `FontObject`

Sets the font as critical. Use critical for Font, that you see in the initial viewport.  
Other fonts load by lazyload, when show in viewport.

```html 
<node v-font="$getFont(…).isCritical()">…
```

#### addMedia(...media)

> ⚠️ Font preload not supported orientation media query. e.g. `(orientation: portrait)`

Font load and show by current CSS Media Query.

Ideal for Viewport optimized font load.

```html 
<node v-font="$getFont(…).isCritical().addMedia('(min-width: 992px)')">…
```


#### bySelector(selector)

> ⚠️ Order must be respected when using selectors. [CSS Specificity ](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

**Return:** `FontObject`

Defines css selectors to which the font should be applied. 

```html 
<node v-font="$getFont(…).bySelector('strong')">…
```

OR operators can be defined by string or array.

```html 
<!-- String -->
<node v-font="$getFont(…).bySelector('strong,i')">…

<!-- Array -->
<node v-font="$getFont(…).bySelector('strong', 'i')">…
```


…

## TODOS tasks the release
- [ ] add critical images as preload
- [ ] merge fontTools into font classes
- [ ] check: convert html scripts into dynamic imports -> better & stable load performance
- [ ] rename package
- [ ] add package logo

## TODOS

- [ ] Complete readme
- [ ] Cross Browser (IE Edge, Firefox, Chrome, Edge, Safari)
- [ ] Live example website (eg. grabarzundpartner.de)
- [x] Example/Test pages
- [ ] Create jest test based on test pages
  - [x] v-font
  - [x] LazyImage
  - [x] LazyPicture
  - [ ] SpeedkitIframe
  - [ ] LazyVideo
- [ ] Clean Up!
  - [ ] Namings
  - [ ] code optimization 
- [ ] Publish module (npm, nuxt-modules)

### if we have time
- [ ] vFont-Collector as standalone vue plugin
- [ ] Documentation and preparation for video streaming with LazyVideo
- [ ] IE 11 (FontFace): https://github.com/bramstein/fontloader
- [ ] Cypress visual regression tests


## Development

1. Clone this repository
2. Install dependencies using `npm run install` or `npm install`
3. Start development server using `npm run dev`

## Preview

1. Clone this repository
2. Install dependencies using `npm run install` or `npm install`
3. Build and start with express `npm run start:generate`
4. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in Browser.

or look here

- [Preview](https://grabarzundpartner.github.io/nuxt-speedkit/)
- [Report Client](https://grabarzundpartner.github.io/nuxt-speedkit/reports/webpack/client.html)
- [Report Modern](https://grabarzundpartner.github.io/nuxt-speedkit/reports/webpack/modern.html)
- [Report Server](https://grabarzundpartner.github.io/nuxt-speedkit/reports/webpack/server.html)

## License

[MIT License](./LICENSE)

<!-- Badges -->

[grabarz-partner-module-src]: <https://img.shields.io/badge/Grabarz%20&%20Partner-Module-d19700>
[grabarz-partner-href]: <https://grabarzundpartner.de>

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-master-src]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/workflows/Master/badge.svg?branch=master>
[github-workflow-master-href]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/actions?query=workflow%3AMaster>

[license-src]: https://img.shields.io/npm/l/nuxt-speedkit.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-speedkit

[npm-version-latest-src]: https://img.shields.io/npm/v/nuxt-speedkit/latest.svg?
[npm-version-beta-src]: https://img.shields.io/npm/v/nuxt-speedkit/beta.svg?style=flat-square
[npm-version-latest-href]: https://npmjs.com/package/nuxt-speedkit/v/latest
[npm-version-beta-href]: https://npmjs.com/package/nuxt-speedkit/v/beta

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-speedkit.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-speedkit

