---
title: SpeedkitIframe
description: ''
position: 35
category: Components

primaryList:
  - Freeze (Short freeze of the page)
  - Delayed loading of resources  (Bilder, Fonts)
  - Unnecessarily generated traffic
secondaryList:
  - Iframe load is reactive.
  - No resources are blocked during loading.
  - Traffic is only generated when the iframe is visible.

---

`SpeedkitIframe`, Iframe & IntersectionObserver in one.

## Exkurs

Iframes have a tendency, in the special case of the initial page load, to disrupt the construction and initialisation of the actual page through the massive loading of resources from another source. 

**For the user, this is particularly visible by:**

<list :items="primaryList" type="warning"></list>

## Solution

In order to solve these points, care should be taken to ensure that the initialisation of the iframe takes place downstream.
This can be realised, for example, via an [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver). 
This sets the source on the iframe only when the visible viewport has been reached.

**The following conditions can thus be fulfilled:**

<list :items="secondaryList" type="success"></list>

The strategy mentioned above is provided by the `SpeedkitIframe`, which can be used in the same way as a normal [HTML Iframe](https://www.w3schools.com/tags/tag_iframe.asp).
The included [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) is configured via the `intersectionObserver` property. 

## Usage

The `SpeedkitIframe` is used like a normal [HTML Iframe](https://www.w3schools.com/tags/tag_iframe.asp).

### Example
```vue
<template>
  <speedkit-iframe v-bind="iframe" @load="onIFrameLoaded" />
</template>

<script>
  export default {
    data: {
      iframe: {
       src: '…',
       intersectionObserver: { trackVisibility: true, delay: 350 }
      }
    },
    methods: {
      onIFrameLoaded (){
        console.log('iframe loaded!');
      }
    }
  };
</script>
```

## Properties

> Use native attributes from [HTML Iframe](https://www.w3schools.com/tags/tag_iframe.asp).
### `intersectionObserver`
- Type: `Object` [IntersectionObserver Properties](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver#properties)
  - Default: `{ trackVisibility: true, delay: 350 }`

Sets the options from the integrated [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).  

For advanced usage, [learn more](https://web.dev/intersectionobserver-v2/) about option `trackVisibility` from [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

## Events

```html
<speedkit-iframe 
  @load="console.log('Loaded!')" 
  @enter="console.log('Enter Viewport!')" 
/>
```

| Name    | Description                                        |
| ------- | -------------------------------------------------- |
| `load`  | Triggered when Iframe has finished loading.        |
| `enter` | Triggered when component has reached the viewport. |
