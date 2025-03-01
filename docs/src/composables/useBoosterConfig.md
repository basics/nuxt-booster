---
title: useBoosterConfig
---

# {{$frontmatter.title}}

## Type

```typescript
declare function useBoosterConfig(): ModulePublicRuntimeConfig;
```

## Return

Returns booster public runtime options.

## Example

```typescript
const $boosterConfig: ModulePublicRuntimeConfig = useBoosterConfig();

console.log($boosterConfig.lazyOffsetComponent);
```
