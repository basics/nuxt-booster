---
title: v-font
description: ''
position: 6
category: Directives
---

Für die verwendung der Modul definierten Schriften, wird die Direktive `v-font` verwendet.

Diese Direktive kann auf jeden Tag in einer Komponente definiert werden. 

<alert>
Wenn die Eltern-Komponente <code>critical</code> ist, werden die Schriften priorisiert geladen und sind initial Aktiv.<br>
Eignet sich für initial im Viewport sichtbare Komponenten.
</alert>

In der Directive `v-font` kann entweder ein einzlener Font oder eine Liste definiert werden. Eine Definition einer Schrift findet über die Methode `$getFont` statt.

```html[example]

<!-- single definition -->
<node v-font="$getFont(…)">

<!-- multiple definitions -->
<node v-font="[
  $getFont(…),
  $getFont(…)
]">

```

## Methods
### `$getFont`

`$getFont` wird als Plugin eingebunden und ist über jeden Komponenten-Scope abrufbar. 

**Parameters**

| Property | Value                           | Default     |
| -------- | ------------------------------- | ----------- |
| family   | Font-Family (eg. `Custom Font`) | *required*  |
| weight   | Font-Weight (eg. `700`)         | `400`       |
| style    | Font-Style (eg. `italic`)       | `normal`    |
| options  | Other options for definition    | `undefined` |


### options

| Property   | Type     | Description                                      | Default     |
| ---------- | -------- | ------------------------------------------------ | ----------- |
| `media`    | `String` | CSS Media Query (e.g. `(min-width: 768px)`)      | `undefined` |
| `selector` | `String` | CSS Selector (e.g. `element, .elm, .elm:before`) | `undefined` |


<alert>
<code>link</code> Tag is not supported orientation media query. e.g. <code>(orientation: portrait)</code>.
This has an effect on prefetches and preloads.
</alert>

```js[example]
{
  media: '(min-width: 768px)',
  selector: 'element, .elm, .elm:before'
}
```

## Examples

### Basic Usage

```vue[Example]
<h1 v-font="$getFont('Font Family', 700)">Headline</h1>
```
### Advanced Usage

```vue[Example]
<article v-font="[
  $getFont('Font Family A'),
  $getFont('Font Family B', 700, 'normal', { selector: 'b, strong' }),
  $getFont('Font Family B', 400, 'normal', { media: '(min-width: 768px)' }),
  $getFont('Font Family B', 700, 'normal', { selector: 'b, strong', media: '(min-width: 768px)' })
]">…</article>
```
