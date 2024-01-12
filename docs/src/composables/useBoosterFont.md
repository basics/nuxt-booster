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

| Property     | Description |
| ------------ | ----------- |
| `isCritical` |             |
| `$getFont`   |             |

## Example

```html
<template>
  <span v-font="$getFont(…)"></span>
</template>

<script setup>
  import { useBoosterFonts } from '#imports';
  const { $getFont } = useBoosterFonts();
</script>
```
