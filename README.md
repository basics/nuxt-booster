# lazy-resources

[![Grabarz & Partner - Module][grabarz-partner-module-src]][grabarz-partner-href] 

[![Master][github-workflow-master-src]][github-workflow-master-href]

[![Renovate - Status][renovate-status-src]][renovate-status-href]
[![License][license-src]][license-href]

> 

[**Release Notes** 📖](./CHANGELOG.md)

## Setup

1. Add `lazy-resources` dependency to your project.

```bash
npm run add lazy-resources # or npm install lazy-resources
```

2. Add `lazy-resources` to the `modules` section of `nuxt.config.js`.

```js
{
  modules: [
    // Simple usage
    'lazy-resources',

    // With options
    ['lazy-resources', { /* module options */ }]
  ]
}
```

## Components

The use of the components is default `lazy`.  
`lazy` components are activated by [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).  
If you use the attribute `critical`, the components switch to `eager`.

It is recommended that you declare components visible in the initial viewport with `critical`.  
Any Vue component can be set with the attribute `critical`. 

Important `critical` option is inherited on child nodes.

When using `slot` and `v-font` on a component set directly with `critical`, the font must be set as `critical` separately via [isCritical](#iscritical).

### LazyIframe [[code](https://github.com/GrabarzUndPartner/lazy-resources/blob/master/lib/components/LazyIframe.vue)]

Use native attributes to configure [iframe](https://www.w3schools.com/tags/tag_iframe.asp) (eg. `<iframe>`).

```html
<lazy-iframe src="…" />
```

### LazyImage [[code](https://github.com/GrabarzUndPartner/lazy-resources/blob/master/lib/components/LazyImage.vue)]

Use native attributes to configure [image](https://www.w3schools.com/tags/tag_img.asp) (eg. `<img>`).

> Do not use the `loading` attribute, this will break the LazyLoad mechanism.


```html
<lazy-image src="…" />
```

### LazyPicture [[code](https://github.com/GrabarzUndPartner/lazy-resources/blob/master/lib/components/LazyPicture.vue)]

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
<node v-font="[$getFont(…).isCritical()]">…
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

## Usage







…

## TODOS

- [ ] create jest test for check usage


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

- [Preview](https://grabarzundpartner.github.io/lazy-resources/)
- [Report Client](https://grabarzundpartner.github.io/lazy-resources/reports/webpack/client.html)
- [Report Modern](https://grabarzundpartner.github.io/lazy-resources/reports/webpack/modern.html)
- [Report Server](https://grabarzundpartner.github.io/lazy-resources/reports/webpack/server.html)

## License

[MIT License](./LICENSE)

<!-- Badges -->

[grabarz-partner-module-src]: <https://img.shields.io/badge/Grabarz%20&%20Partner-Module-d19700>
[grabarz-partner-href]: <https://grabarzundpartner.de>

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-master-src]: <https://github.com/GrabarzUndPartner/lazy-resources/workflows/Master/badge.svg?branch=master>
[github-workflow-master-href]: <https://github.com/GrabarzUndPartner/lazy-resources/actions?query=workflow%3AMaster>

[license-src]: https://img.shields.io/npm/l/lazy-resources.svg?style=flat-square
[license-href]: https://npmjs.com/package/lazy-resources
