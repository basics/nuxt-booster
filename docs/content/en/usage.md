---
title: Usage
description: ''
position: 4
category: Guide
components:
  - "Directive zum anwenden von Fonts"
  - Komponenten mit Lazy funktionialität



---

Das Modul wird verwendet um die Performance der Website zu erhöhen. Dafür werden verschiedene Werkzeuge zur verfügung gestellt, die sich um das richtige laden der Resourcen (Bilder, Schriften) kümmern.

Alle Komponenten und Schrift-Definitionen laufen initial alle im Lazy-Modus. Hier bei werden zumbeispiel Bilder und Schriften erst geladen wenn sie sich im Viewport befinden.

Für Fälle die sich initial im Viewport befinden, gibt es die Kritischen Komponenten.

Eine Kritische Komponente stellt hier bei eine Kompoente da, die schon initial Sichtbar ist und somit Schriften und Bilder priorisiert geladen werden.

## Kritische Komponente

Alle Komponenten können Kritische Komponenten sein. Um eine kritische komponente zu erzeugen muss die Eigenschaft `critical` gesetzt werden. Wenn gesetzt, werden die enthaltenen Resources Priorisiert geladen (e.g. link preload)

```html[Example]
<component critical :critical="true" />
```


## Fonts

Um die in der `nuxt.config` definierten Schriften zu verwenden, wird die Direktive [`v-font`](/v-font/) verwendet.

```html[example]
<component v-font="$fonts.getFont(…)" />
```

## Components

Die im Modul enthaltenen Komponenten können über den Namespace `nuxt-speedkit-components` abgefragt werden.

**Verfügbare Komponenten**

- [SpeedkitPicture](/components/speedkit-picture/)
- [SpeedkitImage](/components/speedkit-image/)
- [SpeedkitIframe](/components/speedkit-iframe/)
- [SpeedkitLayer](/components/speedkit-layer/)

```html[example]

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
