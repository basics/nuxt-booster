import generateTests from './tests/generate';
const { join, resolve } = require('path');
const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils');
const { minifyHTML } = require('./utils');

describe('module', () => {
  let nuxt, html;
  const buildDir = resolve(__dirname, 'fixture', 'module', '.nuxt');

  async function getHTML (path = '') {
    html = await get('/' + join('', path));
    return minifyHTML(html);
  }

  beforeAll(async () => {
    const overrides = {
      modern: false,
      buildDir,
      dir: {
        pages: 'pages/tests'
      }
    };

    ({ nuxt } = (await setup(loadConfig(__dirname, '../../example', overrides, { merge: true }))));
  }, 120000);

  afterAll(async () => {
    await nuxt.close();
  });

  generateTests(getHTML);
});
