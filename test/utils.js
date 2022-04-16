import { resolve as fsResolve } from 'path';
import fs, { readFile } from 'fs';
import { JSDOM } from 'jsdom';
import rimraf from 'rimraf';
import { createApp } from 'h3';
import { listen } from 'listhen';
import serveStatic from 'serve-static';
import { toHashHex } from '../lib/utils/string';

export const getDom = html => new JSDOM(html).window.document;

export const getFontFaceSnippet = (family = 'Merriweather', style = 'italic', weight = 300) => {
  return ['      @font-face {',
    `        font-family: '${family}';`,
    `        font-style: ${style};`,
    `        font-weight: ${weight};`].join('\n');

  // return `@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};`
};

export const getLinkPreloadHid = (family, weight = 400, style = 'normal', media = 'all') => {
  return toHashHex(`${family}-${weight}-${style}-${media}`.toLowerCase());
};

export const makeDir = (path) => {
  /* eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input */
  return fs.promises.mkdir(path);
};
export const deleteDir = (path) => {
  return new Promise((resolve) => {
    /* eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input */
    if (fs.existsSync(path)) {
      rimraf(path, resolve);
    } else { resolve(); }
  });
};

export const getHTML = (path = '') => {
  return new Promise(resolve => readFile(fsResolve(path, 'index.html'), 'utf-8', (err, data) => {
    if (err) { throw err; }
    resolve(data);
  }));
};

export const startStaticServer = (dist, port, hostname) => {
  const app = createApp();
  app.use(serveStatic(dist));
  return listen(app, {
    hostname, port
  });
};
