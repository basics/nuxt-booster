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

  test('v-font (font assign simple) (element class)', async () => {
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimple').classList.contains('font-lobster-two-400-normal'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimple.font-lobster-two-400-normal')
  })

  test('v-font (font assign by single selector) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignBySingleSelector').classList.contains('.font-lobster-two-700-normal-c3ryb25n'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignBySingleSelector.font-lobster-two-700-normal-c3ryb25n')
  })

  test('v-font (font assign by multiple variances) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleVariances').classList.contains('.font-lobster-two-700-normal-c3ryb25n'))).toBeFalsy()
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleVariances').classList.contains('.font-lobster-two-700-italic-aq'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleVariances.font-lobster-two-700-normal-c3ryb25n')
    await page.waitForSelector('#lazyFontAssignByMultipleVariances.font-lobster-two-700-italic-aq')
  })

  test('v-font (font assign by multiple selectors (string)) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsString').classList.contains('.font-lobster-two-700-normal-c3ryb25n'))).toBeFalsy()
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsString').classList.contains('.font-lobster-two-700-normal-yg'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsString.font-lobster-two-700-normal-c3ryb25n')
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsString.font-lobster-two-700-normal-yg')
  })

  test('v-font (font assign by multiple selectors (array)) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsArray').classList.contains('.font-lobster-two-400-italic-aq'))).toBeFalsy()
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectorsArray').classList.contains('.font-lobster-two-400-italic-zw0'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsArray.font-lobster-two-400-italic-aq')
    await page.waitForSelector('#lazyFontAssignByMultipleSelectorsArray.font-lobster-two-400-italic-zw0')
  })

  test('v-font (font assign by deep selector) (element class)', async () => {
    await page.goto(await getUrl('/'))
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByDeepSelector').classList.contains('.font-lobster-two-700-italic-c3ryb25nid4gaq'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByDeepSelector.font-lobster-two-700-italic-c3ryb25nid4gaq')
  })

  test('lazy-image', async () => {
    await page.goto(await getUrl('/tests/lazy-image'))

    page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })
    await page.waitForSelector('#lazyContainer img[loading="lazy"][srcset]')
  })

  test('lazy-picture', async () => {
    await page.goto(await getUrl('/tests/lazy-picture'))

    page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })
    await page.waitForSelector('#lazyContainer picture source')
  })
})
