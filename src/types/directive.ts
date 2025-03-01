import type Font from '../runtime/classes/Font';
import type FontCollection from '../runtime/classes/FontCollection';
import type { ModulePublicRuntimeConfig } from './module';
export interface DirectiveGetFontOptions {
  selector?: string;
  media?: string;
}
export interface DirectiveGetFontResult {
  runtimeConfig: ModulePublicRuntimeConfig;
  isCritical: boolean;
  fontCollection: FontCollection;
  definition: Font;
}
