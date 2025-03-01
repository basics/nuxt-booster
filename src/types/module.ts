import type { Nuxt, ViteConfig } from 'nuxt/schema';
import type { Manifest } from 'vue-bundle-renderer';
import type { FontOption } from './font';

export type ModulePublicRuntimeConfig = {
  debug: boolean;
  lazyOffsetComponent: string;
  lazyOffsetAsset: string;
  usedFontaine: boolean;
};

// export interface ModuleRuntimeConfig {}
export interface ModuleOptions {
  debug: boolean;

  crossorigin?: CrossOrigin;

  disableNuxtFontaine?: boolean; // If set, `@nuxtjs/fontaine` will not be integrated.
  disableNuxtImage?: boolean; // If set, `@nuxt/image` will not be integrated.

  optimizeSSR?: OptimizeSSR;

  detection?: Detection;

  performanceMetrics?: PerformanceMetrics;

  fonts?: FontOption[];

  targetFormats?: string[];
  densities?: string;

  /**
   * IntersectionObserver rootMargin for Compoennts and Assets
   */
  lazyOffset: LazyOffset;

  runOptions?: RunOptions;

  experimental?: Experimental;
}

export type PerformanceMetrics = {
  device?: {
    hardwareConcurrency: { min: number; max: number };
    deviceMemory: { min: number };
  };
  timing?: {
    fcp: number;
    dcl: number;
  };
};

export type OptimizeSSR =
  | {
      cleanPreloads?: boolean;
      cleanPrefetches?: boolean;
      inlineStyles?: boolean;
    }
  | boolean;

export type Experimental = {
  fallbackInit?:
    | {
        duration?: number;
      }
    | boolean;
};

export type Detection = {
  performance?: boolean;
  browserSupport?: boolean;
  battery?: boolean;
};

export type LazyOffset = {
  component?: string;
  asset?: string;
};

export type RunOptions = {
  maxTime?: number;
  threshold?: number;
};

export type HTMLCrossOriginAttribute = 'anonymous' | 'use-credentials' | '';
export type CrossOrigin = boolean | HTMLCrossOriginAttribute | undefined;

export type ViteBuildContext = {
  nuxt: Nuxt;
  config: ViteConfig;
};

export interface BoosterContext {
  getImageSize: (src: string) => Promise<{ width: number; height: number }>;
  densities: string;
  targetFormats: string[];
  crossorigin: CrossOrigin;
}

export type PluginOptions = {
  crossorigin?: CrossOrigin;
  supportedBrowserDetector: string;
  targetFormats?: string[];
  densities?: string;
  mode: string;
};

export type EntryOptions = {
  debug: boolean;
  entry: string;
  performanceCheck: boolean;
  isDev: boolean;
  ssr: boolean;
  supportedBrowserDetector: string;
  performanceMetrics: string;
  webpack: boolean;
  runOptions?: RunOptions;
  ignore: {
    battery: boolean;
    performance: boolean;
  };
  experimental?: Experimental;
};

export type HookOptions = {
  manifest?: Manifest;
  cleanPreloads: boolean;
  cleanPrefetches: boolean;
  inlineStyles: boolean;
};

export interface PictureSource {
  src?: string;
  media: string;
  sizes: Record<string, string | number>;
}

declare module 'nuxt/app' {
  interface NuxtApp {
    $booster: BoosterContext;
  }
}

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
    vGetFont: Directive;
  }
}
