---
title: Setup
description: ''
position: 2
category: Guide
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Add `nuxt-speedkit` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add nuxt-speedkit
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install nuxt-speedkit
  ```

  </code-block>
</code-group>

Then, add `nuxt-speedkit` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
  modules: [
    'nuxt-speedkit'
  ],
  speedkit: {
    // Options
  }
}
```

See <nuxt-link to="/options">module options</nuxt-link>.
