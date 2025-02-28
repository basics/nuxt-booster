import type { Nuxt, ViteConfig } from 'nuxt/schema';
import type { Manifest } from 'vue-bundle-renderer';

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

export type HTMLCrossOriginAttribute = 'anonymous' | 'use-credentials' | '';
export type CrossOrigin = boolean | HTMLCrossOriginAttribute | undefined;

export type ViteBuildContext = {
  nuxt: Nuxt;
  config: ViteConfig;
};

export type PublicBoosterOptions = {
  debug: boolean;
  lazyOffsetComponent: string;
  lazyOffsetAsset: string;
  usedFontaine: boolean;
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
  entry: string;
  performanceCheck: boolean;
  isDev: boolean;
  runOptions?: {
    performance?: number;
    battery?: number;
  };
  ssr: boolean;
  ignore: {
    battery: boolean;
    performance: boolean;
  };
  supportedBrowserDetector: string;
  performanceMetrics: string;
  webpack: boolean;
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

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    booster: PublicBoosterOptions;
  }
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
