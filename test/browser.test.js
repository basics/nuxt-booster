const { join, resolve } = require('path')
const puppeteer = require('puppeteer')
const { setup, loadConfig, generatePort } = require('@nuxtjs/module-test-utils')

describe('browser (puppeteer)', () => {
  let nuxt,
    browser, page
  const fixtureDir = resolve(__dirname, 'fixture', 'browser')
  const buildDir = join(fixtureDir, '.nuxt')

  beforeAll(async () => {
    const overrides = {
      modern: false,
      buildDir,
      dir: {
        pages: 'pages/tests'
      }
    };

    ({ nuxt } = (await setup(loadConfig(__dirname, '../../example', overrides, { merge: true }))))

    browser = await puppeteer.launch()
    page = await browser.newPage()
    await page.setViewport({
      width: 1200,
      height: 800
    })
  }, 120000)

  afterAll(async () => {
    await browser.close()
    await nuxt.close()
  })

  async function getUrl (path) {
    return `http://localhost:${await generatePort()}${path}`
  }

  // #region /tests/v-font

  test('v-font (font assign simple) (element class)', async () => {
    await page.goto(await getUrl('/v-font/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimple[data-f-56bf77ce]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimple.font-active[data-f-56bf77ce]')
  })

  test('v-font (font assign by single selector) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignBySingleSelector[data-f-3ce46a67]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignBySingleSelector.font-active[data-f-3ce46a67]')
  })

  test('v-font (font assign by multiple variances) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleVariances[data-f-493af80d]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleVariances.font-active[data-f-493af80d]')
  })

  test('v-font (font assign by multiple selectors) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectors[data-f-12e4c67a]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleSelectors.font-active[data-f-12e4c67a]')
  })

  test('v-font (font assign by deep selector) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByDeepSelector[data-f-619085c8]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByDeepSelector.font-active[data-f-619085c8]')
  })

  // #endregion

  // #region /tests/v-font-media

  test('v-font (media) (font assign simple by max 479px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font-media'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleByMax479[data-f--cb5eade]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleByMax479.font-active[data-f--cb5eade]')
  })

  test('v-font (media) (font assign simple by 480px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font-media/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy480[data-f-4ceb1f12]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy480.font-active[data-f-4ceb1f12]')
  })

  test('v-font (media) (font assign simple by 960px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font-media/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy960[data-f-1c63300d]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy960.font-active[data-f-1c63300d]')
  })

  test('v-font (media) (font assign with selector by 1440px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/v-font-media/'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontBySingleSelectorBy1440[data-f-4ada246c]').classList.contains('.font-active'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontBySingleSelectorBy1440.font-active[data-f-4ada246c]')
  })

  // #endregion

  // #region /tests/speedkit-image

  test('speedkit-image', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/speedkit-image/'))

    page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })
    await page.waitForSelector('#lazyContainer :not(noscript) > img[srcset]')
  })

  // #endregion

  // #region /tests/speedkit-picture

  test('speedkit-picture', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/speedkit-picture/'))

    page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })

    expect(await page.evaluate(() => document.querySelector('#lazyContainer :not(noscript) > picture source'))).toBeFalsy()

    await page.waitForSelector('#lazyContainer :not(noscript) > picture source')
  })

  // #endregion

  // #region /tests/speedkit-function

  test('speedkit-function', async () => {
    await page.goto(await getUrl('/speedkit-function/'))

    // test with IntersectionObserver

    expect(await page.evaluate(() => document.querySelector('#testResolveByIntersectionObserver.speedkit-test--active'))).toBeFalsy()

    await page.waitForSelector('#testResolveByIntersectionObserver.speedkit-test--active')

    // test with name

    expect(await page.evaluate(() => document.querySelector('#testResolveByName.speedkit-test--active'))).toBeFalsy()

    page.evaluate(() => {
      window.__NUXT_SPEEDKIT_RESOLVE_COMPONENTS__('resolve-components')
    })
    await page.waitForSelector('#testResolveByName.speedkit-test--active')

    // test with event

    expect(await page.evaluate(() => document.querySelector('#testResolveByEvent.speedkit-test--active'))).toBeFalsy()

    page.evaluate(() => {
      document.querySelector('#testResolveByEvent').click()
    })
    await page.waitForSelector('#testResolveByEvent.speedkit-test--active')
  })

  // #endregion

  // #region /tests/speedkit-iframe

  test('speedkit-iframe', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/speedkit-iframe/'))

    page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })
    await page.waitForSelector('#lazyContainer iframe[src]')
  })

  // #endregion
})
