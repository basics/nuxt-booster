# lazy-resources

[![Grabarz & Partner - Module][grabarz-partner-module-src]][grabarz-partner-href] 

[![Master][github-workflow-master-src]][github-workflow-master-href]

[![Renovate - Status][renovate-status-src]][renovate-status-href]
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

## Preview

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Build and start with express `npm run start:generate`
4. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in Browser.

or look here

- [Preview](https://grabarzundpartner.github.io/lazy-resources/)
- [Report Client](https://grabarzundpartner.github.io/lazy-resources/reports/client.html)
- [Report Modern](https://grabarzundpartner.github.io/lazy-resources/reports/modern.html)
- [Report Server](https://grabarzundpartner.github.io/lazy-resources/reports/server.html)

## License

[MIT License](./LICENSE)

<!-- Badges -->

[grabarz-partner-module-src]: <https://img.shields.io/badge/Grabarz%20&%20Partner-Module-d19700>
[grabarz-partner-href]: <https://grabarzundpartner.de>

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-master-src]: <https://github.com/GrabarzUndPartner/lazy-resources/workflows/Master/badge.svg?branch=master>
[github-workflow-master-href]: <https://github.com/GrabarzUndPartner/lazy-resources/actions?query=workflow%3AMaster>

[license-src]: https://img.shields.io/npm/l/lazy-resources.svg?style=flat-square
[license-href]: https://npmjs.com/package/lazy-resources
