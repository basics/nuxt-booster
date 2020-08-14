const { join, resolve } = require('path')
const puppeteer = require('puppeteer')
const { setup, loadConfig, generatePort } = require('@nuxtjs/module-test-utils')
// const { deleteDir, makeDir } = require('./utils')
// const { getDom, getFontFaceSnippet, minifyHTML } = require('./utils')

describe('browser', () => {
  let nuxt,
    browser, page
  const fixtureDir = resolve(__dirname, 'fixture', 'browser')
  const buildDir = join(fixtureDir, '.nuxt')

  beforeAll(async () => {
    // await deleteDir(fixtureDir)
    // await makeDir(fixtureDir)
    // await makeDir(resolve(fixtureDir, 'screenshots'))

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
    // return await Promise.resolve(`https://grabarzundpartner.github.io/lazy-resources${path}`)
    // return await Promise.resolve(`http://localhost:3000${path}`)
  }

  test('v-font (font assign simple) (element class)', async () => {
    await page.goto(await getUrl('/tests/v-font'))

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimple').classList.contains('font-lobster-two-400-normal'))).toBeFalsy()
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimple.font-lobster-two-400-normal')

    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimple').classList.contains('font-lobster-two-400-normal'))).not.toBeFalsy()

    // html = getHTML()
    // dom = getDom(html)

    // // // font face exists?
    // // expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Lobster Two', 'normal', 400))).not.toBe(-1)
    // // // font class exists?
    // // expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-normal')).not.toBe(-1)
    // // // font link preload exists?
    // // expect(dom.head.querySelector('link[hid="font-comic-neue-400-normal"]')).not.toBeNull()
    // // element has font class?
    // expect(dom.querySelector('.overview-link span.font-comic-neue-400-normal')).not.toBeNull()
  })

  // async function getHTML (path = '') {
  //   html = await get('/' + join('', path))
  //   return minifyHTML(html)
  // }

  // test('v-font (layout) (font-face, class, link (preload), element class)', async () => {
  //   html = await getHTML()
  //   dom = getDom(html)

  //   // font face exists?
  //   expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 400))).not.toBe(-1)
  //   // font class exists?
  //   expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-normal')).not.toBe(-1)
  //   // font link preload exists?
  //   expect(dom.head.querySelector('link[hid="font-comic-neue-400-normal"]')).not.toBeNull()
  //   // element has font class?
  //   expect(dom.querySelector('.overview-link span.font-comic-neue-400-normal')).not.toBeNull()
  // })
})
