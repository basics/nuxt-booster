---
title: useBoosterConfig
---

# {{$frontmatter.title}}

## Types

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
