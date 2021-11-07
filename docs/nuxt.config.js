
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

  server: {
    port: getPort()
  },

  content: {
    liveEdit: false
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
