import theme from '@nuxt/content-theme-docs';

export default theme({
  server: {
    port: getPort()
  },

  generate: {
    dir: getDistPath()
  },

  router: {
    base: getBasePath()
  }
});

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function getDistPath () {
  return process.env.npm_config_dist || process.env.DIST_PATH || 'dist';
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 3000;
}
