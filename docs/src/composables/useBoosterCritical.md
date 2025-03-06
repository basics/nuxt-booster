---
title: useBoosterCritical
---

# {{$frontmatter.title}}

## Types

```ts
declare function useBoosterCritical(options?: {
    critical?: boolean;
}): {
    isCritical: ComputedRef<boolean>;
};
```

## Options

| Property   | Description                       | Default Value          |
| ---------- | --------------------------------- | ---------------------- |
| `critical` | Override critical from component. | inherit from component |

```js
const { isCritical } = useBoosterCritical({critical: true});
```

## Return

| Property     | Description                           |
| ------------ | ------------------------------------- |
| `isCritical` | Indicates whether critical is active. |

## Example

```vue
<template>
  <span>Critical? {{isCritical}}</span>
</template>

<script setup>
  const { isCritical } = useBoosterCritical();
</script>
```
