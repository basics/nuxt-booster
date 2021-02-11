module.exports = {
  preset: '@nuxt/test-utils',
  reporters: ['default', ['jest-sonar', {
    outputName: 'jest-report.xml'
  }]],
  moduleFileExtensions: ['js', 'json', 'vue'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/'
  ],
  collectCoverageFrom: [
    'lib/**/*.vue',
    'lib/**/*.js',
    '!lib/plugin.js',
    '!lib/entry.js'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/lib/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/lib/$1'
  },
  transformIgnorePatterns: ['/node_modules/(?!(@nuxt/image|nuxt-i18n)/)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  testPathIgnorePatterns: [
    // 'generate.test.js',
    // 'browser.test.js'
  ]
};
