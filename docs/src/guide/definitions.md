---
title: Definitions
---

# {{$frontmatter.title}}

All listed definitions are available in the `nuxt-booster` package.

**Example**

```ts
import type { FontOption } from 'nuxt-booster';
```

## Type

```ts
type HTMLCrossOriginAttribute = 'anonymous' | 'use-credentials' | '';
type CrossOrigin = boolean | HTMLCrossOriginAttribute | undefined;
```

## Interface

### FontOption

```ts
interface FontOption {
  family: string;
  fallback: string[];
  variances: FontOptionVariance[];
  locals?: string[];
}
```

### FontOptionVariance

```ts
interface FontOptionVariance {
  style: string;
  weight: string | number;
  sources: FontOptionVarianceSource[];
}
```

### FontOptionVarianceSource

```ts
interface FontOptionVarianceSource {
  src: string;
  type: string;
}
```

### PreparedFontOption

```ts
interface PreparedFontOption extends FontOption {
  variances: PreparedFontOptionVariance[];
}
```

### PreparedFontOptionVariance

```ts
interface PreparedFontOptionVariance extends FontOptionVariance {
  sources: PreparedFontOptionVarianceSource[];
  type: string;
  src: string;
  hash?: string;
}
```

### PreparedFontOptionVarianceSource

```ts
interface PreparedFontOptionVarianceSource extends FontOptionVarianceSource {
  className: string;
  style: string;
}
```

### ModulePublicRuntimeConfig

```ts
interface ModulePublicRuntimeConfig {
  debug: boolean;
  lazyOffsetComponent: string;
  lazyOffsetAsset: string;
  usedFontaine: boolean;
}
```

### ModuleOptions

```ts
interface ModuleOptions {
  debug: boolean;
  crossorigin?: CrossOrigin;
  disableNuxtFontaine?: boolean;
  disableNuxtImage?: boolean;
  optimizeSSR?: boolean | OptimizeSSR;
  detection?: Detection;
  performanceMetrics?: PerformanceMetrics;
  fonts?: FontOption[];
  targetFormats?: string[];
  densities?: string;
  /**
   * IntersectionObserver rootMargin for Components and Assets
   */
  lazyOffset: LazyOffset;
  runOptions?: RunOptions;
  experimental?: Experimental;
}
```

### PerformanceMetrics

```ts
interface PerformanceMetrics {
  device?: {
    hardwareConcurrency: {
      min: number;
      max: number;
    };
    deviceMemory: {
      min: number;
    };
  };
  timing?: {
    fcp: number;
    dcl: number;
  };
}
```

### OptimizeSSR

```ts
interface OptimizeSSR {
  cleanPreloads?: boolean;
  cleanPrefetches?: boolean;
  inlineStyles?: boolean;
}
```

### Experimental

```ts
interface Experimental {
  fallbackInit?:
    | {
        duration?: number;
      }
    | boolean;
}
```

### Detection

```ts
interface Detection {
  performance?: boolean;
  browserSupport?: boolean;
  battery?: boolean;
}
```

### LazyOffset

```ts
interface LazyOffset {
  component?: string;
  asset?: string;
}
```

### RunOptions

```ts
interface RunOptions {
  maxTime?: number;
  threshold?: number;
}
```

### BoosterContext

```ts
interface BoosterContext {
  getImageSize: (src: string) => Promise<{
    width: number;
    height: number;
  }>;
  densities: string;
  targetFormats: string[];
  crossorigin: CrossOrigin;
}
```

### PictureSource

```ts
interface PictureSource {
  src?: string;
  media: string;
  sizes: Record<string, string | number>;
}
```

### DirectiveGetFontArguments

```ts
interface DirectiveGetFontArguments {
  family: FontFamily;
  weight?: FontWeight;
  style?: FontStyle;
  options?: DirectiveGetFontOptions;
}
```

### DirectiveGetFontOptions

```ts
interface DirectiveGetFontOptions {
  selector?: string;
  media?: string;
}
```

### DirectiveGetFontResult

```ts
interface DirectiveGetFontResult {
  runtimeConfig: ModulePublicRuntimeConfig;
  isCritical: boolean;
  fontCollection: FontCollection;
  definition: Font;
}
```

### HeadFontCollector

```ts
interface HeadFontCollector {
  push: (description: HeadFontCollectorDescription) => HeadFontCollectorEntry;
  collection: Ref<FontsCollection>;
}
```

### HeadFontCollectorDescription

```ts
interface HeadFontCollectorDescription {
  options: ModulePublicRuntimeConfig;
  fontCollection: FontCollection;
  isCritical: boolean;
}
```

### HeadFontCollectorEntry

```ts
interface HeadFontCollectorEntry {
  dispose: () => void;
}
```

### ObservableOptions

```ts
interface ObservableOptions {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
  trackVisibility?: boolean;
  delay?: number;
}
```

### ObservableHTMLElement

```ts
interface ObservableHTMLElement extends HTMLElement {
  observables: Map<string, IntersectionObservable>;
}
```

## Declare

### NuxtApp

```ts
declare module 'nuxt/app' {
  interface NuxtApp {
    $booster: BoosterContext;
  }
}
```

### ComponentCustomProperties

```ts
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $booster: {
      targetFormats: string[];
    };
  }
  interface GlobalComponents {
    $booster: BoosterContext;
  }
  interface GlobalDirectives {
    vFont: Directive;
  }
}
```

### BoosterContext (Module)

```ts
declare module './module' {
  interface BoosterContext {
    head: HeadFontCollector;
  }
}
```
