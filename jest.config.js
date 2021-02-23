module.exports = {
  preset: '@nuxt/test-utils',
  collectCoverageFrom: [
    'lib/**/*.js',
    '!lib/plugin.js',
    '!lib/entry.js',
    '!lib/components/SpeedkitLayer.vue'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/lib/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/lib/$1'
  },
  transformIgnorePatterns: [`/node_modules/(?!${['@nuxt/image']})`],
  testPathIgnorePatterns: [
    // 'generate.test.js',
    // 'browser.test.js'
  ]
};
