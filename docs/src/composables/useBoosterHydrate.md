---
title: useBoosterHydrate
---

# {{$frontmatter.title}}

Compasable provides a function for wrapping components in order to control hydration.

[Learn more about component import](/guide/usage#import-components).

## Types

```typescript
import type { AsyncComponentLoader, Component, HydrationStrategy } from 'vue';

declare function useBoosterHydrate(): <T extends Component>(component: AsyncComponentLoader<T>, hydrate?: HydrationStrategy) => T;
```

## Arguments

| name              | Description                                                                                                               | Default               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `component`       | Component import function                                                                                                 |                 |
| `hydrateOverride` | Hydrate override function.<br>Learn more about [Lazy Hydration](https://vuejs.org/guide/components/async#lazy-hydration). | `hydrateOnVisible(…)` |

## Return

Returns import wrapper function.

## Example

```js
const hydrate = useBoosterHydrate();

const component = hydrate(
  () => import('@/components/MyComponent.vue'),
  hydrateOnVisibleSpezificRoute({ rootMargin: '100px' })
);
```

### Useful

With a custom hydrate function, you can control the hydration of components.

It is possible to create a custom hydrate function that will hydrate only on a specific route.

#### Example

```js

const $router = useRouter();

const hydrateOnVisibleSpezificRoute = options => (hydrate, forEach) => {
  if ($router.currentRoute.value === 'specific-route') {
    return hydrateOnVisible(options)(hydrate, forEach);
  } else {
    hydrate();
  }
};

```
