<p align="right">
  share me:
  <a href="https://twitter.com/intent/tweet?url=https://github.com/basics/nuxt-booster&text=nuxt-booster will help you to improve the lighthouse performance score of your website&via=basics&hashtags=vue,nuxt,booster">
    <img width="24" height="24" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/x.svg?sanitize=true"/>
  </a>
  <a href="https://news.ycombinator.com/submitlink?u=https://github.com/basics/nuxt-booster&t=nuxt-booster will help you to improve the lighthouse performance score">
    <img width="24" height="24" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/hackernews.svg?sanitize=true"/>
  </a>
  <a href="https://reddit.com/submit?url=https://github.com/basics/nuxt-booster&title=nuxt-booster will help you to improve the lighthouse performance score of your website">
    <img width="24" height="24" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/reddit.svg?sanitize=true"/>
  </a>
  <a href="https://www.facebook.com/sharer.php?u=https://github.com/basics/nuxt-booster">
    <img width="24" height="24" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/facebook.svg?sanitize=true"/>
  </a>
  <a href="https://www.xing.com/spi/shares/new?url=https://github.com/basics/nuxt-booster">
    <img width="24" height="24" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/xing.svg?sanitize=true"/>
  </a>
  <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/basics/nuxt-booster&title=nuxt-booster&summary=nuxt-booster will help you to improve the lighthouse performance score of your website">
    <img width="24" height="24" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg?sanitize=true"/>
  </a>
</p>

![nuxt-booster][logo]

# Nuxt Booster

[![main][github-workflow-main-src]][github-workflow-main-href]
[![next][github-workflow-next-src]][github-workflow-next-href]
[![Sonarcloud Status][sonarcloud-src]][sonarcloud-href]

[![npm version][npm-version-latest-src]][npm-version-latest-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

[![Renovate - Status][renovate-status-src]][renovate-status-href]
[![License][license-src]][license-href]

- [✨ &nbsp;&nbsp;**Release Notes**](./CHANGELOG.md)
- [👁 &nbsp;&nbsp;**Preview**](https://basics.github.io/nuxt-booster-example/)

Nuxt Booster takes over the Lighthouse performance optimization of your generated website.
All used components and resources are loaded on demand based on the viewport.

## Getting Started

Please follow the [📖 &nbsp;&nbsp;**Documentation**](https://basics.github.io/nuxt-booster/)

- **v2**: [basics.github.io/nuxt-booster/v2/](https://basics.github.io/nuxt-booster/v2/)

## Requirements

- NodeJS `>= 19`
- NuxtJS `>= 3.5.0`

## Features

- dynamic loading of viewport based page resources like fonts, components, pictures, images and iframes
- optional blocking of javascript execution by initial performance measuring
- optimized initial load of javascript files by eliminating of unnecessary javascript files
- prevents the loading of unnecessary resources (including components) that are outside the current viewport.
- optional info layer concept to inform users about a reduced UX when bandwidth or hardware is compromised.  
- completely new approach of font declaration
- optimized picture component (supports viewport based sources e.g. landscape/portrait)
- optimized image component
- supports SEO-friendly lazy hydration mode (picture + image)
- optimized youtube/vimeo component (auto generated poster image in different resolutions)  

## Results

- delivery of the minimum required resources based on the current viewport
- if you use the tools as specified you will get a lighthouse performance score of 100/100

📖 &nbsp;&nbsp;[Read more](https://basics.github.io/nuxt-booster/)

## Browsers support

> You can use `nuxt-booster` with **Internet Explorer 11** browser. [Learn more at Browser compatibility](https://basics.github.io/nuxt-booster/caveats#browser-compatibility)

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

- [Preview](https://basics.github.io/nuxt-booster/playground)

## Consulting & Support

Do you need further support, a consultation or a code review for an appropriate fee? Just contact us via eMail: <stephan.gerbeth@gmail.com>, <lammpee@gmail.com>. We are looking forward to your request.

## License

[MIT License](./LICENSE)

<!-- Badges -->

[logo]: https://repository-images.githubusercontent.com/265295866/5cf41209-5402-4479-a5f6-29c6b1c0d7ce "nuxt-booster"

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-main-src]: <https://github.com/basics/nuxt-booster/workflows/Main/badge.svg?branch=main>
[github-workflow-main-href]: <https://github.com/basics/nuxt-booster/actions?query=workflow%3AMain>
[github-workflow-next-src]: <https://github.com/basics/nuxt-booster/workflows/Next/badge.svg?branch=next>
[github-workflow-next-href]: <https://github.com/basics/nuxt-booster/actions?query=workflow%3ANext>

[sonarcloud-src]: <https://sonarcloud.io/api/project_badges/measure?project=basics_nuxt-booster&metric=alert_status>
[sonarcloud-href]: <https://sonarcloud.io/dashboard?id=basics_nuxt-booster>

[license-src]: https://img.shields.io/npm/l/nuxt-booster.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-booster

[npm-version-latest-src]: https://img.shields.io/npm/v/nuxt-booster/latest.svg?
[npm-version-latest-href]: https://npmjs.com/package/nuxt-booster/v/latest

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-booster.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-booster
