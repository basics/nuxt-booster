---
title: Usage
description: ''
position: 4
category: Guide
components:
  - "Directive zum anwenden von Fonts"
  - Komponenten mit Lazy funktionialität



---


'nuxt-speedkit' is used to increase the initial loading performance of the website.  
For this purpose, various tools are provided that optimise the loading and initialisation of resources (images, fonts) and components automatically and on demand.

This has the following impact:
- Reduced initial download of the web page
  1. only the critical viewport resources will be loaded
  2. all other resources will be loaded on demand, e.g. when scrolling.
- Reduction of metrics 
  1. FCP
  2. TTI
  3. TBT

The module recognises the critical resources (images, fonts, Javascript) for the initial load and preloads them when the page is called up directly. However, if an impairment of the UX is detected during the initialisation phase due to the following factors:
  1. no Javascript enabled
  2. reduced bandwidth
  3. weak hardware
  4. unsupported browser

the further initialisation process is paused and the user is given the decision whether to load the website completely (incl. Javascript) or to have only the static content (HTML, CSS, images and fonts) displayed. Through this loading behaviour, a correspondingly high performance score can be achieved even with a low bandwidth, as specified by the lighthouse test, for example. For the user, on the other hand, it becomes transparent why there may be delays in the display of complex components or static resources in the further course of the website visit.

For this reason, this module can only be used with NuxtJS, as this requires static HTML in order to continue to display the full content to the user despite uninitialised Javascript.





Mit den mitgelieferten Komponenten (e.g. `SpeedkitPicture`) und dem Einsatz der Directive `v-font`, wird das laden der Bilder und Schriften ausgesteuert.

Das Laden der Resourcen geschieht erst beim erreichen des sichtbaren Viewport.

Für den Fall das sich eine Komponenten Initial schon im Viewpoert befindet, muss diese als <nuxt-link to="/usage#kritische-komponente">Kritische Komponente</nuxt-link> definiert werden.



## Kritische Komponente

Eine Kritische Komponente, ist eine Kompoente die schon initial Sichtbar ist und somit Schriften und Bilder priorisiert geladen werden.

Alle Komponenten können Kritische Komponenten sein. Um eine kritische komponente zu erzeugen muss die Eigenschaft `critical` gesetzt werden. Wenn gesetzt, werden die enthaltenen Resources Priorisiert geladen (e.g. `<link rel="preload" …`)

```html
<component critical :critical="true" />
```


## Fonts

Um die in der `nuxt.config` definierten Schriften zu verwenden, wird die Direktive `v-font` verwendet.

Mehr unter <nuxt-link to="/v-font">v-font</nuxt-link>.

```html
<component v-font="$fonts.getFont(…)" />
```

## Components
### Einbindung von Komponenten

Für das einbinden von Komponenten in einer Seite wird analog zur Eigenschaft `components`, `speedkitComponents` angeboten. Mit dieser Eigenschaft werden Komponenten automatisch Lazy behandelt und erst aktiviert wenn diese im Viewport sind.

<alert>
Import muss Funktional sein. (e.g. <code>() => import('…')</code>`)
</alert>

```js
{
  speedkitComponents: {
    Stage: () => import('@/components/organisms/Stage'),
  }
}
```

Alle Komponenten werden mit einem `rootMargin` beschrieben. Dieser kann mit der <nuxt-link to="/options#components">Option `lazyOffset.components`</nuxt-link> angepasst werden. 


### Modul Komponenten


Die Modul Komponenten können über den Namespace `nuxt-speedkit-components` importiert werden.


- <nuxt-link to="/components/speedkit-layer">SpeedkitLayer</nuxt-link>
- <nuxt-link to="/components/speedkit-picture">SpeedkitPicture</nuxt-link>
- <nuxt-link to="/components/speedkit-iframe">SpeedkitIframe</nuxt-link>
- <nuxt-link to="/components/speedkit-youtube">SpeedkitYoutube</nuxt-link>

```html

<template>
  <speedkit-picture>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit-components/SpeedkitPicture'
export default {
  components: {
    SpeedkitPicture
  }
}
</script>
```
