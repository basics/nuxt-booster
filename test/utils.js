import { JSDOM } from 'jsdom'
const fs = require('fs')
const rimraf = require('rimraf')

const minify = require('html-minifier').minify

export function getDom (html) {
  return new JSDOM(html).window.document
}

export function getFontFaceSnippet (family = 'Comic Neue', style = 'italic', weight = 300) {
  return `@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};`
}

// See https://nuxtjs.org/api/configuration-build/#htmlminify
const minifyDefaultOptions = {
  collapseBooleanAttributes: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  processConditionalComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  trimCustomFragments: true,
  useShortDoctype: true
}

export function minifyHTML (html) {
  return minify(html, minifyDefaultOptions)
}

export function makeDir (path) {
  return fs.promises.mkdir(path)
}
export function deleteDir (path) {
  return new Promise((resolve) => {
    if (fs.existsSync(path)) {
      rimraf(path, resolve)
    } else { resolve() }
  })
}
