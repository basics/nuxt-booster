---
title: v-font
description: ''
position: 20
category: Directives
---

Fonts are the great mystery on the Internet. For more complex designs it is not uncommon that more than 6 font files have to be loaded. It would be desirable if there were many more variable fonts, but the reality is usually different. Often, developers are forced to register tens of fonts with different font styles. So it can happen that the website needs a total of 12 font files, which have to be loaded initially to achieve the right visual result on the whole page.

This is really a performance problem. If you look for solutions, you like to hear

- don't use WebFonts that have to be reloaded
- use another optimized font
- reduce the number of used fonts
- embed the fonts via Base64

In the internet you can find some articles about font loading. But most of them are more than 3 years old. So not much new has happened on that front. A nice and recommendable list of different strategies can be found at https://github.com/zachleat/web-font-loading-recipes or 
https://www.zachleat.com/web/comprehensive-webfonts/. From this it can be deduced that there is still no universal solution to the problem. However, it is possible to approach the issue very efficiently by using a preload strategy and setting classes accordingly. However, this does not make the handling of the fonts any easier. On the one hand, the preloads have to be defined per page and on the other hand, the CSS in the respective component has to be activated with the corresponding font declaration per class on demand. This is manageable for smaller projects in a 1 person team. But if several people are working in parallel, it can quickly become a horror trip. This will inevitably lead to the fact that the approach will not be accepted by the team in the long run and the optimization will be optimized out of the project in the long run.

<alert type="info">A few words about Google Fonts: If possible, the FontFaces should always be included directly as Woff/Woff2 files via inline style. The loading mechanism via external CSS file, as it is the case with Google Fonts, creates an additional network roundtrip, which delays the loading of the actual font files.</alert>

## Solution

The strategy mentioned above makes sense, but is hardly implementable with the current tools. For this reason, we are introducing Directive v-font, which takes care of the outlined behavior in a fully automated way and thus represents a truly relevant solution even on larger projects.

## Usage

Die Directive `v-font` wird verwendet, um die in den [Module Optionen definierten Schriften](/options#fonts) in der Website zu verwenden.

In der Directive `v-font` wird über die im Komponenten Scope (e.g. `this`), enthaltene Methode `$getFont` die jeweilige Schrift abgerufen.

 Für Multiple Schriften, kann eine Liste (`Array`) übergeben werden.

```html

<!-- single definition -->
<node v-font="$getFont(…)">

<!-- multiple definitions -->
<node v-font="[
  $getFont(…),
  $getFont(…)
]">
```

Schriften werden anhand der `family`, `weight` und dem `style` angegeben und können über die Optionen (`media`, `selector`) auf Elemente und Viewports eingegrenzt werden.

Normalerweise schaltet die Direktive die Schriften erst bei erreichen des Viewports aktiv.  
Es empfiehlt sich, bei schon initial im Viewport enthaltenen Komponenten die verwendung der Eigenschaft `critical`.

Bei [Kritische Komponente](/usage#kritische-komponente) werden die Schriften vorgeladen und sind initial aktiv.
## `$getFont`

`$getFont` wird als Plugin eingebunden und ist über jeden Komponenten Scope abrufbar. 

Wird in der Direktive `v-font` verwendet und erzeugt jeweilige Font-Definition.

| Key       | Type               | Requried | Description                                                                   | Default  |
| --------- | ------------------ | -------- | ----------------------------------------------------------------------------- | -------- |
| `family`  | `String`           | yes      | Font-Family e.g. `Custom Font`                                                |          |
| `weight`  | `String`, `Number` |          | Font-Style e.g. `normal`, `italic`                                            | `400`    |
| `style`   | `String`           |          | Font-Weight e.g. `400`, `normal`                                              | `normal` |
| `options` | `Object`           |          | Media & Selector Options <nuxt-link to="/v-font#options">see more</nuxt-link> |          |


### options

| Key        | Type     | Requried | Description                                    | Default |
| ---------- | -------- | -------- | ---------------------------------------------- | ------- |
| `media`    | `String` |          | CSS Media Query e.g. `(min-width: 768px)`      |         |
| `selector` | `String` |          | CSS Selector e.g. `element, .elm, .elm:before` |         |


<alert type="danger">
<code>link</code> Tag is not supported orientation media query. e.g. <code>(orientation: portrait)</code>.
This has an effect on prefetches and preloads.
</alert>

```js
{
  media: '(min-width: 768px)',
  selector: 'element, .elm, .elm:before'
}
```

## Best Practice

### Platzierung
### Never use with `v-html` or `v-text`

Setze den `v-font` niemals zusammen mit einem `v-html` oder `v-text`.

**<span style="color: red;">Bad</span>**
```html
<template>
  <div>
    <div v-font="$getFont('Font Family A')" v-html="…">…</div>
  </div>
</template>
```

**<span style="color: green;">Good</span>**
```html
<template>
  <div>
    <div v-font="$getFont('Font Family A')">
      <div v-html="…" />
    </div>
  </div>
</template>
```

## Examples

### Basic Usage

```html
<h1 v-font="$getFont('Font Family', 700)">Headline</h1>
```
### Advanced Usage

```js
[
  
  // Font wird auf alles angewendet
  $getFont('Font Family A'),

  // Font wird auf `b` und `strong` Tags angwendet
  $getFont('Font Family B', 700, 'normal', { selector: 'b, strong' }),

  // Font erscheint erst ab Viewport `>768px`
  $getFont('Font Family B', 400, 'normal', { media: '(min-width: 768px)' }),

  // Font wird auf `b` und `strong` Tags angwendet und erscheint erst ab Viewport `>768px`
  $getFont('Font Family B', 700, 'normal', { selector: 'b, strong', media: '(min-width: 768px)' })

]
```
