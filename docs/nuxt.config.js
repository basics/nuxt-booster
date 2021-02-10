import { withDocus } from 'docus';

export default withDocus({
  docus: {
    colors: {
      primary: '#E83162'
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
