const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isDev = process.env.NODE_ENV === 'development'

const pkg = require('../package')

module.exports = {
  dev: isDev,

  modern: isDev ? false : 'client',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,

  // mode: 'spa',

  build: {

    postcss: {
      plugins: {
        'postcss-nesting': {},
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        }
      }
    },

    extend (config) {
      config.resolve.alias[pkg.name] = resolve(__dirname, '../lib')

      if (!isDev) {
        config.plugins.push(new BundleAnalyzerPlugin({
          reportFilename: resolve(`reports/webpack/${config.name}.html`),
          statsFilename: resolve(`reports/webpack/stats/${config.name}.json`),
          analyzerMode: 'static',
          generateStatsFile: true,
          openAnalyzer: false,
          logLevel: 'info',
          defaultSizes: 'gzip',
          statsOptions: 'normal'
        }))
      }
    }
  },

  generate: {
    dir: getDistPath()
  },

  router: {
    base: getBasePath()
  },

  modules: [
    [
      resolve(__dirname, '..'), {
        fonts: [{
          family: 'Comic Neue',
          fallback: ['Arial', 'sans-serif'],
          variance: [
            {
              style: 'normal',
              weight: 300,
              src: '@/assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-300.woff2'
            }, {
              style: 'italic',
              weight: 300,
              src: '@/assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-300italic.woff2'
            }, {
              style: 'normal',
              weight: 400,
              src: '@/assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-regular.woff2'
            }, {
              style: 'italic',
              weight: 400,
              src: '@/assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-italic.woff2'
            }, {
              style: 'normal',
              weight: 700,
              src: '@/assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-700.woff2'
            }, {
              style: 'italic',
              weight: 700,
              src: '@/assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-700italic.woff2'
            }
          ]
        }]
      }
    ]
  ]
}

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/'
}

function getDistPath () {
  return process.env.npm_config_dist || process.env.DIST_PATH || 'dist'
}
