export const registerAppEntry = filePath => {
  return configs => {
    return configs
      .filter(({ name }) => ['client'].includes(name))
      .forEach(config => {
        config.entry.app = config.entry.app.map(file => {
          if (file.endsWith('entry')) {
            return filePath;
          }
          return file;
        });
      });
  };
};
