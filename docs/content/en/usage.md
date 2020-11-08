---
title: Usage
description: ''
position: 4
category: Guide
---

Alle Komponenten und Schriften definierungen können Lazy oder Eager verwendet werden.

Die unterscheidung für das Ladeverhalten wird über die Option `critical` definiert.

Dies ermöglicht das gezielte definieren von Resourcen die initial beim laden der Seite geladen werden und Asynchron beim erreichen des jeweiligen Viewports.

## Define Critical

### Componenten

Das setzen von `critical` in Komponenten ist in zwei Varianten verfügbar.

> Wichtig: Der zustand `critical` wird von der Eltern Komponente übernommen.


#### Skeleton

Setzen von `critical` im Skeleton.

```html
<template>…</template>
<script>
  export default {
    critical: true
  }
</script>
```

#### Attribut

Setzen von `critical` als Attribut.

```html
<template>
  <lazy-image critical></lazy-image>
</template>
```

### Fonts

Die Schriften können direkt oder über eine Komponente auf `critical` gesetzt werden.

Wenn die aktuelle oder Eltern Komponente critical ist, wird dieser Zustand übernommen.

Das direkt setzen von `critical` geschieht auf dem Font-Objekt, über die Methode `isCritical`.

```html
<template>
  <span v-font="$font.getFont(…).isCritical()">Hello World</span>
</template>
```

## Use Fonts

Schrift zuweisung finden im Template der Componente statt. 

> Nicht erlaubte CSS Eigenschaften im Style der Componente:
> - font-family
> - font-weight
> - font-style

Schriten werden mit der Directive `v-font` zugewiesen. Erstellt werden die Schriften mit `$fonts.getFont()`. Der Aufruf erzeugt eine neue Font-Definition.




## Use Lazy Components


The use of the components is default `lazy`.  
`lazy` components are activated by [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).  
If you use the attribute `critical`, the components switch to `eager`.

It is recommended that you declare components visible in the initial viewport with `critical`.  
Any Vue component can be set with the attribute `critical`. 

Important `critical` option is inherited on child nodes.

When using `slot` and `v-font` on a component set directly with `critical`, the font must be set as `critical` separately via [isCritical](#iscritical).



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
