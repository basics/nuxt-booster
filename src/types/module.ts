import type { Nuxt, ViteConfig } from 'nuxt/schema';
import type { Manifest } from 'vue-bundle-renderer';
import type { FontOption } from './font';
import type { ImageModifiers } from '@nuxt/image';
import type { Directive } from 'vue';

export type HTMLCrossOriginAttribute = 'anonymous' | 'use-credentials' | '';
export type CrossOrigin = boolean | HTMLCrossOriginAttribute | undefined;

export interface ModulePublicRuntimeConfig {
  debug: boolean;
  lazyOffsetComponent: string;
  lazyOffsetAsset: string;
  usedFontaine: boolean;
}

// export interface ModuleRuntimeConfig {}
export interface ModuleOptions {
  debug: boolean;

  crossorigin?: CrossOrigin;

  disableNuxtFontaine?: boolean; // If set, `@nuxtjs/fontaine` will not be integrated.
  disableNuxtImage?: boolean; // If set, `@nuxt/image` will not be integrated.

  optimizeSSR?: boolean | OptimizeSSR;

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

export interface PerformanceMetrics {
  device?: {
    hardwareConcurrency: { min: number; max: number };
    deviceMemory: { min: number };
  };
  timing?: {
    fcp: number;
    dcl: number;
  };
}

export interface OptimizeSSR {
  cleanPreloads?: boolean;
  cleanPrefetches?: boolean;
  inlineStyles?: boolean;
}

export interface Experimental {
  fallbackInit?:
    | {
        duration?: number;
      }
    | boolean;
}

export interface Detection {
  performance?: boolean;
  browserSupport?: boolean;
  battery?: boolean;
}

export interface LazyOffset {
  component?: string;
  asset?: string;
}

export interface RunOptions {
  maxTime?: number;
  threshold?: number;
}

export interface ViteBuildContext {
  nuxt: Nuxt;
  config: ViteConfig;
}

export interface ViteBuildContextExtend extends ViteBuildContext {
  entry: string;
}

export interface BoosterProvide {
  // getFont: FontList['getFont'];
  getImageSize: (src: string) => Promise<{ width: number; height: number }>;
  densities: string;
  targetFormats: string[];
  crossorigin: CrossOrigin;
}

export interface PluginOptions {
  crossorigin?: CrossOrigin;
  supportedBrowserDetector: string;
  targetFormats?: string[];
  densities?: string;
  mode: string;
}

export interface EntryOptions {
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
}

export interface HookOptions {
  manifest?: Manifest;
  cleanPreloads: boolean;
  cleanPrefetches: boolean;
  inlineStyles: boolean;
}

export interface ISource {
  src: string;
  media?: string;
  sizes?: Record<string, string | number>;
  width?: number;
  height?: number;
  format?: string;
  quality?: number;
  preload?: boolean;
  modifiers?: Partial<ImageModifiers>; // https://image.nuxt.com/usage/nuxt-img#modifiers
  provider?: string; // https://image.nuxt.com/usage/nuxt-img#provider
  preset?: string; // https://image.nuxt.com/usage/nuxt-img#preset
  densities?: string; // https://image.nuxt.com/usage/nuxt-img#densities
}

declare module 'nuxt/app' {
  interface NuxtApp {
    $booster: BoosterProvide;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $booster: {
      targetFormats: string[];
    };
  }
  interface GlobalComponents {
    $booster: BoosterProvide;
  }

  interface GlobalDirectives {
    vFont: Directive;
  }
}
