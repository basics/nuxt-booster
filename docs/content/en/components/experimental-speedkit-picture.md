---
title: SpeedkitPicture (Experimental)
description: ''
position: 31
category: Components
features:
  - generation of multiple image resolutions (srcset)
  - breakpoint-based differentiation of multiple image resolutions and ratios (srcset + media-rule)
  - generation of breakpoint-based placeholders (different ratios e.g. for mobile portrait and landscape)
  - optimized preloading of critical image resources
  - lazy load of non-critical image resources
  - base path support
  - lazy hydration support
  - load and optimize remote images from custom domains
  - full SEO support

---

`SpeedkitPicture` is based on the module `@nuxt/image@0.2.0`. However, we have created a separate Vue component for it, because at the time of the implementation of the module the component `NuxtPicture` and the API for generating the images were not yet completely finished, or this module did not yet completely cover our use-case. We hope that with the final completion of [`@nuxt/image`](https://image.nuxtjs.org/) we will be able to remove our component `SpeedkitPicture` and can use `@nuxt/image` & `NuxtPicture` with full functionality.

<alert type="warning">This is an experimental component that we will offer until [`nuxt/image`](https://image.nuxtjs.org/) is fully feature-complete released. This also means that we will accept bug reports for the `SpeedkitPicture` component. However, we will not fix bugs that are present in the generator of `@nuxt/image`.</alert>

## Features

With the current implementation of `SpeedkitPicture` we can cover the following functionality:

<list :items="features"></list>

## Usage

Das `SpeedkitPicture` (Experimental) verwendet man um vollautomatisiert unterschiedliche Bildgrößen und/oder Bildverhältnisse für verschiedene Viewports zu generieren und darzustellen.

Die angegebenen Ressourcen können per absolutem Pfad (static folder) oder vollständiger URL angegeben werden. [`nuxt/image`](https://image.nuxtjs.org/) downloaded vollautomatisiert die Ressourcen und legt die generierten und optimierten renditions im destination Ordner ab.

### Example

```vue
<template>
  <div>
    <speedkit-picture v-bind="image" />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit-component/experimental/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  data () {
    return {
      image: {
        sources: [
          { src: 'landscape.jpg', sizes: '576:576,1024:1024,1280:1280,1680:1680,1920:1920' },
          { src: 'portrait.jpg', sizes: '414,768:768' }
        ],
        title: 'Image Title',
        alt: 'Image Alt'
      }
    };
  }
};
</script>
```

## Properties

```js
{
  sources: […],
  alt: 'Image Alt',
  title: 'Image Title',
  crossorigin: 'anonymous'
}
```

### `sources`
- Type: `Array`

Liste der verwendeten Ressourcen.

<alert><strong>Beachte:</strong> Wenn mehr als eine Ressource enthalten ist, wird die kleinste Breite aus der Property `sizes` als Bedingung für die Source genommen e.g. `(min-width: 992px)`.
Dies ermöglicht Viewport abhängige Bildverhältnisse.</alert>

Informationen zu Eigenschaft `src` findest du unter [hier](https://image.nuxtjs.org/components/nuxt-img#src).

Eigenschaft `sizes` beschreibt die Bildgrößen in der die Ressource angezeigt werden soll. Bildgrößen sind Kommaseparatiert und beschreiben die Bildbreite und deren abhängige Viewportbreite e.g. `ImageWidth:MinWidth`.

Im folgenden Beispiel werden zwei unterschiedliche Bildverhältnisse verwendet.

- `landscape.jpg` wird bei einem Viewport von `992px` mit einer Bildgröße von `1024px` angewendet.  
- `portrait.jpg` wird unterhalb von `992px` angewendet und hat zwei Viewport abhängige Bildgrößen, bei `(min-width: 768px)` die Breite `768px` und alles darunter die Breite `414px`.

```js
[
  
  { src: 'landscape.jpg', sizes: '992:1024' },
  { src: 'portrait.jpg', sizes: '414,768:768' }
]
```
#### 

### `critical`
- Type: `Boolean`
  -  Default: `$parent.isCritical`

Set component as critical component. 

[Learn more about critical components](/usage#critical-prop-for-critical-components)

### `alt`
- Type: `String`

Image alternative Text. 

[MDN - HTMLImageElement.alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `title`
- Type: `String`

Image Title. 

[MDN - HTMLElement.title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title)

### `crossorigin`
- Type: `String`
  - default: `anonymus`

Image CrossOrigin. 

[MDN - HTMLImageElement.crossOrigin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin)

## Events

```html
<speedkit-picture 
  @load="console.log('Loaded!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `load`

Tritt ein wenn Bild Resource komplett geladen wurde.

### `enter`

Tritt ein wenn Komponente den Viewport erreicht hat.
