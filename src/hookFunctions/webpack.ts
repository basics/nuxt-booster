import type { Configuration } from 'webpack';

export const registerAppEntry = (filePath: string) => {
  return (configs: Configuration[]) => {
    return configs
      .filter(({ name }) => name && ['client'].includes(name))
      .forEach(config => {
        const entry = config.entry as Record<string, string[]>;
        if (entry?.app) {
          entry.app = entry.app.map(file => {
            if (file.endsWith('entry')) {
              return filePath;
            }
            return file;
          });
        }
      });
  };
};
