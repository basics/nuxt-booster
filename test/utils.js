import { resolve as fsResolve } from 'path';
import fs, { readFile } from 'fs';
import http from 'http';
import { JSDOM } from 'jsdom';
import rimraf from 'rimraf';
import finalhandler from 'finalhandler';
import serveStatic from 'serve-static';
import { defu } from 'defu';
import { Nuxt, Builder, Generator } from 'nuxt';
import { getPort } from 'get-port-please';
import nuxtConfig from '../example/nuxt.config';
import { toHashHex } from '../lib/utils/string';

export const generate = async (buildDir, distDir) => {
  const config = defu({
    target: 'static',
    modern: true,
    buildDir,
    env: {
      DISABLE_INFO_LAYER: true
    },
    generate: { cache: false, dir: distDir, crawler: false },
    dir: {
      pages: 'pages/tests'
    }
  }, nuxtConfig);
  const nuxt = new Nuxt(config);
  nuxt.server.listen(await getPort({ random: true }));
  await nuxt.ready();

  const builder = new Builder(nuxt);
  await new Generator(nuxt, builder).generate({ build: true, init: true });
  await nuxt.close();
};

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

export const startStaticServer = async (dist, port, hostname = 'localhost') => {
  port = port || await getPort();
  const serve = serveStatic(dist);
  const server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res));
  });
  server.listen({ port, hostname });
  return { server, url: (new URL(`http://${hostname}:${port}`)).toString() };
};
