---
title: v-font
description: ''
position: 20
category: Directives

solutions: 
- don't use WebFonts that have to be loaded
- use another optimized font
- reduce the number of used fonts
- embed the fonts via Base64
---

Fonts are the great mystery on the Internet. For more complex designs it is not uncommon that more than 6 font files have to be loaded. It would be desirable if there were many more variable fonts, but the reality is usually different. Often, developers are forced to register tens of fonts with different font styles. So it can happen that the website needs a total of 12 font files, which have to be loaded initially to achieve the right visual result on the whole page.

This is really a performance problem. If you look for solutions, you like to hear

<list :items="solutions" type="info"></list>

In the internet you can find some articles about font loading. But most of them are more than 3 years old. So not much new has happened on that front. A nice and recommendable list of different strategies can be found at [web-font-loading-recipes](https://github.com/zachleat/web-font-loading-recipes) or 
[comprehensive-webfonts](https://www.zachleat.com/web/comprehensive-webfonts/). From this it can be deduced that there is still no universal solution to the problem. However, it is possible to approach the issue very efficiently by using a preload strategy and setting classes accordingly. However, this does not make the handling of the fonts any easier. On the one hand, the preloads have to be defined per page and on the other hand, the CSS in the respective component has to be activated with the corresponding font declaration per class on demand. This is manageable for smaller projects in a 1 person team. But if several people are working in parallel, it can quickly become a horror trip. This will inevitably lead to the fact that the approach will not be accepted by the team in the long run and the optimization will be optimized out of the project in the long run.

<alert type="info">A few words about Google Fonts: If possible, the FontFaces should always be included directly as Woff/Woff2 files via inline style. The loading mechanism via external CSS file, as it is the case with Google Fonts, creates an additional network roundtrip, which delays the loading of the actual font files.</alert>

## Solution

The strategy mentioned above makes sense, but is hardly implementable with the current tools. For this reason, we are introducing Directive `v-font`, which takes care of the outlined behavior in a fully automated way and thus represents a truly relevant solution even on larger projects.

## Usage

The directive `v-font` is used to integrate the fonts defined in the [module options](/options#fonts) into the website.

To do this, the respective font must be retrieved via the `$getFont` method contained in the component scope (e.g. `this`).

Fonts are specified by `family`, `weight` and `style` and can be limited to elements and viewports via the options (`media`, `selector`).

Normally the directive activates the fonts only when the viewport is reached.
It is recommended to use the property `critical` for components that are already initially contained in the viewport.

With critical component the fonts are preloaded and are initially active.
More information on critical components can be found [here](/usage#critical-prop-for-critical-components).

For multiple fonts, a list (`Array`) can be passed.

```html

<!-- single definition -->
<node v-font="$getFont(…)">

<!-- multiple definitions -->
<node v-font="[
  $getFont(…),
  $getFont(…)
]">
```

<alert type="danger">Currently the use of `v-font` on components or in combination with `v-html/v-text` directives is not possible. Caused is a bug in the Vue SSR, directive is not applied.<br><br>Read more in the Issue: [vue-server-renderer: directive not applied to imported component](https://github.com/vuejs/vue/issues/10733).<br><br>As long as this error exists, you can look [**here**](/directives/v-font#workarounds) for workarounds.
</alert>


## `$getFont`

`$getFont` is included as a plugin and can be accessed via any component scope.

Is used in the `v-font` directive and creates the relevant font definition.

| Key       | Type               | Requried | Description                                                     | Default  |
| --------- | ------------------ | -------- | --------------------------------------------------------------- | -------- |
| `family`  | `String`           | yes      | Font-Family e.g. `Custom Font`                                  |          |
| `weight`  | `String`, `Number` |          | Font-Style e.g. `normal`, `italic`                              | `400`    |
| `style`   | `String`           |          | Font-Weight e.g. `400`, `normal`                                | `normal` |
| `options` | `Object`           |          | Media & Selector Options [see more](/directives/v-font#options) |          |


### options

Each definition can be modified in its behaviour via the options.
With the property `media`, the call of the font definition can be made dependent on the viewport.  
The property `selector` can be used to limit the font to elements (e.g. `span`, `.class`).

| Key        | Type     | Requried | Description                                    | Default |
| ---------- | -------- | -------- | ---------------------------------------------- | ------- |
| `media`    | `String` |          | CSS Media Query e.g. `(min-width: 768px)`      |         |
| `selector` | `String` |          | CSS Selector e.g. `element, .elm, .elm:before` |         |


<alert type="danger">`link` Tag is not supported orientation media query. e.g. `(orientation: portrait)`.
This has an effect on prefetches and preloads.
</alert>

```js
{
  media: '(min-width: 768px)',
  selector: 'element, .elm, .elm:before'
}
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

## Workarounds

Workarounds are used to work around a bug in the Vue SSR, read more in [Usage](/directives/v-font#usage).
### Use component

**<span style="color: red;">Bad</span>**
```html
<template>
  <nuxt-link to="/" v-font="$getFont(…)">Back</nuxt-link>
</template>
```

**<span style="color: green;">Good</span>**
```html
<template>
  <nuxt-link to="/">
    <span v-font="$getFont(…)">Back</span>
  </nuxt-link>
</template>
```

### Use v-html/v-text
**<span style="color: red;">Bad</span>**
```html
<template>
  <div>
    <div v-font="$getFont(…)" v-html="…" />
  </div>
</template>
```

**<span style="color: green;">Good</span>**
```html
<template>
  <div v-font="$getFont(…)">
    <div v-html="…" />
  </div>
</template>
```

