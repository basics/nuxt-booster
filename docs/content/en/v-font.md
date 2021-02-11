---
title: v-font
description: ''
position: 6
category: Directives
---

Die in den Module Optionen definierten Schriften, werden mit der Direktive `v-font` verwendet. 

In der Directive `v-font` wird über die im Komponenten Scope (e.g. `this`), enthaltene Methode `$getFont` die jeweilige Schrift abgerufen.

 Für Multiple Schriften, kann eine Liste (`Array`) übergeben werden.

```html[example]

<!-- single definition -->
<node v-font="$getFont(…)">

<!-- multiple definitions -->
<node v-font="[
  $getFont(…),
  $getFont(…)
]">

```


Schriften werden mit `family`, `weight` und `style` angegeben und können über die Optionen (`media`, `selector`) auf Elemente und Viewports eingegrenzt werden.

Normalerweise schaltet die direktive die Schriften erst bei erreichen des Viewports aktiv, es empfiehlt sich für initial im Viewport enthaltenen Komponenten die verwendung der Eigenschaft `critical`.  
Mehr unter [Kritische Komponente](/usage#kritische-komponente).


## `$getFont`

`$getFont` wird als Plugin eingebunden und ist über jeden Komponenten-Scope abrufbar. 

Wird in der Direktive `v-font` verwendet und erzeugt jeweilige Font-Definition.

| Property | Value                                         | Default     |
| -------- | --------------------------------------------- | ----------- |
| family   | Font-Family (eg. `Custom Font`)               | *required*  |
| weight   | Font-Weight (eg. `700`)                       | `400`       |
| style    | Font-Style (eg. `italic`)                     | `normal`    |
| options  | Media & Selector Options [see more](#options) | `undefined` |


### options

| Property   | Type     | Description                                      | Default     |
| ---------- | -------- | ------------------------------------------------ | ----------- |
| `media`    | `String` | CSS Media Query (e.g. `(min-width: 768px)`)      | `undefined` |
| `selector` | `String` | CSS Selector (e.g. `element, .elm, .elm:before`) | `undefined` |


<alert type="danger">
<code>link</code> Tag is not supported orientation media query. e.g. <code>(orientation: portrait)</code>.
This has an effect on prefetches and preloads.
</alert>

```js[example]
{
  media: '(min-width: 768px)',
  selector: 'element, .elm, .elm:before'
}
```

## Best Practice

### Platzierung

Setze den `v-font` immer auf ein Child-Tag der Komponente.

```vue[Bad]
<template>
  <div v-font="$getFont('Font Family A')">
    <span>…</span>
  </div>
</template>
```

```vue[Good]
<template>
  <div>
    <span v-font="$getFont('Font Family A')">…</span>
  </div>
</template>
```

## Examples

### Basic Usage

```vue[Example]
<h1 v-font="$getFont('Font Family', 700)">Headline</h1>
```
### Advanced Usage

```vue[Example]
<article v-font="[
  
  // Font wird auf alles angewendet
  $getFont('Font Family A'),

  // Font wird auf `b` und `strong` Tags angwendet
  $getFont('Font Family B', 700, 'normal', { selector: 'b, strong' }),

  // Font erscheint erst ab Viewport `>768px`
  $getFont('Font Family B', 400, 'normal', { media: '(min-width: 768px)' }),

  // Font wird auf `b` und `strong` Tags angwendet und erscheint erst ab Viewport `>768px`
  $getFont('Font Family B', 700, 'normal', { selector: 'b, strong', media: '(min-width: 768px)' })

]">…</article>
```
