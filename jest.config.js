module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
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
    '^.+\\.js$': 'babel-jest'
  },
  testPathIgnorePatterns: [
    'fixture'
    // 'generate.test.js',
    // 'module.test.js',
    // 'browser.test.js'
  ]
}
