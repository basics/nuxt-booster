import { resolve } from 'path'
import { readFileSync } from 'fs'
import {
  getFontFaceSnippet,
  getDom
} from './utils'

const { generate, loadConfig } = require('@nuxtjs/module-test-utils')

let html, dom

describe('generate', () => {
  const distDir = resolve(__dirname, 'fixture', 'generate', '.nuxt-generate')
  const buildDir = resolve(__dirname, 'fixture', 'generate', '.nuxt')

  function getHTML (path = '') {
    return readFileSync(resolve(distDir, path, 'index.html'), 'utf-8')
  }

  beforeAll(async () => {
    const overrides = {
      modern: false,

      buildDir,
      generate: { dir: distDir }
    }

    await generate(loadConfig(__dirname, '../../example', overrides, { merge: true }))
  }, 120000)

  test('v-font (layout) (font-face, class, link (preload), element class)', () => {
    html = getHTML()
    dom = getDom(html)

    // font face exists?
    expect(dom.head.innerHTML.indexOf(getFontFaceSnippet('Comic Neue', 'normal', 400))).not.toBe(-1)
    // font class exists?
    expect(dom.head.innerHTML.indexOf('.font-comic-neue-400-normal')).not.toBe(-1)
    // font link preload exists?
    expect(dom.head.querySelector('link[hid="font-comic-neue-400-normal"]')).not.toBeNull()
    // element has font class?
    expect(dom.querySelector('.overview-link span.font-comic-neue-400-normal')).not.toBeNull()
  })

  test('v-font (font assign simple) (font-face, class, link (preload), element class)', () => {
    html = getHTML('tests/v-font')
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

  test('v-font (font assign by single selector) (font-face, class, link (preload), element class)', () => {
    html = getHTML('tests/v-font')
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

  test('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', () => {
    html = getHTML('tests/v-font')
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

  test('v-font (font assign by multiple selectors (string)) (font-face, class, link (preload), element class)', () => {
    html = getHTML('tests/v-font')
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

  test('v-font (font assign by multiple selectors (array)) (font-face, class, link (preload), element class)', () => {
    html = getHTML('tests/v-font')
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

  test('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', () => {
    html = getHTML('tests/v-font')
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

  test('lazy-image', () => {
    html = getHTML('tests/lazy-image')
    dom = getDom(html)

    expect(dom.querySelector('#criticalContainer img[loading="eager"]')).not.toBeNull()
    expect(dom.querySelector('#lazyContainer img[loading="lazy"]')).not.toBeNull()
  })

  test('lazy-picture', () => {
    html = getHTML('tests/lazy-picture')
    dom = getDom(html)

    expect(dom.querySelector('#criticalContainer picture img[loading="eager"]')).not.toBeNull()
    expect(dom.querySelector('#lazyContainer picture img[loading="lazy"]')).not.toBeNull()
  })
})
