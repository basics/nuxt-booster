module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/name-property-casing': [
      'error',
      'PascalCase'
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ]
  }
}
