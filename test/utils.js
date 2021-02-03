import { resolve as fsResolve } from 'path';
import fs, { readFile } from 'fs';
import { JSDOM } from 'jsdom';
import rimraf from 'rimraf';
import { toHashHex } from '../lib/utils/string';

const minify = require('html-minifier').minify;

export function getDom (html) {
  return new JSDOM(html).window.document;
}

export function getFontFaceSnippet (family = 'Merriweather', style = 'italic', weight = 300) {
  return ['      @font-face {',
    `        font-family: '${family}';`,
    `        font-style: ${style};`,
    `        font-weight: ${weight};`].join('\n');

  // return `@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};`
}

export function getLinkPreloadHid (family, weight = 400, style = 'normal', media = 'all') {
  return toHashHex(`${family}-${weight}-${style}-${media}`.toLowerCase());
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
};

export function minifyHTML (html) {
  return minify(html, minifyDefaultOptions);
}

export function makeDir (path) {
  /* eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input */
  return fs.promises.mkdir(path);
}
export function deleteDir (path) {
  return new Promise((resolve) => {
    /* eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input */
    if (fs.existsSync(path)) {
      rimraf(path, resolve);
    } else { resolve(); }
  });
}

export function getHTML (path = '') {
  return new Promise(resolve => readFile(fsResolve(path, 'index.html'), 'utf-8', (err, data) => {
    if (err) { throw err; }
    resolve(data);
  }));
}
