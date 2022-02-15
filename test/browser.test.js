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
  // #region /tests/loader

  it('speedkitLoader', async () => {
    const page = await createPage('/speedkit-loader/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazySpeedkitLoader').classList.contains('.active'))).toBeFalsy();
    await page.waitForSelector('#criticalSpeedkitLoader.active');
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazySpeedkitLoader.active');
  });

  // #endregion /tests/loader

  // #region /tests/v-font

  // it('v-font (media) (font assign simple by orientation portrait) (element class)', async () => {
  //   const page = await createPage('/v-font-media');

  //   // element has no font class?
  //   expect(await page.evaluate(() => document.querySelector('#criticalFontAssignSimpleByOrientationPortrait[data-font="-3ed9f5ca"]').classList.contains('.font-active'))).toBeFalsy();
  //   // scroll to element
  //   await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  //   // element has font class?
  //   await page.waitForSelector('#lazyFontAssignSimpleByOrientationPortrait.font-active[data-font="-72fc4ecb"]');
  // });

  // it('v-font (media) (font assign simple by orientation landscape) (element class)', async () => {
  //   const page = await createPage('/v-font-media');

  //   // element has no font class?
  //   expect(await page.evaluate(() => document.querySelector('#criticalFontAssignSimpleByOrientationLandscape[data-font="-410c79b7"]').classList.contains('.font-active'))).toBeFalsy();
  //   // scroll to element
  //   await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  //   // element has font class?
  //   await page.waitForSelector('#lazyFontAssignSimpleByOrientationLandscape.font-active[data-font="-1c245f8b"]');
  // });

  it('v-font (font assign simple) (element class)', async () => {
    const page = await createPage('/v-font/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimple[data-font="-7d2b6285"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimple.font-active[data-font="-7d2b6285"]');
  });

  it('v-font (font assign by single selector) (element class)', async () => {
    const page = await createPage('/v-font/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignBySingleSelector[data-font="-65bc6cec"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignBySingleSelector.font-active[data-font="-65bc6cec"]');
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
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleByMax479[data-font="--4db87f5"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleByMax479.font-active[data-font="--4db87f5"]');
  });

  it('v-font (media) (font assign simple by 480px) (element class)', async () => {
    const page = await createPage('/v-font-media/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy480[data-font="-5e7c91e5"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy480.font-active[data-font="-5e7c91e5"]');
  });

  it('v-font (media) (font assign simple by 960px) (element class)', async () => {
    const page = await createPage('/v-font-media/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontAssignSimpleBy960[data-font="-2df4a2e0"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontAssignSimpleBy960.font-active[data-font="-2df4a2e0"]');
  });

  it('v-font (media) (font assign with selector by 1440px) (element class)', async () => {
    const page = await createPage('/v-font-media/');

    // element has no font class?
    expect(await page.evaluate(() => document.querySelector('#lazyFontBySingleSelectorBy1440[data-font="-5f6b8217"]').classList.contains('.font-active'))).toBeFalsy();
    // scroll to element
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // element has font class?
    await page.waitForSelector('#lazyFontBySingleSelectorBy1440.font-active[data-font="-5f6b8217"]');
  });

  // #endregion

  // #region /tests/v-font-scroll

  it('v-font (scroll) (font assign simple with horizontal & vertical offset scroll)', async () => {
    const page = await createPage('/v-font-scroll');

    expect(await page.evaluate(() => document.querySelector('#horizontalScroll .item-5').classList.contains('.font-active'))).toBeFalsy();

    await page.evaluate(() => {
      const containerEl = document.querySelector('#horizontalScroll');
      containerEl.scrollTo(containerEl.scrollWidth, 0);
    });

    await page.waitForSelector('#horizontalScroll .item-5.font-active');

    expect(await page.evaluate(() => document.querySelector('#verticalScroll .item-5').classList.contains('.font-active'))).toBeFalsy();

    await page.evaluate(() => window.scrollBy(0, window.innerHeight));

    await page.evaluate(() => {
      const containerEl = document.querySelector('#verticalScroll');
      containerEl.scrollTo(0, containerEl.scrollHeight);
    });

    await page.waitForSelector('#verticalScroll .item-5.font-active');
  });

  // #endregion

  if (!firefox) {
    // #region /tests/youtube
    it('youtube ready, play and autoplay', async () => {
      const page = await createPage('/youtube/');

      // start first player
      await page.evaluate(() => document.querySelector('#youtube-0 button').click());
      // wait for playing first player playing
      await page.waitForSelector('#youtube-0 .nuxt-speedkit-youtube.ready.playing');

      // scroll to second player for autoplay
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));

      // wait for playing first player playing
      await page.waitForSelector('#youtube-0 .nuxt-speedkit-youtube.ready:not(.playing)');
      await page.waitForSelector('#youtube-1 .nuxt-speedkit-youtube.ready.playing');
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
    //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit-vimeo.ready');
    //   } else {
    //     // start first player
    //     await page.evaluate(() => document.querySelector('#vimeo-0 button').click());
    //     // wait for playing first player playing
    //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit-vimeo.ready.playing');

    //     // // wait for playing first player playing
    //     await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    //     // // start second player
    //     await page.evaluate(() => document.querySelector('#vimeo-1 button').click());
    //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit-vimeo.ready:not(.playing)');
    //     await page.waitForSelector('#vimeo-1 .nuxt-speedkit-vimeo.ready.playing');
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
  }
  // #endregion
}
