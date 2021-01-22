---
title: Usage
description: ''
position: 4
category: Guide
components:
  - "Directive zum anwenden von Fonts"
  - Komponenten mit Lazy funktionialität



---


`nuxt-speedkit` benutzt du um die Performance der Website zu erhöhen.  
Dafür werden verschiedene Werkzeuge zur verfügung gestellt, die dir beim laden der Resourcen (Bilder, Schriften) und Komponenten helfen.

Geholfen wird bei:

1. Beschleunigen des initialen Seiten-Loads.
2. Ressourcen sparende Komponente. (e.g. Lazy load bei Bilder)
3. Laden und verwenden von WebFonts.

Primär dient dieses Modul zum überprüfen ob ein Benutzer mit einer Schlechten Verbindung oder nicht ausreichender Hardware zugreift.

Falls dieser Fall eintritt (e.g. Lighhous / Pagespeed Insight), wird das ausführen des Javascript blockiert, dies veringert den initial Seiten Load. 

Im Anschluss kann der Benutzer über eine Interaktion (e.g. Button-Click) das Javascript scharfschalten und die Seite verwenden. (Alle benötigten Scripte werden wurden als Preload schon geladen.)




Mit den mitgelieferten Komponenten (e.g. `SpeedkitPicture`) und dem Einsatz der Directive `v-font`, wird das laden der Bilder und Schriften ausgesteuert.

Das Laden der Resourcen geschieht erst beim erreichen des sichtbaren Viewport.

Für den Fall das sich eine Komponenten Initial schon im Viewpoert befindet, muss diese als [Kritischen Komponenten](/usage/#kritische-komponente) definiert werden.



## Kritische Komponente

Eine Kritische Komponente, ist eine Kompoente die schon initial Sichtbar ist und somit Schriften und Bilder priorisiert geladen werden.

Alle Komponenten können Kritische Komponenten sein. Um eine kritische komponente zu erzeugen muss die Eigenschaft `critical` gesetzt werden. Wenn gesetzt, werden die enthaltenen Resources Priorisiert geladen (e.g. `<link rel="preload" …`)

```html[Example]
<component critical :critical="true" />
```


## Fonts

Um die in der `nuxt.config` definierten Schriften zu verwenden, wird die Direktive `v-font` verwendet.

Siehe mehr unter [v-font](/v-font/).

```html[Example]
<component v-font="$fonts.getFont(…)" />
```

## Components
### Einbindung von Komponenten

Für das einbinden von Komponenten in einer Seite wird analog zur Eigenschaft `components`, `speedkitComponents` angeboten. Mit dieser Eigenschaft werden Komponenten automatisch Lazy behandelt und erst aktiviert wenn diese im Viewport sind.

<alert>
Import muss Funktional sein. (e.g. <code>() => import('…')</code>`)
</alert>

```js[Example]
{
  speedkitComponents: {
    Stage: () => import('@/components/organisms/Stage'),
  }
}
```

Alle Komponenten werden mit einem `rootMargin` beschrieben. Dieser kann mit der [Option `lazyOffset.components`](/options/#components) angepasst werden. 


### Modul Komponenten


Die Modul Komponenten können über den Namespace `nuxt-speedkit-components` importiert werden.


- [SpeedkitPicture](/components/speedkit-picture/)
- [SpeedkitImage](/components/speedkit-image/)
- [SpeedkitIframe](/components/speedkit-iframe/)
- [SpeedkitLayer](/components/speedkit-layer/)

```html[Example]

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
