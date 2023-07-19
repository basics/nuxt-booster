export const registerAppEntry = filePath => {
  return context => {
    const config = context.config;
    if (!('ssr' in config)) {
      config.build.rollupOptions.input = filePath;
    }
    context.entry = filePath;
  };
};
