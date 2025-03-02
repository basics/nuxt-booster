import type { ViteBuildContext, ViteBuildContextExtend } from '../types';

export function registerAppEntry(filePath: string) {
  return (context: ViteBuildContext) => {
    const config = context.config;
    if (!('ssr' in config) && config.build?.rollupOptions) {
      config.build.rollupOptions.input = filePath;
    }
    (context as ViteBuildContextExtend).entry = filePath;
  };
}
