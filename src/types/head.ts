import type { Ref } from 'vue';
import type { ModulePublicRuntimeConfig } from './module';
import type { FontsCollection } from '../runtime/classes/FontsCollection';
import type FontCollection from '../runtime/classes/FontCollection';

export interface HeadFontCollector {
  push: (description: HeadFontCollectorDescription) => HeadFontCollectorEntry;
  collection: Ref<FontsCollection>;
}

declare module './module' {
  // interface RuntimeConfig {}
  interface BoosterProvide {
    head: HeadFontCollector;
  }
}

export interface HeadFontCollectorDescription {
  options: ModulePublicRuntimeConfig;
  fontCollection: FontCollection;
  isCritical: boolean;
}

export interface HeadFontCollectorEntry {
  dispose: () => void;
}
