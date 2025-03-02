---
title: useBoosterConfig
---

# {{$frontmatter.title}}

## Types

```ts
declare function useBoosterConfig(): ModulePublicRuntimeConfig;
```

## Return

Returns booster public runtime options.

## Example

```ts
const $boosterConfig: ModulePublicRuntimeConfig = useBoosterConfig();

console.log($boosterConfig.lazyOffsetComponent);
```
