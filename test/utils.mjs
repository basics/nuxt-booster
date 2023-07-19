import { resolve as fsResolve } from 'path';
import { existsSync, promises as fsPromises } from 'fs';
import http from 'http';
import { JSDOM } from 'jsdom';
import rimraf from 'rimraf';
import finalhandler from 'finalhandler';
import serveStatic from 'serve-static';
import { getPort } from 'get-port-please';
import { toHashHex } from '../src/runtime/utils/string';

export const getDom = html => new JSDOM(html).window.document;

export const getFontFaceSnippet = (
  family = 'Merriweather',
  style = 'italic',
  weight = 300
) => {
  return [
    '      @font-face {',
    `        font-family: '${family}';`,
    `        font-style: ${style};`,
    `        font-weight: ${weight};`
  ].join('\n');
};

export const getLinkPreloadKey = (
  family,
  weight = 400,
  style = 'normal',
  media = 'all'
) => {
  return toHashHex(`${family}-${weight}-${style}-${media}`.toLowerCase());
};

export const makeDir = path => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  return fsPromises.mkdir(path);
};
export const deleteDir = path => {
  return new Promise(resolve => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (existsSync(path)) {
      rimraf(path, resolve);
    } else {
      resolve();
    }
  });
};

export const getHTML = (path = '') => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  return fsPromises.readFile(fsResolve(path, 'index.html'), 'utf-8');
};

export const startStaticServer = async (dist, port, hostname = 'localhost') => {
  port = port || (await getPort());
  const serve = serveStatic(dist);
  const server = http.createServer(function onRequest(req, res) {
    serve(req, res, finalhandler(req, res));
  });
  server.listen({ port, hostname });
  return { server, url: new URL(`http://${hostname}:${port}`).toString() };
};
