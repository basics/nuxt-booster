# lazy-resources

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> 

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `lazy-resources` dependency to your project

```bash
yarn add lazy-resources # or npm install lazy-resources
```

2. Add `lazy-resources` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'lazy-resources',

    // With options
    ['lazy-resources', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Thorn Walli <lammpee@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/lazy-resources/latest.svg
[npm-version-href]: https://npmjs.com/package/lazy-resources

[npm-downloads-src]: https://img.shields.io/npm/dt/lazy-resources.svg
[npm-downloads-href]: https://npmjs.com/package/lazy-resources

[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/lazy-resources.svg
[license-href]: https://npmjs.com/package/lazy-resources
