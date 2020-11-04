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
      buildDir
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

  // /tests/v-font

  test('v-font (font assign simple) (element class)', async () => {
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimple').classList.contains('font-lobster-two-400-normal'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimple.font-montserrat-alternates-400-normal')
  })

  test('v-font (font assign by single selector) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignBySingleSelector').classList.contains('.font-montserrat-alternates-700-normal-c3ryb25n'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignBySingleSelector.font-montserrat-alternates-700-normal-c3ryb25n')
  })

  test('v-font (font assign by multiple variances) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleVariances').classList.contains('.font-montserrat-alternates-700-normal-c3ryb25n'))).toBeFalsy()
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleVariances').classList.contains('.font-montserrat-alternates-700-italic-aq'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleVariances.font-montserrat-alternates-700-normal-c3ryb25n')
    await page.waitForSelector('#lazyFontAssignByMultipleVariances.font-montserrat-alternates-700-italic-aq')
  })

  test('v-font (font assign by multiple selectors (string)) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsString').classList.contains('.font-montserrat-alternates-700-normal-c3ryb25n'))).toBeFalsy()
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsString').classList.contains('.font-montserrat-alternates-700-normal-yg'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsString.font-montserrat-alternates-700-normal-c3ryb25n')
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsString.font-montserrat-alternates-700-normal-yg')
  })

  test('v-font (font assign by multiple selectors (array)) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsArray').classList.contains('.font-montserrat-alternates-400-italic-aq'))).toBeFalsy()
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsArray').classList.contains('.font-montserrat-alternates-400-italic-zw0'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsArray.font-montserrat-alternates-400-italic-aq')
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsArray.font-montserrat-alternates-400-italic-zw0')
  })

  test('v-font (font assign by deep selector) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByDeepSelector').classList.contains('.font-montserrat-alternates-700-italic-c3ryb25nid4gaq'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByDeepSelector.font-montserrat-alternates-700-italic-c3ryb25nid4gaq')
  })

  // /tests/v-font-media

  test('v-font (media) (font assign simple by max 479px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font-media'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleByMax479').classList.contains('.font-montserrat-alternates-700-italic-kg1hec13awr0adogndc5chgp'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleByMax479.font-montserrat-alternates-700-italic-kg1hec13awr0adogndc5chgp')
  })

  test('v-font (media) (font assign simple by 480px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font-media'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy480').classList.contains('.font-montserrat-alternates-400-normal-kg1pbi13awr0adogndgwchgp'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy480.font-montserrat-alternates-400-normal-kg1pbi13awr0adogndgwchgp')
  })

  test('v-font (media) (font assign simple by 960px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font-media'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy960').classList.contains('.font-montserrat-alternates-400-italic-kg1pbi13awr0adogotywchgp'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy960.font-montserrat-alternates-400-italic-kg1pbi13awr0adogotywchgp')
  })

  test('v-font (media) (font assign with selector by 1440px) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font-media'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontBySingleSelectorBy1440').classList.contains('.font-montserrat-alternates-700-normal-kg1pbi13awr0adogmtq0mhb4ks1i'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontBySingleSelectorBy1440.font-montserrat-alternates-700-normal-kg1pbi13awr0adogmtq0mhb4ks1i')
  })

  // /tests/lazy-image

  test('lazy-image', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/lazy-image'))

    page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })
    await page.waitForSelector('#lazyContainer :not(noscript) > img[srcset]')
  })

  // /tests/lazy-picture

  test('lazy-picture', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/lazy-picture'))

    page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })

    expect(await page.evaluate(() => document.querySelector('#lazyContainer :not(noscript) > picture source'))).toBeFalsy()

    await page.waitForSelector('#lazyContainer :not(noscript) > picture source')
  })

  // /tests/speedkit-function

  test('speedkit-function', async () => {
    await page.goto(await getUrl('/tests/speedkit-function'))

    // test with IntersectionObserver

    expect(await page.evaluate(() => document.querySelector('#testResolveByIntersectionObserver.speedkit-test--active'))).toBeFalsy()

    await page.waitForSelector('#testResolveByIntersectionObserver.speedkit-test--active')

    // test with name

    expect(await page.evaluate(() => document.querySelector('#testResolveByName.speedkit-test--active'))).toBeFalsy()

    page.evaluate(() => {
      window.nuxtSpeedkitResolveComponents('resolve-components')
    })
    await page.waitForSelector('#testResolveByName.speedkit-test--active')

    // test with event

    expect(await page.evaluate(() => document.querySelector('#testResolveByEvent.speedkit-test--active'))).toBeFalsy()

    page.evaluate(() => {
      document.querySelector('#testResolveByEvent').click()
    })
    await page.waitForSelector('#testResolveByEvent.speedkit-test--active')
  })
})
