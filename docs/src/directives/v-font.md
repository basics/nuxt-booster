---
title: v-font
---

# {{$frontmatter.title}}

The directive `v-font` is used to integrate the fonts defined in the [module options](/guide/options#fonts) into the website.

To do this, the respective font must be retrieved via the `$getFont` method contained in the component scope (e.g. `this`).

Fonts are specified by `family`, `weight` and `style` and can be limited to elements and viewports via the options (`media`, `selector`).

Normally the directive activates the fonts only when the viewport is reached.
It is recommended to use the property `critical` for components that are already initially contained in the viewport.

With critical component the fonts are preloaded and are initially active.  
More information on critical components can be found [here](/guide/usage#critical-prop-for-critical-components).

- For multiple fonts, a list (`Array`) can be passed.
- The `load:font` event can be used to react to the successful loading of the fonts.

````html

<!-- single definition -->
<element v-font="$getFont(…)">

<!-- multiple definitions -->
<element v-font="[
  $getFont(…),
  $getFont(…)
]">

<!-- event load -->
<element v-font="$getFont(…)" @load:font="…">
````

## `$getFont`

`$getFont` is included as a plugin and can be accessed via any component scope.  
Use `$getFont` in the `v-font` directive and create the relevant font definition.

## Types

```ts

declare function $getFont (family: FontFamily | DirectiveGetFontArguments, weight?: FontWeight, style?: FontStyle, options?: DirectiveGetFontOptions) => DirectiveGetFontResult;

declare interface DirectiveGetFontArguments {
  family: FontFamily;
  weight?: FontWeight;
  style?: FontStyle;
  options?: DirectiveGetFontOptions;
}

declare type FontFamily = <Your Configured Font Families>;
declare type FontWeight = <Your Configured Font Weights>;
declare type FontStyle = <Your Configured Font Styles>;

```

| Key       | Description                                                     | Default  |
| --------- | --------------------------------------------------------------- | -------- |
| `family`  | Font-Family e.g. `Custom Font`                                  |          |
| `weight`  | Font-Weight e.g. `400`, `normal`                                | `400`    |
| `style`   | Font-Style e.g. `normal`, `italic`                              | `normal` |
| `options` | Media & Selector Options [see more](/directives/v-font#options) |          |

### options

Each definition can be modified in its behaviour via the options.  
With the property `media`, the call of the font definition can be made dependent on the viewport.
The property `selector` can be used to limit the font to elements (e.g. `span`, `.class`).

```ts
declare interface DirectiveGetFontOptions {
  media?: string;
  selector?: string;
}
```

````js
{
  media: '(min-width: 768px)',
  selector: 'element, .elm, .elm:before'
}
````

| Key        | Description                                    | Default |
| ---------- | ---------------------------------------------- | ------- |
| `media`    | CSS Media Query e.g. `(min-width: 768px)`      |         |
| `selector` | CSS Selector e.g. `element, .elm, .elm:before` |         |

## Examples

### Basic Usage

````html
<element v-font="$getFont('Font Family', 700)">Text…</element>
````

### Advanced Usage

````js
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
````
