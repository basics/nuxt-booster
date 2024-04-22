---
title: useBoosterCritical
---

# {{$frontmatter.title}}

## Options

| Property   | Type      | Description                       | Default Value          |
| ---------- | --------- | --------------------------------- | ---------------------- |
| `critical` | `Boolean` | Override critical from component. | inherit from component |

```js
const { isCritical } = useBoosterCritical({critical: true});
```

## Return

| Property     | Description |
| ------------ | ----------- |
| `isCritical` |             |

## Example

```html
<template>
  <span>Critical? {{isCritical}}</span>
</template>

<script setup>
  const { isCritical } = useBoosterCritical();
</script>
```
