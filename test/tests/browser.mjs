/* eslint-disable no-secrets/no-secrets */

import { chromium } from 'playwright';
import { afterAll, describe, it, expect } from 'vitest';
import { joinURL } from 'ufo';

const browser = chromium.launch();

export default runtime => {
  afterAll(async () => {
    await (await browser).close();
  });

  describe('🧐 inspect browser (chromium)', () => {
    browserTests(runtime);
  });

  function browserTests(runtime) {
    const createPage = async (path, nojs) => {
      let context = await browser;
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

      expect(
        await page.evaluate(() =>
          document.getElementById('nuxt-speedkit-layer')
        )
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document
          .getElementById('nuxt-speedkit-button-init-reduced-view')
          .click()
      );
      await page.waitForLoadState('networkidle');

      await waitForSelector(page, 'html.nuxt-speedkit-reduced-view');

      // picture transformed
      await waitForSelector(page, '.nuxt-speedkit-picture');

      // active font
      await waitForSelector(page, '[data-font].font-active');
    });

    it('SpeedkitLayer (Apply with scripts)', async () => {
      const page = await createPage('/speedkit-layer/');

      expect(
        await page.evaluate(() =>
          document.getElementById('nuxt-speedkit-layer')
        )
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document.getElementById('nuxt-speedkit-button-init-app').click()
      );
      await page.waitForLoadState('networkidle');

      await waitForSelector(page, '.ready');

      // active font
      await waitForSelector(page, '[data-font].font-active');
    });

    it('SpeedkitLayer (No Javascript)', async () => {
      const page = await createPage('/speedkit-layer/', true);

      expect(
        await page.evaluate(() =>
          document.getElementById('nuxt-speedkit-layer')
        )
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document.getElementById('nuxt-speedkit-button-init-nojs').click()
      );

      expect(
        await page.evaluate(
          () => document.getElementById('nuxt-speedkit-layer-close').checked
        )
      ).toBeFalsy();
    });

    // #endregion /tests/speedkit-layer

    // #region /tests/weak-hardware-overlay

    it('WeakHardwareOverlay (Visible & Init App)', async () => {
      const page = await createPage('/weak-hardware-overlay/');

      expect(
        await page.evaluate(() =>
          document.querySelector('.nuxt-speedkit-weak-hardware-overlay')
        )
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document
          .querySelector('.nuxt-speedkit-weak-hardware-overlay button')
          .click()
      );
      await page.waitForSelector('div.mounted');

      expect(
        await page.evaluate(() =>
          document.querySelector('.nuxt-speedkit-weak-hardware-overlay')
        )
      ).toBeFalsy();
    });

    // #endregion /tests/weak-hardware-overlay

    // #region /tests/speedkit-loader

    it('speedkitHydrate', async () => {
      const page = await createPage('/speedkit-loader/');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazySpeedkitHydrate')
            .classList.contains('.active')
        )
      ).toBeFalsy();
      await waitForSelector(page, '#criticalSpeedkitHydrate.active');
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(page, '#lazySpeedkitHydrate.active');
    });

    // #endregion /tests/speedkit-loader

    // #region /tests/v-font

    it('v-font (font assign simple) (element class)', async () => {
      const page = await createPage('/v-font/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyFontAssignSimple[data-font="-6c50917f"]')
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimple.font-active[data-font="-6c50917f"]'
      );
    });

    it('v-font (font assign by single selector) (element class)', async () => {
      const page = await createPage('/v-font/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignBySingleSelector[data-font="--1284928"]'
            )
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignBySingleSelector.font-active[data-font="--1284928"]'
      );
    });

    it('v-font (font assign by multiple variances) (element class)', async () => {
      const page = await createPage('/v-font/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignByMultipleVariances[data-font="-48f3408e"]'
            )
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignByMultipleVariances.font-active[data-font="-48f3408e"]'
      );
    });

    it('v-font (font assign by multiple selectors) (element class)', async () => {
      const page = await createPage('/v-font/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignByMultipleSelectors[data-font="-44209b8a"]'
            )
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignByMultipleSelectors.font-active[data-font="-44209b8a"]'
      );
    });

    it('v-font (font assign by deep selector) (element class)', async () => {
      const page = await createPage('/v-font/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignByDeepSelector[data-font="-4693b0e3"]'
            )
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignByDeepSelector.font-active[data-font="-4693b0e3"]'
      );
    });

    // #endregion

    // #region /tests/v-font-media

    it('v-font (media) (font assign simple by max 479px) (element class)', async () => {
      const page = await createPage('/v-font-media');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignSimpleByMax479[data-font="-6f552471"]'
            )
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimpleByMax479.font-active[data-font="-6f552471"]'
      );
    });

    it('v-font (media) (font assign simple by 480px) (element class)', async () => {
      const page = await createPage('/v-font-media/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyFontAssignSimpleBy480[data-font="-6b997d9f"]')
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimpleBy480.font-active[data-font="-6b997d9f"]'
      );
    });

    it('v-font (media) (font assign simple by 960px) (element class)', async () => {
      const page = await createPage('/v-font-media/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyFontAssignSimpleBy960[data-font="-4aba2a64"]')
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimpleBy960.font-active[data-font="-4aba2a64"]'
      );
    });

    it('v-font (media) (font assign with selector by 1440px) (element class)', async () => {
      const page = await createPage('/v-font-media/');
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontBySingleSelectorBy1440[data-font="-6f6c30e5"]'
            )
            .classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontBySingleSelectorBy1440.font-active[data-font="-6f6c30e5"]'
      );
    });

    // #endregion

    // #region /tests/v-font-scroll

    it('v-font (scroll) (font assign simple with horizontal & vertical offset scroll)', async () => {
      const page = await createPage('/v-font-scroll');
      await page.waitForLoadState('networkidle');
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#horizontalScroll .item-5')
            .classList.contains('.font-active')
        )
      ).toBeFalsy();

      await page.evaluate(() => {
        const containerEl = document.querySelector('#horizontalScroll');
        containerEl.scrollTo(containerEl.scrollWidth, 0);
      });

      await waitForSelector(page, '#horizontalScroll .item-5.font-active');

      expect(
        await page.evaluate(() =>
          document
            .querySelector('#verticalScroll .item-5')
            .classList.contains('.font-active')
        )
      ).toBeFalsy();

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.evaluate(() => {
        const containerEl = document.querySelector('#verticalScroll');
        containerEl.scrollTo(0, containerEl.scrollHeight);
      });

      await waitForSelector(page, '#verticalScroll .item-5.font-active');
    });

    // #endregion

    // #region /tests/iframe

    it('SpeedkitIframe', async () => {
      const page = await createPage('/iframe/');
      await page.waitForLoadState('networkidle');
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await waitForSelector(page, '#lazyContainer iframe[src]');
    });

    // #endregion

    // #region /tests/youtube
    it('SpeedkitYoutube ready, play and autoplay', async () => {
      const page = await createPage('/youtube/');
      await page.waitForLoadState('networkidle');

      // start first player
      await page.evaluate(() =>
        document.querySelector('#youtube-0 button').click()
      );
      await page.waitForLoadState('networkidle');

      // wait for playing first player playing
      await waitForSelector(
        page,
        '#youtube-0 .nuxt-speedkit-youtube.ready.playing'
      );

      // scroll to second player for autoplay
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForLoadState('networkidle');

      await waitForSelector(
        page,
        '#youtube-1 .nuxt-speedkit-youtube.ready.playing'
      );

      await waitForSelector(page, '#youtube-0 .nuxt-speedkit-youtube.ready');

      // wait for playing first player playing
      // await waitForSelector(page,
      //   '#youtube-0 .nuxt-speedkit-youtube.ready:not(.playing)'
      // );
    });

    // #endregion

    // #region /tests/vimeo

    // it('SpeedkitVimeo ready & play', async () => {
    //   const page = await createPage('/vimeo/');
    //   await page.waitForLoadState('networkidle');

    //   // Other Vimeo tests not working in chromium, codec H.264 is unsupport
    //   if (browser === BROWSERS.CHROMIUM) {
    //     // start first player
    //     await page.evaluate(() =>
    //       document.querySelector('#vimeo-0 button').click()
    //     );
    //     await page.waitForLoadState('networkidle');

    //     // wait for player ready
    //     await waitForSelector(page, '#vimeo-0 .nuxt-speedkit-vimeo.ready');
    //   } else {
    //     // start first player
    //     await page.evaluate(() =>
    //       document.querySelector('#vimeo-0 button').click()
    //     );
    //     await page.waitForLoadState('networkidle');

    //     // wait for playing first player playing
    //     await waitForSelector(page,
    //       '#vimeo-0 .nuxt-speedkit-vimeo.ready.playing'
    //     );

    //     // // wait for playing first player playing
    //     await page.evaluate(scroll, {direction: "down", speed: "slow"});
    //     // // start second player
    //     await page.evaluate(() =>
    //       document.querySelector('#vimeo-1 button').click()
    //     );
    //     await page.waitForLoadState('networkidle');

    //     await waitForSelector(page,
    //       '#vimeo-0 .nuxt-speedkit-vimeo.ready:not(.playing)'
    //     );
    //     await waitForSelector(page,
    //       '#vimeo-1 .nuxt-speedkit-vimeo.ready.playing'
    //     );
    //   }
    // });

    // #endregion
  }
};

function waitForSelector(page, selector) {
  const locator = page.locator(selector);
  return locator.waitFor({
    state: 'attached'
  });
}
