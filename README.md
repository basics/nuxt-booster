# nuxt-speedkit

[![Grabarz & Partner - Module][grabarz-partner-module-src]][grabarz-partner-href] 

[![main][github-workflow-main-src]][github-workflow-main-href]
[![dependencies status][dependencies-status-src]][dependencies-status-href]
[![dev-dependencies status][dependencies-dev-status-src]][dependencies-dev-status-href]

[![Sonarcloud Status][sonarcloud-src]][sonarcloud-href]

[![npm version][npm-version-latest-src]][npm-version-latest-href]
[![npm version][npm-version-beta-src]][npm-version-beta-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

[![Renovate - Status][renovate-status-src]][renovate-status-href]
[![License][license-src]][license-href]

# <span style="color: red;">⚠️⚠️⚠️ This Package is work in progress… ⚠️⚠️⚠️</span>

Nuxt Speedkit takes over the Lighthouse performance optimization of your generated website.
All used components and resources are loaded on demand based on the viewport.

Features:
- automatic preloading critical font resources
- dynamic viewport based loading of font resources (subselectors, media queries)
- dynamic loading of images based on bandwidth

Result:
- delivery of the minimum required resources based on the current viewport.


[**Release Notes** 📖](./CHANGELOG.md)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Vivaldi |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                            | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           | last 2 versions                                                                                                                                                                                                   |

## Usage

[**Documentation** 📚](https://nuxt-speedkit.grabarzundpartner.dev)

## TODOS tasks the release
- [ ] add critical images as preload
- [ ] merge fontTools into font classes
- [ ] check: convert html scripts into dynamic imports -> better & stable load performance
- [ ] rename package
- [ ] add package logo

## TODOS

- [ ] Complete readme
- [ ] Cross Browser (IE Edge, Firefox, Chrome, Edge, Safari)
- [ ] Live example website (eg. grabarzundpartner.de)
- [x] Example/Test pages
- [ ] Create jest test based on test pages
  - [x] v-font
  - [x] LazyImage
  - [x] LazyPicture
  - [ ] SpeedkitIframe
  - [ ] LazyVideo
- [ ] Clean Up!
  - [ ] Namings
  - [ ] code optimization 
- [ ] Publish module (npm, nuxt-modules)

### if we have time
- [ ] vFont-Collector as standalone vue plugin
- [ ] Documentation and preparation for video streaming with LazyVideo
- [ ] IE 11 (FontFace): https://github.com/bramstein/fontloader
- [ ] Cypress visual regression tests


## Development

1. Clone this repository
2. Install dependencies using `npm run install` or `npm install`
3. Start development server using `npm run dev`

## Preview

1. Clone this repository
2. Install dependencies using `npm run install` or `npm install`
3. Build and start with express `npm run start:generate`
4. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in Browser.

or look here

- [Preview](https://nuxt-speedkit.grabarzundpartner.dev/example)
- [Report Client](https://nuxt-speedkit.grabarzundpartner.dev/example/reports/webpack/client.html)
- [Report Modern](https://nuxt-speedkit.grabarzundpartner.dev/example/reports/webpack/modern.html)
- [Report Server](https://nuxt-speedkit.grabarzundpartner.dev/example/reports/webpack/server.html)

## License

[MIT License](./LICENSE)

<!-- Badges -->

[grabarz-partner-module-src]: <https://img.shields.io/badge/Grabarz%20&%20Partner-Module-d19700>
[grabarz-partner-href]: <https://grabarzundpartner.de>

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-main-src]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/workflows/Main/badge.svg?branch=main>
[github-workflow-main-href]: <https://github.com/GrabarzUndPartner/nuxt-speedkit/actions?query=workflow%3AMain>
[dependencies-status-src]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit/status.svg>
[dependencies-status-href]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit>
[dependencies-dev-status-src]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit/dev-status.svg>
[dependencies-dev-status-href]: <https://david-dm.org/GrabarzUndPartner/nuxt-speedkit?type=dev>

[sonarcloud-src]: <https://sonarcloud.io/api/project_badges/measure?project=GrabarzUndPartner_nuxt-speedkit&metric=alert_status>
[sonarcloud-href]: <https://sonarcloud.io/dashboard?id=GrabarzUndPartner_nuxt-speedkit>

[license-src]: https://img.shields.io/npm/l/nuxt-speedkit.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-speedkit

[npm-version-latest-src]: https://img.shields.io/npm/v/nuxt-speedkit/latest.svg?
[npm-version-beta-src]: https://img.shields.io/npm/v/nuxt-speedkit/beta.svg?style=flat-square
[npm-version-latest-href]: https://npmjs.com/package/nuxt-speedkit/v/latest
[npm-version-beta-href]: https://npmjs.com/package/nuxt-speedkit/v/beta

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-speedkit.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-speedkit

