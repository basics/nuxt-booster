---
title: useBoosterFont
---

# {{$frontmatter.title}}

## Options

| Property   | Type      | Description                       | Default Value          |
| ---------- | --------- | --------------------------------- | ---------------------- |
| `critical` | `Boolean` | Override critical from component. | inherit from component |

```js
const { $getFont } = useBoosterFonts({critical: true});
```

## Return

| Property     | Description                                                                                |
| ------------ | ------------------------------------------------------------------------------------------ |
| `isCritical` | Indicates whether critical is active.                                                      |
| `$getFont`   | [Learn more about `$getFont`](/directives/v-font.html#getfont-family-weight-style-options) |

## Example

```html
<template>
  <span v-font="$getFont(…)"></span>
</template>

<script setup>
  const { $getFont } = useBoosterFonts();
</script>
```
