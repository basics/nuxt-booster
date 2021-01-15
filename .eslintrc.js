module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
    'plugin:security/recommended'
  ],
  plugins: [
    'jest',
    'unicorn',
    'vue',
    'no-secrets',
    'scanjs-rules',
    'xss'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs'
        ]
      }
    }
  },
  rules: {
    /**********************/
    /* General Code Rules */
    /**********************/
    // Enforce import order
    'import/order': 'error',
    // Imports should come first
    'import/first': 'error',
    // Other import rules
    'import/no-mutable-exports': 'error',
    // Allow unresolved imports
    'import/no-unresolved': 'off',
    // Allow paren-less arrow functions only when there's no braces
    'arrow-parens': ['error', 'as-needed',
      { requireForBlockBody: true }
    ],
    // Allow async-await
    'generator-star-spacing': 'off',
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // Prefer const over let
    'prefer-const': ['error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    // No single if in an 'else' block
    'no-lonely-if': 'error',
    // Force curly braces for control flow,
    // including if blocks with a single statement
    curly: ['error', 'all'
    ],
    // No async function without await
    'require-await': 'error',
    // Force dot notation when possible
    'dot-notation': 'error',

    'no-var': 'error',
    // Force object shorthand where possible
    'object-shorthand': 'error',
    // No useless destructuring/importing/exporting renames
    'no-useless-rename': 'error',
    /**********************/
    /*   Unicorn Rules    */
    /**********************/
    // Pass error message when throwing errors
    'unicorn/error-message': 'error',
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',
    // Array.isArray instead of instanceof
    'unicorn/no-array-instanceof': 'error',
    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',
    // Keep regex literals safe!
    'unicorn/no-unsafe-regex': 'off',
    // Lowercase number formatting for octal, hex, binary (0x12 instead of 0X12)
    'unicorn/number-literal-case': 'error',
    // ** instead of Math.pow()
    'unicorn/prefer-exponentiation-operator': 'error',
    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-starts-ends-with': 'error',
    // textContent instead of innerText
    'unicorn/prefer-text-content': 'error',
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',
    // Use new when throwing error
    'unicorn/throw-new-error': 'error',
    /**********************/
    /*     Vue Rules      */
    /**********************/
    // Disable template errors regarding invalid end tags
    'vue/no-parsing-error': ['error',
      {
        'x-invalid-end-tag': false
      }
    ],
    // Maximum 5 attributes per line instead of one
    'vue/max-attributes-per-line': ['error',
      {
        singleline: 5
      }
    ],
    'no-secrets/no-secrets': [
      'error'
    ],
    'scanjs-rules/accidental_assignment': 1,
    'scanjs-rules/assign_to_hostname': 1,
    'scanjs-rules/assign_to_href': 1,
    'scanjs-rules/assign_to_location': 1,
    'scanjs-rules/assign_to_onmessage': 1,
    'scanjs-rules/assign_to_pathname': 1,
    'scanjs-rules/assign_to_protocol': 1,
    'scanjs-rules/assign_to_search': 1,
    'scanjs-rules/call_Function': 1,
    'scanjs-rules/call_addEventListener': 1,
    // eslint-disable-next-line no-secrets/no-secrets
    'scanjs-rules/call_addEventListener_deviceproximity': 1,
    'scanjs-rules/call_addEventListener_message': 1,
    'scanjs-rules/call_connect': 1,
    'scanjs-rules/call_eval': 1,
    'scanjs-rules/call_execScript': 1,
    'scanjs-rules/call_hide': 1,
    'scanjs-rules/call_open_remote=true': 1,
    'scanjs-rules/call_parseFromString': 1,
    'scanjs-rules/call_setImmediate': 1,
    'scanjs-rules/call_setInterval': 1,
    'scanjs-rules/call_setTimeout': 1,
    'scanjs-rules/identifier_indexedDB': 1,
    'scanjs-rules/identifier_localStorage': 1,
    'scanjs-rules/identifier_sessionStorage': 1,
    'scanjs-rules/new_Function': 1,
    'scanjs-rules/property_addIdleObserver': 1,
    'scanjs-rules/property_createContextualFragment': 1,
    'scanjs-rules/property_crypto': 1,
    'scanjs-rules/property_geolocation': 1,
    'scanjs-rules/property_getUserMedia': 1,
    'scanjs-rules/property_indexedDB': 1,
    'scanjs-rules/property_localStorage': 1,
    'scanjs-rules/property_mgmt': 1,
    'scanjs-rules/property_sessionStorage': 1,
    'xss/no-location-href-assign': 2,
    'xss/no-mixed-html': 0,
    semi: [
      2,
      'always'
    ],
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
};
