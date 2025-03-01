---
title: useBoosterComponentObserver
---

# {{$frontmatter.title}}

## Type

```typescript
declare function useBoosterComponentObserver(options?: ObservableOptions): {
    el: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    inView: Ref<boolean, boolean>;
};

declare interface ObservableOptions = {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
  trackVisibility?: boolean;
  delay?: number;
};
```

## Options

| Property          | Description                                                                                                         | Default Value |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ------------- |
| `root`            | [MDN `root`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root)                       | `undefined`   |
| `rootMargin`      | [MDN `rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootMargin)           | `'0px'`       |
| `threshold`       | [MDN `threshold`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold)             | `[0]`         |
| `trackVisibility` | [MDN `trackVisibility`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#trackVisibility) | `false`       |
| `delay`           | [MDN `delay`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#delay)                     | `0`           |

## Return

| Property | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `el`     | Component ref for tag referencing.                              |
| `inView` | Reference that indicates whether referenced element is visible. |

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
