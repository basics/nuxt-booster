import theme from '@nuxt/content-theme-docs'

export default theme({
  generate: {
    dir: getDistPath()
  },

  router: {
    base: getBasePath()
  }
})

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/'
}

function getDistPath () {
  return process.env.npm_config_dist || process.env.DIST_PATH || 'dist'
}
