export const registerAppEntry = (filePath) => {
  return (configs) => {
    configs
    // TODO: gibt es `modern` noch?
      .filter(({ name }) => ['client', 'modern'].includes(name))
      .forEach((config) => {
        config.entry.app = config.entry.app.map((file) => {
          if (file.endsWith('entry')) {
            return filePath;
          }
          return file;
        });
        // config.optimization.runtimeChunk = {
        //   name: 'app'
        // };
      });
  };
};
