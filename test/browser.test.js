/* eslint-disable no-secrets/no-secrets */

import { join, resolve } from 'path';
import { createPage, setupTest } from '@nuxt/test-utils';

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
      target: 'static',
      modern: true,
      buildDir,
      modules: ['@nuxt/image'],
      dir: {
        pages: 'pages/tests'
      }
    }
  });

  tests({ chromium: true });
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
      target: 'static',
      modern: true,
      buildDir,
      modules: ['@nuxt/image'],
      dir: {
        pages: 'pages/tests'
      }
    }
  });

  tests({ firefox: true });
});

function tests ({ chromium = false, firefox = false }) {
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

  // #region /tests/picture

  it('picture', async () => {
    const page = await createPage('/picture/');

    expect(await page.evaluate(() => document.querySelector('#lazyContainer :not(noscript) > picture source[type="image/webp"]'))).toBeFalsy();

    await page.evaluate(() => window.scrollBy(0, window.innerHeight));

    await page.waitForSelector('#lazyContainer :not(noscript) > picture source[type="image/webp"]', {
      state: 'attached'
    });
  });

  // #endregion

  // #region /tests/youtube

  it('youtube ready & play', async () => {
    const page = await createPage('/youtube/');

    // start first player
    await page.evaluate(() => document.querySelector('#youtube-0 button').click());
    // wait for playing first player playing
    await page.waitForSelector('#youtube-0 .nuxt-speedkit__youtube.ready.playing');

    // start second player
    await page.evaluate(() => document.querySelector('#youtube-1 button').click());
    // wait for playing first player playing
    await page.waitForSelector('#youtube-0 .nuxt-speedkit__youtube.ready:not(.playing)');

    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForSelector('#youtube-1 .nuxt-speedkit__youtube.ready.playing');
  });

  // #endregion

  // #region /tests/vimeo

  // Vimeo test disabled because the video codecs are probably missing on the test VMs.

  // it('vimeo ready & play', async () => {
  //   const page = await createPage('/vimeo/');

  //   // Other Vimeo tests not working in chromium, codec H.264 is unsupport
  //   if (chromium) {
  //     // start first player
  //     await page.evaluate(() => document.querySelector('#vimeo-0 button').click());
  //     // wait for player ready
  //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit__vimeo.ready');
  //   } else {
  //     // start first player
  //     await page.evaluate(() => document.querySelector('#vimeo-0 button').click());
  //     // wait for playing first player playing
  //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit__vimeo.ready.playing');

  //     // // wait for playing first player playing
  //     await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  //     // // start second player
  //     await page.evaluate(() => document.querySelector('#vimeo-1 button').click());
  //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit__vimeo.ready:not(.playing)');
  //     await page.waitForSelector('#vimeo-1 .nuxt-speedkit__vimeo.ready.playing');
  //   }
  // });

  // #endregion

  // #region /tests/iframe

  it('iframe', async () => {
    const page = await createPage('/iframe/');

    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForSelector('#lazyContainer iframe[src]');
  });

  // #endregion
}
