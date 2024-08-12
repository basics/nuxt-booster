---
title: useBoosterHydrate
---

# {{$frontmatter.title}}

Compasable provides a function for wrapping components in order to control hydration.

[Learn more about component import](/guide/usage#import-components).

## Return

Returns import wrapper function.

## Example

```js
const hydrate = useBoosterHydrate();

const component = hydrate(() => import('~/components/MyComponent.vue'));
```
