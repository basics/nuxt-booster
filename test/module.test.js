const { join, resolve } = require('path')
const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')
const { getDom, getFontFaceSnippet, minifyHTML } = require('./utils')

describe('module', () => {
  let nuxt, html, dom
  const buildDir = resolve(__dirname, 'fixture', 'module', '.nuxt')

  async function getHTML (path = '') {
    html = await get('/' + join('', path))
    return minifyHTML(html)
  }

  beforeAll(async () => {
    const overrides = {
      modern: false,
      buildDir
    };

    ({ nuxt } = (await setup(loadConfig(__dirname, '../../example', overrides, { merge: true }))))
  }, 120000)

  afterAll(async () => {
    await nuxt.close()
  })

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

  // /tests/v-font

  test('v-font (font assign simple) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 400))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-normal')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-400-normal"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignSimple.font-comic-neue-400-normal')).not.toBeNull()
  })

  test('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 700))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-normal-c3ryb25n strong')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-700-normal"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignBySingleSelector.font-comic-neue-700-normal-c3ryb25n')).not.toBeNull()
  })

  test('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 700))).not.toBe(-1)
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'italic', 700))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-normal-c3ryb25n strong')).not.toBe(-1)
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-italic-aq i')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-700-normal"]')).not.toBeNull()
    expect(dom.head.querySelector('link[hid="font-comic-neue-700-italic"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignByMultipleVariances.font-comic-neue-700-normal-c3ryb25n')).not.toBeNull()
    expect(dom.querySelector('#criticalFontAssignByMultipleVariances.font-comic-neue-700-italic-aq')).not.toBeNull()
  })

  test('v-font (font assign by multiple selectors (string)) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 700))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-normal-c3ryb25n strong')).not.toBe(-1)
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-normal-yg b')).not.toBe(-1)

    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-700-normal"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectorsString.font-comic-neue-700-normal-c3ryb25n')).not.toBeNull()
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectorsString.font-comic-neue-700-normal-yg')).not.toBeNull()
  })

  test('v-font (font assign by multiple selectors (array)) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'italic', 400))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-italic-aq i')).not.toBe(-1)
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-italic-zw0 em')).not.toBe(-1)

    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-400-italic"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectorsArray.font-comic-neue-400-italic-aq')).not.toBeNull()
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectorsArray.font-comic-neue-400-italic-zw0')).not.toBeNull()
  })

  test('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'italic', 700))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-italic-c3ryb25nid4gaq strong>i')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-700-italic"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignByDeepSelector.font-comic-neue-700-italic-c3ryb25nid4gaq')).not.toBeNull()
  })

  // /tests/v-font-media

  test('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font-media')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 400))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-normal-kg1pbi13awr0adogndgwchgp')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-400-normal-kg1pbi13awr0adogndgwchgp"][media="(min-width: 480px)"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignSimpleBy480.font-comic-neue-400-normal-kg1pbi13awr0adogndgwchgp')).not.toBeNull()
  })

  test('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font-media')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 400))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-normal-kg1pbi13awr0adogotywchgp')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-400-normal-kg1pbi13awr0adogotywchgp"][media="(min-width: 960px)"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontAssignSimpleBy960.font-comic-neue-400-normal-kg1pbi13awr0adogotywchgp')).not.toBeNull()
  })

  test('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font-media')
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 700))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-normal-kg1pbi13awr0adogmtq0mhb4kq')).not.toBe(-1)
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-700-normal-kg1pbi13awr0adogmtq0mhb4ks1i')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-700-normal-kg1pbi13awr0adogmtq0mhb4kq"][media="(min-width: 1440px)"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('#criticalFontBySingleSelectorBy1440.font-comic-neue-700-normal-kg1pbi13awr0adogmtq0mhb4ks1i')).not.toBeNull()
  })

  // /tests/lazy-image

  test('lazy-image', async () => {
    html = await getHTML('tests/lazy-image')
    dom = getDom(html)

    expect(dom.querySelector('#criticalContainer img[loading="eager"]')).not.toBeNull()
    expect(dom.querySelector('#lazyContainer img[loading="lazy"]')).not.toBeNull()
  })

  // /tests/lazy-picture

  test('lazy-picture', async () => {
    html = await getHTML('tests/lazy-picture')
    dom = getDom(html)

    expect(dom.querySelector('#criticalContainer picture img[loading="eager"]')).not.toBeNull()
    expect(dom.querySelector('#lazyContainer picture img[loading="lazy"]')).not.toBeNull()
  })
})
