---
title: useBoosterFont
---

# {{$frontmatter.title}}

## Types

```typescript

declare default function useBoosterFonts(options?: {
    critical?: boolean;
}): {
    isCritical: Ref<boolean, boolean>;
    $getFont: (family: FontFamily | DirectiveGetFontArguments, weight?: FontWeight, style?: FontStyle, options?: DirectiveGetFontOptions) => DirectiveGetFontResult;
};

```

## Options

| Property   | Description                       | Default Value          |
| ---------- | --------------------------------- | ---------------------- |
| `critical` | Override critical from component. | inherit from component |

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
