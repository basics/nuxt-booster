import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintIgnores from './eslint.ignores.js';
import eslintGlobals from './playground/.nuxt/.eslint.globals.mjs';
import pluginSecurity from 'eslint-plugin-security';

export default createConfigForNuxt(
  {
    features: {
      typescript: false
    }
  },
  pluginSecurity.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  eslintGlobals,

  {
    files: ['**/*.js', '**/*.vue'],
    ignores: eslintIgnores,
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
      'vue/multi-word-component-names': 'off'
    }
  }
);
