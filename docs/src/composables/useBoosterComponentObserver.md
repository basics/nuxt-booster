---
title: useBoosterComponentObserver
---

# {{$frontmatter.title}}

## Options

| Property          | Type          | Description                                                                                                        | Default Value |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- |
| `root`            | `HTMLElement` | [MDN `root`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root) | `undefined`   |
| `rootMargin`      | `String`      | [MDN `rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootMargin) | `'0px'`       |
| `threshold`       | `Array`       | [MDN `threshold`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold) | `[0]`         |
| `trackVisibility` | `Boolean`     | [MDN `trackVisibility`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#trackVisibility) | `false`       |
| `delay`           | `Number`      | [MDN `delay`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#delay) | `0`           |

## Return

| Property | Type      | Description                                                     |
| -------- | --------- | --------------------------------------------------------------- |
| `el`     | `Object`  | Component ref for tag referencing.                              |
| `inView` | `Boolean` | Reference that indicates whether referenced element is visible. |

## Example

```html
<template>
  <div ref="target" :class="{visible: inView}">
    …
  </div>
</template>

<script setup>
const { el: target, inView } = useBoosterComponentObserver({
  trackVisibility: true,
  delay: 350
});
</script>
```
