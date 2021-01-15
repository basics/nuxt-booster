module.exports = {
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
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
  transformIgnorePatterns: ['/node_modules/(?!(nuxt-i18n)/)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  testPathIgnorePatterns: [
    'fixture'
    // 'generate.test.js',
    // 'module.test.js'
    // 'browser.test.js'
  ]
};
