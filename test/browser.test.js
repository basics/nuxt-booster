/* eslint-disable no-secrets/no-secrets */

import { join, resolve } from 'path';
import { createPage, setupTest } from '@nuxt/test-utils';

// eslint-disable-next-line scanjs-rules/call_setTimeout
jest.setTimeout(20000);

describe('browser (Chrome)', () => {
  const testDir = resolve(__dirname, '.browser-chrome');
  const buildDir = join(testDir, '.nuxt');

  setupTest({
    browser: true,
    browserOptions: {
      type: 'chromium'
    },
    fixture: '../example',
    config: {
      fullstatic: true,
      modern: false,
      buildDir,
      dir: {
        pages: 'pages/tests'
      }
    }
  });

  tests();
});

describe('browser (Firefox)', () => {
  const testDir = resolve(__dirname, '.browser-firefox');
  const buildDir = join(testDir, '.nuxt');

  setupTest({
    browser: true,
    browserOptions: {
      type: 'firefox'
    },
    fixture: '../example',
    config: {
      fullstatic: true,
      modern: false,
      buildDir,
      dir: {
        pages: 'pages/tests'
      }
    }
  });

  tests();
});

function tests () {
  // #region /tests/v-font

  it('v-font (font assign simple) (element class)', async () => {
    const page = await createPage('/v-font/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimple[data-font="-56bf77ce"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimple.font-active[data-font="-56bf77ce"]');
  });

  it('v-font (font assign by single selector) (element class)', async () => {
    const page = await createPage('/v-font/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignBySingleSelector[data-font="-3ce46a67"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignBySingleSelector.font-active[data-font="-3ce46a67"]');
  });

  it('v-font (font assign by multiple variances) (element class)', async () => {
    const page = await createPage('/v-font/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleVariances[data-font="-1f925c6c"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleVariances.font-active[data-font="-1f925c6c"]');
  });

  it('v-font (font assign by multiple selectors) (element class)', async () => {
    const page = await createPage('/v-font/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByMultipleSelectors[data-font="-691980b2"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByMultipleSelectors.font-active[data-font="-691980b2"]');
  });

  it('v-font (font assign by deep selector) (element class)', async () => {
    const page = await createPage('/v-font/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignByDeepSelector[data-font="-26857299"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignByDeepSelector.font-active[data-font="-26857299"]');
  });

  // #endregion

  // #region /tests/v-font-media

  it('v-font (media) (font assign simple by max 479px) (element class)', async () => {
    const page = await createPage('/v-font-media');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleByMax479[data-font="--cb5eade"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleByMax479.font-active[data-font="--cb5eade"]');
  });

  it('v-font (media) (font assign simple by 480px) (element class)', async () => {
    const page = await createPage('/v-font-media/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy480[data-font="-4ceb1f12"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy480.font-active[data-font="-4ceb1f12"]');
  });

  it('v-font (media) (font assign simple by 960px) (element class)', async () => {
    const page = await createPage('/v-font-media/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy960[data-font="-1c63300d"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy960.font-active[data-font="-1c63300d"]');
  });

  it('v-font (media) (font assign with selector by 1440px) (element class)', async () => {
    const page = await createPage('/v-font-media/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontBySingleSelectorBy1440[data-font="-719faf96"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontBySingleSelectorBy1440.font-active[data-font="-719faf96"]');
  });

  // #endregion

  // #region /tests/speedkit-picture

  it('speedkit-picture', async () => {
    const page = await createPage('/speedkit-picture/');

    expect(await page.evaluate(() => document.querySelector('#lazyContainer :not(noscript) > picture source[type="image/webp"]'))).toBeFalsy();

    await page.evaluate(() => window.scrollBy(0, window.innerHeight));

    await page.waitForSelector('#lazyContainer :not(noscript) > picture source[type="image/webp"]', {
      state: 'attached'
    });
  });

  // #endregion

  // #region /tests/speedkit-iframe

  it('speedkit-iframe', async () => {
    const page = await createPage('/speedkit-iframe/');

    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForSelector('#lazyContainer iframe[src]');
  });

  // #endregion
}
