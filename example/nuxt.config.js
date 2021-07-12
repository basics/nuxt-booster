const { resolve } = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pkg = require('../package.json');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  dev: isDev,
  target: hasTargetStatic() ? 'static' : null,
  modern: isDev ? false : 'client',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,

  env: {
    GITHUB_REPO_URL: pkg.repository.url
  },

  components: ['~/components/auto-import/'],

  server: {
    port: getPort(),
    host: getHost()
  },

  alias: {
    [pkg.name]: resolve(__dirname, '../lib')
  },

  build: {
    babel: {
      presets ({ isServer, isModern }) {
        // TODO: Check performance issues (useBuiltIns, forceAllTransforms, shippedProposals, loose, bugfixes)
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3, proposals: true },
              useBuiltIns: isModern ? 'entry' : 'usage',
              forceAllTransforms: !isDev && !isModern && !isServer,
              shippedProposals: true,
              loose: true,
              bugfixes: true,
              polyfills: [
                'es.promise',
                'es.symbol'
              ]
            }
          ]
        ];
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
      if (hasBuildAnalyze()) {
        config.plugins.push(new BundleAnalyzerPlugin({
          reportFilename: resolve(`.reports/webpack/${config.name}.html`),
          statsFilename: resolve(`.reports/webpack/stats/${config.name}.json`),
          analyzerMode: 'static',
          generateStatsFile: true,
          openAnalyzer: false,
          logLevel: 'info',
          defaultSizes: 'gzip',
          statsOptions: 'normal'
        }));
      }
    }
  },

  generate: {
    crawler: true,
    dir: getDistPath()
  },

  router: {
    base: getBasePath(),
    trailingSlash: undefined
  },

  // nuxt/image options https://image.nuxtjs.org/setup#configure
  image: {},

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  speedkit: {
    detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      },
      lighthouseDetectionByUserAgent: false
    },
    fonts: [{
      family: 'Quicksand',
      locals: ['Quicksand'],
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 500,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 600,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff2', type: 'woff2' }
          ]
        }
      ]
    }, {
      family: 'Merriweather',
      locals: ['Merriweather'],
      fallback: ['Georgia', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300italic.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-italic.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700italic.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700italic.woff2', type: 'woff2' }
          ]
        }
      ]
    }, {
      family: 'Montserrat Alternates',
      locals: ['Montserrat Alternates', 'Montserrat-Alternates'],
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300italic.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-italic.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700italic.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700italic.woff2', type: 'woff2' }
          ]
        }
      ]
    }]
  },

  modules: [
    resolve(__dirname, '..') // nuxt-speedkit
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
};

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function getHost () {
  return process.env.npm_config_host || process.env.HOST || 'localhost';
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 3000;
}

function getDistPath () {
  return process.env.npm_config_dist || process.env.DIST_PATH || 'dist';
}

function hasBuildAnalyze () {
  return process.env.npm_config_build_analyze || process.env.BUILD_ANALYZE;
}

function hasTargetStatic () {
  return (process.argv.indexOf('--target') && process.argv[process.argv.indexOf('--target') + 1] === 'static') || process.env.npm_config_target_static || process.env.TARGET_STATIC;
}
