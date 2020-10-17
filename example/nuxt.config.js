const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'
const pkg = require('../package')

module.exports = {
  dev: isDev,
  target: 'static',
  modern: isDev ? false : 'client',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  loading: false,
  // mode: 'spa',

  components: [
    // '~/components',
    // { path: '~/components/organisms/', prefix: 'organism' }
  ],

  server: {
    port: getPort(),
    host: getHost()
  },

  // features: {
  //   router: true, // not implemented
  //   store: false,
  //   layouts: true,
  //   meta: true,
  //   middleware: false,
  //   transitions: true,
  //   deprecations: false,
  //   validate: false,
  //   asyncData: true,
  //   fetch: true,
  //   clientOnline: false,
  //   clientPrefetch: false,
  //   clientUseUrl: false, // this is a bit of an odd one, but using URL should eg be ok for modern mode already
  //   componentAliases: false,
  //   componentClientOnly: false
  // },

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
        numberOfPrimitives: 20,
        blur: 0,
        mode: 1
      },
      lqip: {
        palette: true
      }
    }]
  ],

  plugins: [
    '@/plugins/lazyHydrate'
  ],

  modules: [
    ['nuxt-i18n', {}],
    [
      resolve(__dirname, '..'), {
        fonts: [{
          family: 'Quicksand',
          fallback: ['sans-serif'],
          variances: [
            {
              style: 'normal',
              weight: 300,
              src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff2'
            }, {
              style: 'normal',
              weight: 400,
              src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff2'
            }, {
              style: 'normal',
              weight: 500,
              src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff2'
            }, {
              style: 'normal',
              weight: 600,
              src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff2'
            }, {
              style: 'normal',
              weight: 700,
              src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff2'
            }
          ]
        }, {
          family: 'Comic Neue',
          fallback: ['Arial', 'sans-serif'],
          variances: [
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
          family: 'Montserrat Alternates',
          fallback: ['sans-serif'],
          variances: [
            {
              style: 'normal',
              weight: 300,
              src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300.woff2'
            }, {
              style: 'italic',
              weight: 300,
              src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300italic.woff2'
            }, {
              style: 'normal',
              weight: 400,
              src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-regular.woff2'
            }, {
              style: 'italic',
              weight: 400,
              src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-italic.woff2'
            }, {
              style: 'normal',
              weight: 700,
              src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700.woff2'
            }, {
              style: 'italic',
              weight: 700,
              src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700italic.woff2'
            }
          ]
        }]
      }
    ]
  ],

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
