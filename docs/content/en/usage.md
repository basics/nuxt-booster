---
title: Usage
description: ''
position: 13
category: Guide
components:
  - "Directive zum anwenden von Fonts"
  - Komponenten mit Lazy funktionialität

---



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
