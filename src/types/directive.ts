import type Font from '../runtime/classes/Font';
import type FontCollection from '../runtime/classes/FontCollection';
import type { PublicBoosterOptions } from './module';

export interface IGetFontOptions {
  selector?: string;
  media?: string;
}
export interface IGetFontResult {
  runtimeConfig: PublicBoosterOptions;
  isCritical: boolean;
  fontCollection: FontCollection;
  definition: Font;
}
