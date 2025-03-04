---
title: useBoosterProvide
---

# {{$frontmatter.title}}

Provides an alternative for Provide call via `nuxtApp`.

**Example:**

```html
<script setup>

  // Variant with useNuxtApp:
  const nuxt = useNuxtApp();
  console.log('sizes', await nuxtApp.$booster.getImageSize(...));

  // Variant with useBoosterProvide:
  const $booster = useBoosterProvide();
  console.log('sizes', await $booster.getImageSize(...));
</script>
```

## Types

```ts
declare function useBoosterProvide(): BoosterProvide;
```

## Return

Returns booster provide instance.

## Example

```ts
const $boosterConfig: BoosterProvide = useBoosterProvide();

console.log($boosterConfig.getImageSize('/image.jpg'));
```
