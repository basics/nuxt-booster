![nuxt-speedkit][logo]

# Nuxt Speedkit

[![Grabarz & Partner - Module][grabarz-partner-module-src]][grabarz-partner-href] 

[![main][github-workflow-main-src]][github-workflow-main-href]
[![next][github-workflow-next-src]][github-workflow-next-href]
[![Sonarcloud Status][sonarcloud-src]][sonarcloud-href]

[![npm version][npm-version-latest-src]][npm-version-latest-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

[![Renovate - Status][renovate-status-src]][renovate-status-href]
[![License][license-src]][license-href]


- [✨ &nbsp;&nbsp;**Release Notes**](./CHANGELOG.md)
- [📖 &nbsp;&nbsp;**Documentation**](https://nuxt-speedkit.grabarzundpartner.dev/)
- [👁 &nbsp;&nbsp;**Preview**](https://grabarzundpartner.github.io/nuxt-speedkit-example/)


Nuxt Speedkit takes over the Lighthouse performance optimization of your generated website.
All used components and resources are loaded on demand based on the viewport.

## Requirements
- NodeJS >= 12.x.x
- NuxtJS >= 2.15.0

## Features

- dynamic loading of viewport based page resources like fonts (subselectors, media queries), components, pictures
- optional loading prevention of resources at low bandwidth or weak hardware
- prevents the loading of unnecessary resources (including components) that are outside the current viewport.
- optional info layer concept to inform users about a reduced UX when bandwidth or hardware is compromised.

## Results
- delivery of the minimum required resources based on the current viewport
- if you use the tools as specified you will get a lighthouse performance score of 100/100

📖 &nbsp;&nbsp;[Read more](https://nuxt-speedkit.grabarzundpartner.dev/)
## Browsers support

> You can use `nuxt-speedkit` with **Internet Explorer 11** browser. [Learn more at Browser compatibility](https://nuxt-speedkit.grabarzundpartner.dev/usage#browser-compatibility) 

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Vivaldi |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                            | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           | last 2 versions                                                                                                                                                                                                   |

## Development

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Start development server using `npm run dev` or `yarn dev`.

## Preview

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Build and start with express `npm run start:generate` or `yarn start:generate`.
4. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in Browser.

or look here

- [Preview](https://nuxt-speedkit.grabarzundpartner.dev/example)
- [Report Client](https://nuxt-speedkit.grabarzundpartner.dev/example/reports/webpack/client.html)
- [Report Modern](https://nuxt-speedkit.grabarzundpartner.dev/example/reports/webpack/modern.html)
- [Report Server](https://nuxt-speedkit.grabarzundpartner.dev/example/reports/webpack/server.html)

## License

[MIT License](./LICENSE)

<!-- Badges -->
[logo]: https://repository-images.githubusercontent.com/265295866/7e292000-5cc1-11eb-8469-1aafbf1d2727 "nuxt-speedkit"
[grabarz-partner-module-src]: <https://img.shields.io/badge/Grabarz%20&%20Partner-Module-d19700>
[grabarz-partner-href]: <https://grabarzundpartner.de>

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-main-src]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/workflows/Main/badge.svg?branch=main>
[github-workflow-main-href]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/actions?query=workflow%3AMain>
[github-workflow-next-src]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/workflows/Test/badge.svg?branch=next>
[github-workflow-next-href]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/actions?query=workflow%3ATest>
[dependencies-status-src]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit/status.svg>
[dependencies-status-href]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit>
[dependencies-dev-status-src]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit/dev-status.svg>
[dependencies-dev-status-href]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit?type=dev>

[sonarcloud-src]: <https://sonarcloud.io/api/project_badges/measure?project=GrabarzUndPartner_nuxt-speedkit&metric=alert_status>
[sonarcloud-href]: <https://sonarcloud.io/dashboard?id=GrabarzUndPartner_nuxt-speedkit>

[license-src]: https://img.shields.io/npm/l/nuxt-speedkit.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-speedkit

[npm-version-latest-src]: https://img.shields.io/npm/v/nuxt-speedkit/latest.svg?
[npm-version-latest-href]: https://npmjs.com/package/nuxt-speedkit/v/latest

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-speedkit.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-speedkit

