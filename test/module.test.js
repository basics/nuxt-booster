const { join, resolve } = require('path')
const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')
const { getDom, minifyHTML, getLinkPreloadHid } = require('./utils')

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

  // #region /tests/v-font

  test('v-font (font assign simple) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-10e6588e]')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'normal')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimple[data-f-10e6588e]')).not.toBeNull()
  })

  test('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-4d3c52af] strong')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignBySingleSelector[data-f-4d3c52af]')).not.toBeNull()
  })

  test('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-53c040b2] strong')).not.toBe(-1)
    expect(dom.head.innerHTML.indexOf('[data-f-53c040b2] i')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal')}"]`)).not.toBeNull()
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'italic')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleVariances[data-f-53c040b2]')).not.toBeNull()
  })

  test('v-font (font assign by multiple selectors) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-729307df] i,[data-f-729307df] em')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectors[data-f-729307df]')).not.toBeNull()
  })

  test('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-70c45035] strong>i')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'italic')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByDeepSelector[data-f-70c45035]')).not.toBeNull()
  })

  // #endregion

  // #region /tests/v-font-media

  test('v-font (media) (font assign simple by max 479px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font-media')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-29e4a635]')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'italic', '(max-width: 479px)')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleByMax479[data-f-29e4a635]')).not.toBeNull()
  })

  test('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font-media')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-27c3e1ae]')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'normal', '(min-width: 480px)')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy480[data-f-27c3e1ae]')).not.toBeNull()
  })

  test('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font-media')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f--91b8358]')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic', '(min-width: 960px)')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy960[data-f--91b8358]')).not.toBeNull()
  })

  test('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('tests/v-font-media')
    dom = getDom(html)

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-278bcc24] b')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal', '(min-width: 1440px)')}"]`)).not.toBeNull()
    // element has data attribute?
    expect(dom.querySelector('#criticalFontBySingleSelectorBy1440[data-f-278bcc24]')).not.toBeNull()
  })

  // #endregion

  // #region /tests/speedkit-image

  test('speedkit-image', async () => {
    html = await getHTML('tests/speedkit-image')
    dom = getDom(html)

    const criticalSrcset = dom.querySelector('#criticalContainer').dataset.preloadSrcset
    const lazySrcset = dom.querySelector('#lazyContainer').dataset.preloadSrcset

    expect(dom.querySelector(`link[imageSrcset="${criticalSrcset}"][rel="preload"]`)).not.toBeNull()
    expect(dom.querySelector(`link[imageSrcset="${lazySrcset}"][rel="preload"]`)).toBeNull()
  })

  // #endregion

  // #region /tests/speedkit-picture

  test('speedkit-picture', async () => {
    html = await getHTML('tests/speedkit-picture')
    dom = getDom(html)

    const criticalSrcset = dom.querySelector('#criticalContainer').dataset.preloadSrcset
    const lazySrcset = dom.querySelector('#lazyContainer').dataset.preloadSrcset

    expect(dom.querySelector(`link[imageSrcset="${criticalSrcset}"][rel="preload"]`)).not.toBeNull()
    expect(dom.querySelector(`link[imageSrcset="${lazySrcset}"][rel="preload"]`)).toBeNull()
  })

  // #endregion
})
