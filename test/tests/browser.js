/* eslint-disable no-secrets/no-secrets */

import { chromium, firefox } from 'playwright';
import { afterAll, describe, it, expect } from 'vitest';
import { joinURL } from 'ufo';
const BROWSERS = { CHROMIUM: 0, FIREFOX: 1 };

const browsers = new Map([
  [BROWSERS.CHROMIUM, chromium.launch()],
  [BROWSERS.FIREFOX, firefox.launch()]
]);

export default (runtime) => {
  afterAll(async () => {
    await Promise.all(Array.from(browsers.values()).map(async browser => (await browser).close()));
  });

  describe('🧐 inspect browser (chromium)', () => {
    browserTests({ browser: BROWSERS.CHROMIUM, runtime });
  });

  describe('🧐 inspect browser (firefox)', () => {
    browserTests({ browser: BROWSERS.FIREFOX, runtime });
  });

  function browserTests ({ browser = false, runtime }) {
    const createPage = async (path, nojs) => {
      let context = await browsers.get(browser);
      if (nojs) {
        context = await context.newContext({
          javaScriptEnabled: false
        });
      }
      const page = await context.newPage();
      await page.goto(joinURL(runtime.serverUrl, path));
      return page;
    };

    // #region /tests/speedkit-layer

    it('SpeedkitLayer (Apply without scripts)', async () => {
      const page = await createPage('/speedkit-layer/');

      expect(await page.evaluate(() => document.getElementById('nuxt-speedkit-layer'))).not.toBeFalsy();

      await page.evaluate(() => document.getElementById('nuxt-speedkit-button-init-reduced-view').click());
      await page.waitForLoadState('networkidle');

      await page.waitForSelector('html.nuxt-speedkit-reduced-view');

      // picture transformed
      await page.waitForSelector('.nuxt-speedkit-picture');

      // active font
      await page.waitForSelector('[data-font].font-active');
    });

    it('SpeedkitLayer (Apply with scripts)', async () => {
      const page = await createPage('/speedkit-layer/');

      expect(await page.evaluate(() => document.getElementById('nuxt-speedkit-layer'))).not.toBeFalsy();

      await page.evaluate(() => document.getElementById('nuxt-speedkit-button-init-app').click());
      await page.waitForLoadState('networkidle');

      // picture transformed
      await page.waitForSelector('.nuxt-speedkit-picture');

      // active font
      await page.waitForSelector('[data-font].font-active');
    });

    it('SpeedkitLayer (No Javascript)', async () => {
      const page = await createPage('/speedkit-layer/', true);

      expect(await page.evaluate(() => document.getElementById('nuxt-speedkit-layer'))).not.toBeFalsy();

      await page.evaluate(() => document.getElementById('nuxt-speedkit-button-init-nojs').click());

      expect(await page.evaluate(() => document.getElementById('nuxt-speedkit-layer-close').checked)).toBeFalsy();
    });

    // #endregion /tests/speedkit-layer

    // #region /tests/speedkit-loader

    it('speedkitHydrate', async () => {
      const page = await createPage('/speedkit-loader/');
      // element has no font class?
      expect(await page.evaluate(() => document.querySelector('#lazySpeedkitHydrate').classList.contains('.active'))).toBeFalsy();
      await page.waitForSelector('#criticalSpeedkitHydrate.active');
      // scroll to element
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      // element has font class?
      await page.waitForSelector('#lazySpeedkitHydrate.active');
    });

    // #endregion /tests/speedkit-loader

    // #region /tests/v-font

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

    // #region /tests/iframe

    it('iframe', async () => {
      const page = await createPage('/iframe/');
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });
      await page.waitForSelector('#lazyContainer iframe[src]');
    });

    // #endregion

    // #region /tests/youtube
    it('youtube ready, play and autoplay', async () => {
      const page = await createPage('/youtube/');
      await page.waitForLoadState('networkidle');

      // start first player
      await page.evaluate(() => document.querySelector('#youtube-0 button').click());
      await page.waitForLoadState('networkidle');

      // wait for playing first player playing
      await page.waitForSelector('#youtube-0 .nuxt-speedkit-youtube.ready.playing');

      // scroll to second player for autoplay
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));

      // wait for playing first player playing
      await page.waitForSelector('#youtube-0 .nuxt-speedkit-youtube.ready:not(.playing)');
      await page.waitForSelector('#youtube-1 .nuxt-speedkit-youtube.ready.playing');
    });

    // #endregion

    // // #region /tests/vimeo

    // it('vimeo ready & play', async () => {
    //   const page = await createPage('/vimeo/');
    //   await page.waitForLoadState('networkidle');

    //   // Other Vimeo tests not working in chromium, codec H.264 is unsupport
    //   if (browser === BROWSERS.CHROMIUM) {
    //     // start first player
    //     await page.evaluate(() => document.querySelector('#vimeo-0 button').click());
    //     await page.waitForLoadState('networkidle');

    //     // wait for player ready
    //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit-vimeo.ready');
    //   } else {
    //     // start first player
    //     await page.evaluate(() => document.querySelector('#vimeo-0 button').click());
    //     await page.waitForLoadState('networkidle');

    //     // wait for playing first player playing
    //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit-vimeo.ready.playing');

    //     // // wait for playing first player playing
    //     await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    //     // // start second player
    //     await page.evaluate(() => document.querySelector('#vimeo-1 button').click());
    //     await page.waitForLoadState('networkidle');

    //     await page.waitForSelector('#vimeo-0 .nuxt-speedkit-vimeo.ready:not(.playing)');
    //     await page.waitForSelector('#vimeo-1 .nuxt-speedkit-vimeo.ready.playing');
    //   }
    // });

    // // #endregion
  }
};
