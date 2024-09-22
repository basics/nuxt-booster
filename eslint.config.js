import { withNuxt } from './playground/.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintIgnores from './eslint.ignores.js';
import pluginSecurity from 'eslint-plugin-security';

export default withNuxt({
  files: ['**/*.js', '**/*.vue'],
  rules: {
    'prettier/prettier': 'error',
    classPrivateMethods: 'off',
    'block-spacing': 'error',
    'no-debugger': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/no-mutating-props': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    complexity: [
      'error',
      {
        max: 10
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off' // prettier conflict
  }
}).prepend(
  eslintIgnores,
  pluginSecurity.configs.recommended,
  eslintPluginPrettierRecommended
);
