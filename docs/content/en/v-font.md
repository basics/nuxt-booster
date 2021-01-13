---
title: v-font
description: ''
position: 6
category: Directives
---

Um die in den Modul-Options definierten Schriften zu verwenden, wird die Direktive `v-font` verwendet.

Diese Direktive kann auf jeden Tag in einer Komponente definiert werden. 

<alert>
Wenn die Eltern-Komponente der Directive <code>critical</code> ist, sind Schriften initial aktiv und werden als Preload geladen.<br>
Eignet sich für Initial schon enthaltene Headlines oder Texte.
</alert>

In der Directive `v-font` kann entweder ein einzlener WErt oder eine Liste definiert werden. Eine Definition einer Schrift findet über die Methode `$fonts.getFont` statt.

```html[example]

<!-- single definition -->
<node v-font="$fonts.getFont()">

<!-- multiple definitions -->
<node v-font="[
  $fonts.getFont(),
  $fonts.getFont()
]">

```


## $fonts.getFont


**Parameters**

| Property | Value                           | Default    |
| -------- | ------------------------------- | ---------- |
| family   | Font-Family (eg. `Custom Font`) | *required* |
| weight   | Font-Weight (eg. `700`)         | `400`      |
| style    | Font-Style (eg. `italic`)       | `normal`   |
| options  | Other options for definition    | `normal`   |


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
  $getFont('Font Family B', 700, 'normal', { selector: 'b, strong', media: '(min-width: 768px)' }),
]">…</article>
```
