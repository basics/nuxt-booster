/* eslint-disable no-secrets/no-secrets */
import { resolve as fsResolve } from 'path';
import { readFile } from 'fs';
import generateTests from './tests/generate';

const { generate, loadConfig } = require('@nuxtjs/module-test-utils');

describe('generate', () => {
  const distDir = fsResolve(__dirname, 'fixture', 'generate', '.nuxt-generate');
  const buildDir = fsResolve(__dirname, 'fixture', 'generate', '.nuxt');

  function getHTML (path = '') {
    return new Promise(resolve => readFile(fsResolve(distDir, path, 'index.html'), 'utf-8', (err, data) => {
      if (err) { throw err; }
      resolve(data);
    }));
  }

  beforeAll(async () => {
    const overrides = {
      modern: false,

      buildDir,
      generate: { dir: distDir },
      dir: {
        pages: 'pages/tests'
      }
    };

    await generate(loadConfig(__dirname, '../../example', overrides, { merge: true }));
  }, 120000);

  generateTests(getHTML);
});
