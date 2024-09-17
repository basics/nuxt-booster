---
title: useBoosterHydrate
title2: useBoosterHydrate(component, hydrateOverride)
---

# {{$frontmatter.title2}}

Compasable provides a function for wrapping components in order to control hydration.

[Learn more about component import](/guide/usage#import-components).

## Arguments

### `component`

- Type: `Function`
  - Default: `true`

Component import function.

### `hydrateOverride`

- Type: `Function`
  - Default: `hydrateOnVisible(…)`

Hydrate override function.

Learn more about [Lazy Hydration](https://vuejs.org/guide/components/async#lazy-hydration).

## Return

Returns import wrapper function.

## Example

```js
const hydrate = useBoosterHydrate();

const component = hydrate(
  () => import('~/components/MyComponent.vue'),
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
