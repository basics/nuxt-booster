const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'
const cheerio = require('cheerio')
const pkg = require('../package')

module.exports = {
  dev: isDev,
  target: 'static',
  modern: isDev ? false : 'client',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,

  // mode: 'spa',

  components: [
    // '~/components',
    // { path: '~/components/organisms/', prefix: 'organism' }
  ],

  server: {
    port: getPort(),
    host: getHost()
  },

  build: {

    babel: {
      presets ({ isServer, isModern, isDev }) {
        // TODO: Check performance issues (useBuiltIns, forceAllTransforms, shippedProposals, loose, bugfixes)
        return [
          [
            require.resolve('@nuxt/babel-preset-app-edge'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
              useBuiltIns: isModern ? 'entry' : 'usage',
              forceAllTransforms: !isDev && !isModern && !isServer,
              shippedProposals: true,
              loose: true,
              bugfixes: true
            }
          ]
        ]
      }
    },

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

      if (!isDev && !isTest) {
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

  hooks: {
    generate: {
      page: (page) => {
        const $ = cheerio.load(page.html)
        $('body script, head link').each((i, el) => {
          if (/\/[\d]*\.[\w]*(\.modern)?\.js/gm.test(el.attribs.src || el.attribs.href)) {
            return $(el).remove()
          }
        })
        page.html = $.html()
      }
    }
  },

  generate: {
    dir: getDistPath()
  },

  router: {
    base: getBasePath()
  },

  buildModules: [
    ['@aceforth/nuxt-optimized-images', {
      optimizeImages: true,
      optimizeImagesInDev: true,
      sqip: {
        numberOfPrimitives: 100,
        blur: 0,
        mode: 1
      }
    }]
  ],

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
        }, {
          family: 'Lobster Two',
          fallback: ['Arial', 'sans-serif'],
          variance: [
            {
              style: 'normal',
              weight: 400,
              src: '@/assets/fonts/lobster-two-v12-latin/lobster-two-v12-latin-regular.woff2'
            },
            {
              style: 'italic',
              weight: 400,
              src: '@/assets/fonts/lobster-two-v12-latin/lobster-two-v12-latin-italic.woff2'
            },
            {
              style: 'normal',
              weight: 700,
              src: '@/assets/fonts/lobster-two-v12-latin/lobster-two-v12-latin-700.woff2'
            },
            {
              style: 'italic',
              weight: 700,
              src: '@/assets/fonts/lobster-two-v12-latin/lobster-two-v12-latin-700italic.woff2'
            }
          ]
        }]
      }
    ]
  ],

  head: {
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ]
  }
}

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/'
}

function getHost () {
  return process.env.npm_config_host || process.env.HOST || 'localhost'
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 3000
}

function getDistPath () {
  return process.env.npm_config_dist || process.env.DIST_PATH || 'dist'
}
