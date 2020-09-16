# Project Changelog

## [1.6.1](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.6.0...v1.6.1) (2020-09-16)


### Bug Fixes

* **fonts:** update font handling ([051201e](https://github.com/GrabarzUndPartner/lazy-resources/commit/051201e7a624fe4943f4b5ace3a95f4a5f5a7b22))

# [1.6.0](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.5.2...v1.6.0) (2020-08-14)


### Bug Fixes

* **caption:** added support ([0ec35f5](https://github.com/GrabarzUndPartner/lazy-resources/commit/0ec35f5fbdc4039433a2b7e534b76f203bf1a85e))
* **cleanup:** removed unused images ([3fd0c64](https://github.com/GrabarzUndPartner/lazy-resources/commit/3fd0c64ffce141d02d96e3ba45754c4b1e333676))
* **cleanup:** removed unused utils ([8e35d5e](https://github.com/GrabarzUndPartner/lazy-resources/commit/8e35d5e80aa7482f95122ab0dafdc74203503d35))
* **client:** deviceMemory fallback integrated, currently chrome dont support it ([ea7503f](https://github.com/GrabarzUndPartner/lazy-resources/commit/ea7503f6a73304ddc47b40d2692cc7962017a7f9))
* **font:** default font as '' ([8045c9e](https://github.com/GrabarzUndPartner/lazy-resources/commit/8045c9e712b893145c083c16eb49dda942b0810e))
* **image:** new src and srcset declaration ([f638e91](https://github.com/GrabarzUndPartner/lazy-resources/commit/f638e91a5d68368c169122b17764a931ea948690))
* **image:** refactored loading mechanism ([862705b](https://github.com/GrabarzUndPartner/lazy-resources/commit/862705bfaac3d910546f728135e09a5adc85d568))
* **image:** uncompleted size detection ([6f7aca2](https://github.com/GrabarzUndPartner/lazy-resources/commit/6f7aca28604d959bd12ed777f0a9b5ff51941cf4))
* **lazy-image:** added noscript style rules ([31504aa](https://github.com/GrabarzUndPartner/lazy-resources/commit/31504aa588173ecd9e818c05265610f3da6e4411))
* **lazy-image:** refactored lazy-image/-picture ([28deeb4](https://github.com/GrabarzUndPartner/lazy-resources/commit/28deeb4ea278140afe740aa9faa8ee6b03e4a96f))
* **lighthouse:** added indicator result ([ed8a033](https://github.com/GrabarzUndPartner/lazy-resources/commit/ed8a033ffdbad30c24eef0b46960a9c88b8b5a5b))
* **lighthouse:** cleanup ([ddbdc79](https://github.com/GrabarzUndPartner/lazy-resources/commit/ddbdc7925f82b982ef1705629c2495c6323cac16))
* **lighthouse:** cleanup async loader ([991e137](https://github.com/GrabarzUndPartner/lazy-resources/commit/991e13745c9bd07225453b173964972cf0580655))
* **lighthouse:** cleanup load validation ([a2846b5](https://github.com/GrabarzUndPartner/lazy-resources/commit/a2846b5647287545ba4c005ddfa1a174019580d6))
* **lighthouse:** fixed score by math.round ([00edc9d](https://github.com/GrabarzUndPartner/lazy-resources/commit/00edc9de17b213be526ea9f48244f220a00dab1c))
* **lock-file:** create incremental updates ([1fd64ca](https://github.com/GrabarzUndPartner/lazy-resources/commit/1fd64cac6452426217f794c4e703bb791c3a405d))
* **optimized-images:** option to resize and change format to webp ([9b69939](https://github.com/GrabarzUndPartner/lazy-resources/commit/9b69939daf1b6b13552ef6924ba23ad513b42b8a))
* **orientation:** optimized calculation ([b0c90b4](https://github.com/GrabarzUndPartner/lazy-resources/commit/b0c90b4db2c818b9a100b429402b43913fe9bcdc))
* **picture:** ssrOnly Support implemented ([b027b33](https://github.com/GrabarzUndPartner/lazy-resources/commit/b027b3362c936e33ce74392b770a954b69db77fa))
* **player:** renamed to StreamPlayer ([8ada197](https://github.com/GrabarzUndPartner/lazy-resources/commit/8ada197c21faf5dc9c40d3f8658cc4cc8adea704))
* **stream:** added renditions ([6b9be98](https://github.com/GrabarzUndPartner/lazy-resources/commit/6b9be98e588319c366bd8c15f507442f775c1ee5))
* **video:** correct restrictions ([b97db72](https://github.com/GrabarzUndPartner/lazy-resources/commit/b97db72546b4b2acd552158a14161963e1a225fd))
* **video:** implemented manifest change by orientation change ([5649e08](https://github.com/GrabarzUndPartner/lazy-resources/commit/5649e08763b9adc9502f753d835816466ca0e3bf))
* **video:** ios native orientation stream support ([5b80f91](https://github.com/GrabarzUndPartner/lazy-resources/commit/5b80f911cefc4a4eb5d6b0b638429c04ad706415))


### Features

* **lazy-video:** added responsive-video support ([4858317](https://github.com/GrabarzUndPartner/lazy-resources/commit/48583173d339564f586eeda984421185d96987ed))
* **lighthouse:** created async widget ([4c43743](https://github.com/GrabarzUndPartner/lazy-resources/commit/4c43743b22be10aeccc6367d0efa2af2167f42ef))
* **video:** implemented streaming ability ([cfe5261](https://github.com/GrabarzUndPartner/lazy-resources/commit/cfe526123aad3fa47a4d29f3296e53dc5f5ded9b))

## [1.5.2](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.5.1...v1.5.2) (2020-07-11)


### Bug Fixes

* **font:** replace style attribute with classes ([c7bd1a1](https://github.com/GrabarzUndPartner/lazy-resources/commit/c7bd1a17c37492b4b872c080488258496a29f35f))
* **selectors:** add sort for font variance selectors; update pages ([6a756ff](https://github.com/GrabarzUndPartner/lazy-resources/commit/6a756fff627e3fede9e8127968b748b4ed20ff0d))

## [1.5.1](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.5.0...v1.5.1) (2020-07-09)


### Bug Fixes

* **font:** optimize & fix client directive ([23f6106](https://github.com/GrabarzUndPartner/lazy-resources/commit/23f6106530be4973bf62a9410f93d6b28209d078))

# [1.5.0](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.4.4...v1.5.0) (2020-07-09)


### Bug Fixes

* **critical:** detect critical parent in childs ([abe4f96](https://github.com/GrabarzUndPartner/lazy-resources/commit/abe4f961ca202f608804af52480ea777ea9e9244))
* **font:** refactored code - simplified and reduced ([fba68b1](https://github.com/GrabarzUndPartner/lazy-resources/commit/fba68b11f479e728c7606233785544b9167d3199))
* **fonts:** reimplemented lazy load of fonts ([09c608c](https://github.com/GrabarzUndPartner/lazy-resources/commit/09c608c9e37f30c7bba6d63127a30c9bc075a144))
* **image:** critical detection ([cccdf09](https://github.com/GrabarzUndPartner/lazy-resources/commit/cccdf093a4cd1e3e29dd5b2f6d4cf33b87b2dd40))
* **srcset:** optimized critical loading ([c3973aa](https://github.com/GrabarzUndPartner/lazy-resources/commit/c3973aa7be84fb3734ba2de2723e84f174f940e8))
* **thorn:** ein schönes Ei hattest du mir da gelegt ;) ([00198a3](https://github.com/GrabarzUndPartner/lazy-resources/commit/00198a3db5296df1b7b0145a2a62bd3a5188cbf4))


### Features

* **font:** selector definition embedded in v-font directive ([f2f2a25](https://github.com/GrabarzUndPartner/lazy-resources/commit/f2f2a25c4fc820ec08d6f8adbbb845cf0e06a793))

## [1.4.4](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.4.3...v1.4.4) (2020-07-02)


### Bug Fixes

* **img:** test ([7374cda](https://github.com/GrabarzUndPartner/lazy-resources/commit/7374cda4b184344801b49fd10324406e3ff69e59))

## [1.4.3](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.4.2...v1.4.3) (2020-07-02)


### Bug Fixes

* **img:** test ([b3d7e62](https://github.com/GrabarzUndPartner/lazy-resources/commit/b3d7e62c9de4e7e9cbbeb1e8d4794b0e79dc030d))

## [1.4.2](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.4.1...v1.4.2) (2020-07-02)


### Bug Fixes

* **img:** additional srcset images ([4184639](https://github.com/GrabarzUndPartner/lazy-resources/commit/41846393b61eb8c6aa972adc9219910ed69ad6a0))

## [1.4.1](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.4.0...v1.4.1) (2020-07-02)


### Bug Fixes

* **fonts:** cleanup ([1a5598b](https://github.com/GrabarzUndPartner/lazy-resources/commit/1a5598ba46e4e418b30f226bb27924ab052e233a))
* **fonts:** filter used font-families & prevent double load of critical fonts ([8ce4aed](https://github.com/GrabarzUndPartner/lazy-resources/commit/8ce4aed1974af9c6627a388f99d0e8da1a5855af))
* **fonts:** removed monospace & correctly flag critical components ([d83042c](https://github.com/GrabarzUndPartner/lazy-resources/commit/d83042cfc4ba1a28058bb510e1f884e8f57a3fdc))
* **preview-container:** restructured css ([46de972](https://github.com/GrabarzUndPartner/lazy-resources/commit/46de972f39013e07b1d09a33ddc037b3e794b0bc))

# [1.4.0](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.3.1...v1.4.0) (2020-06-26)


### Bug Fixes

* **density:** different order ([3ed3e88](https://github.com/GrabarzUndPartner/lazy-resources/commit/3ed3e882aaeb636ef79574f395defec8c14e85e4))
* **font:** optimized preload of fonts ([e2f3d7a](https://github.com/GrabarzUndPartner/lazy-resources/commit/e2f3d7a4b04770956ce189fc5a53eaa1e82606fa))
* **font:** remove idleCallback to lazy load fonts ([5344daf](https://github.com/GrabarzUndPartner/lazy-resources/commit/5344dafba7a2db1e79f2d5aaf56c6a236ab67824))
* **image:** cleanup ([1bf3276](https://github.com/GrabarzUndPartner/lazy-resources/commit/1bf32761ed9571827b613fd54990020d2382c833))
* **image:** detect size of srcset ([2fa4246](https://github.com/GrabarzUndPartner/lazy-resources/commit/2fa4246731d9c19469db9539eb6800eb72b62668))
* **lazy:** full supported srcset ([7572268](https://github.com/GrabarzUndPartner/lazy-resources/commit/7572268520b500c17b46a06d1a8658f216b6ab1b))
* **lazy-image:** optimized above loading mechanik test ([f5ea445](https://github.com/GrabarzUndPartner/lazy-resources/commit/f5ea445a52d3b83cd8a239f9eed987dae14c3c1c))
* **nuxt:** removed express ([7a93ef7](https://github.com/GrabarzUndPartner/lazy-resources/commit/7a93ef713a48af2329d7fff542370527938214d1))
* **srcset:** cleanup ([92c3415](https://github.com/GrabarzUndPartner/lazy-resources/commit/92c3415d9dba87e3b1cac999ce2ba3a7698b47f2))
* **srcset:** prevented loop ([d2db9b5](https://github.com/GrabarzUndPartner/lazy-resources/commit/d2db9b5cdf682112b667af875883dbe3dbf324d1))
* **srcset:** sort srcsets ([091bd70](https://github.com/GrabarzUndPartner/lazy-resources/commit/091bd705004b83cc1ffde91ef6ba04db643bc10b))


### Features

* **nuxt:** migration of nuxt 2.13.1 ([232c012](https://github.com/GrabarzUndPartner/lazy-resources/commit/232c0122e0cca872188e9805a2fbf8e2987cb0e7))

## [1.3.1](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.3.0...v1.3.1) (2020-06-08)


### Bug Fixes

* **missing-vars:** add missing vars lazy-image ([508a09e](https://github.com/GrabarzUndPartner/lazy-resources/commit/508a09e48c54ff95f915da23bf68363c54e95e7c))

# [1.3.0](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.2.1...v1.3.0) (2020-06-08)


### Bug Fixes

* **cleanup:** clean up code ([92896d8](https://github.com/GrabarzUndPartner/lazy-resources/commit/92896d8fce3149dfd950d306cd8c2e3ce04f005c))
* **readme:** add dot ([7a18a9e](https://github.com/GrabarzUndPartner/lazy-resources/commit/7a18a9efab1b698c8e6529b8e696e340588b51ce))


### Features

* **cleanup-picture:** add lazy picture; clean up code ([1526d48](https://github.com/GrabarzUndPartner/lazy-resources/commit/1526d48f1b4ae016d332fda029f541b272a581e6))

## [1.2.2](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.2.1...v1.2.2) (2020-06-08)


### Bug Fixes

* **readme:** add dot ([7a18a9e](https://github.com/GrabarzUndPartner/lazy-resources/commit/7a18a9efab1b698c8e6529b8e696e340588b51ce))

## [1.2.1](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.2.0...v1.2.1) (2020-06-08)


### Bug Fixes

* **mailmap:** managing git user aliases ([0320ea3](https://github.com/GrabarzUndPartner/lazy-resources/commit/0320ea39906856e06aa67b2a203544881ab9b878))

# [1.2.0](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.1.0...v1.2.0) (2020-06-05)


### Bug Fixes

* **express:** compression + dist path declaration ([2e227f0](https://github.com/GrabarzUndPartner/lazy-resources/commit/2e227f0475e3f679abaae89fa051e9f0a2eb945c))
* **font:** moved intersection observer instance to inserted state ([c88ff19](https://github.com/GrabarzUndPartner/lazy-resources/commit/c88ff19403b9e080cd6189816a2bef3a1e760dd3))
* **intersection:** optimized unobserve & disconnect ([b8d38bb](https://github.com/GrabarzUndPartner/lazy-resources/commit/b8d38bbbd1f8053b08b8210eff2c5142105f82a5))
* **intersection-observer:** cleanup ([b5645ba](https://github.com/GrabarzUndPartner/lazy-resources/commit/b5645ba9ff1889333243b32600395ab177e49841))
* **intersection-observer:** configurable ([9cd95ed](https://github.com/GrabarzUndPartner/lazy-resources/commit/9cd95ed2a9aa8cc86c49a4106a18ab920e3bf14b))
* **intersection-observer:** moved line of options assignment ([9e73645](https://github.com/GrabarzUndPartner/lazy-resources/commit/9e73645e60ea560c2bf4beaa65dce1a801a18a73))
* **lazy-iframe:** add loading attribute ([2d7773a](https://github.com/GrabarzUndPartner/lazy-resources/commit/2d7773a80c935c45cafb8783e7eddd034beb9f03))
* **lazy-image:** added slot ([ed6a009](https://github.com/GrabarzUndPartner/lazy-resources/commit/ed6a009abdbc23a2201f0271e13c76737aef3a1a))
* **lazy-image:** critical -> noscript ([4245470](https://github.com/GrabarzUndPartner/lazy-resources/commit/42454703b0379f954a2dc617dbebf6d551882787))
* **lazy-image:** detect imagesize on client side (critical) ([6610a0e](https://github.com/GrabarzUndPartner/lazy-resources/commit/6610a0e78413ba0ebeed7640c5fa43df889e5ae6))
* **lazy-image:** loading state by critical state ([c46f968](https://github.com/GrabarzUndPartner/lazy-resources/commit/c46f9680cafbf0bd0d88d7a6c6a329db508fdbd8))
* **lazy-image:** moved loading detection to custom-image ([5f31392](https://github.com/GrabarzUndPartner/lazy-resources/commit/5f31392ed7bfd008b46aa8e9c3e839a8e20be72e))
* **lazy-image:** refactoring ([cab14e2](https://github.com/GrabarzUndPartner/lazy-resources/commit/cab14e2ed87478a7b6e15a8dfade9bea7428b061))
* **lazy-image:** render no-script correctly ([a81e947](https://github.com/GrabarzUndPartner/lazy-resources/commit/a81e947c375012b9181e086859e2ec345738278a))
* **lazy-image:** use custom-image instead of img in noscript ([d690657](https://github.com/GrabarzUndPartner/lazy-resources/commit/d690657fcc4be7191f3c88ff99d628f3929b89b5))


### Features

* **intersection-observer:** general intersection observer to lazy load ressources ([02b184d](https://github.com/GrabarzUndPartner/lazy-resources/commit/02b184dd279c19c065421c04b9268f1166550a24))

# [1.1.0](https://github.com/GrabarzUndPartner/lazy-resources/compare/v1.0.0...v1.1.0) (2020-06-04)


### Bug Fixes

* **intersection-observer:** implemented intersecting detection ([8b4e3b5](https://github.com/GrabarzUndPartner/lazy-resources/commit/8b4e3b58455f373212288f02b437b84af21fc4a6))


### Features

* **iframe:** added lazy iframe component ([97f36fb](https://github.com/GrabarzUndPartner/lazy-resources/commit/97f36fbc13e42fe39937a29f53964b9162b76896))
