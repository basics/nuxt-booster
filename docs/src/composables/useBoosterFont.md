---
title: useBoosterFont
---

# {{$frontmatter.title}}

## Type

```typescript
declare function useBoosterFonts(options?: {
    critical?: boolean;
}): {
    isCritical: Ref<boolean, boolean>;
    $getFont: (family: string, weight?: string | number, style?: string, options?: DirectiveGetFontOptions) => DirectiveGetFontResult;
};

declare interface DirectiveGetFontOptions {
  selector?: string;
  media?: string;
}

declare interface DirectiveGetFontResult {
  runtimeConfig: ModulePublicRuntimeConfig;
  isCritical: boolean;
  fontCollection: FontCollection;
  definition: Font;
}

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
