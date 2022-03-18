
import theme from '@nuxt/content-theme-docs';
import nuxtSpeedkitPkg from '../package.json';

export default theme({
  docs: {
    primaryColor: '#E83162',
    code: '#E83162'
  },
  pwa: {
    manifest: {
      name: nuxtSpeedkitPkg.name,
      description: nuxtSpeedkitPkg.description,
      short_name: nuxtSpeedkitPkg.name
    },
    meta: {
      name: nuxtSpeedkitPkg.name,
      description: nuxtSpeedkitPkg.description,
      theme_color: '#E83162'
    }
  },

  router: {
    base: getBasePath(),
    extendRoutes (routes, resolve) {
      routes.find(route => route.name === 'releases').component = resolve(__dirname, 'pages/releases.vue');
      routes.find(route => route.name === 'all').component = resolve(__dirname, 'pages/_.vue');
      routes.find(route => route.name === 'index').component = resolve(__dirname, 'pages/_.vue');
    }
  },

  server: {
    port: getPort()
  },

  content: {
    liveEdit: false,
    dir: getContentDir()
  },

  generate: {
    dir: getDistPath()
  }

});

function getDistPath () {
  return process.env.npm_config_dist || process.env.DIST_PATH || 'dist';
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 3000;
}

function getContentDir () {
  return process.env.npm_config_content_dir || process.env.CONTENT_DIR || 'content/v2';
}

function getBasePath () {
  return process.env.npm_config_base_path || process.env.BASE_PATH || '/';
}
