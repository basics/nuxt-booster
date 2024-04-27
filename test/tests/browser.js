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

    // #region /tests/useBoosterHead

    it('Transition (Page Change)', async () => {
      const page = await createPage('/useBoosterHead/');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-6c50917f"] { font-family: "Montserrat Alternates fallback",sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-6c50917f"] { font-family: "Montserrat Alternates", sans-serif; }'
          )
        )
      ).not.toBe(-1);

      await page.waitForSelector('[data-font="-370c22ce"].font-active');

      await page.waitForTimeout(2000);
      await page.getByText('Click here').click();

      await page.waitForSelector('[data-font="-15b2b0cd"].font-active');
      await page.waitForLoadState('networkidle');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-15b2b0cd"] { font-family: "Merriweather fallback",Georgia, sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-15b2b0cd"] { font-family: "Merriweather", Georgia, sans-serif; }'
          )
        )
      ).not.toBe(-1);

      // Go two pages to clean Head.
      await page.getByText('Empty 1').click();
      await page.waitForSelector('.empty-1.ready');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-15b2b0cd"] { font-family: "Merriweather fallback",Georgia, sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-15b2b0cd"] { font-family: "Merriweather", Georgia, sans-serif; }'
          )
        )
      ).not.toBe(-1);

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-6c50917f"] { font-family: "Montserrat Alternates fallback",sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-6c50917f"] { font-family: "Montserrat Alternates", sans-serif; }'
          )
        )
      ).not.toBe(-1);

      await page.getByText('Empty 2').click();
      await page.waitForSelector('.empty-2.ready');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-15b2b0cd"] { font-family: "Merriweather fallback",Georgia, sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-15b2b0cd"] { font-family: "Merriweather", Georgia, sans-serif; }'
          )
        )
      ).toBe(-1);

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-6c50917f"] { font-family: "Montserrat Alternates fallback",sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-6c50917f"] { font-family: "Montserrat Alternates", sans-serif; }'
          )
        )
      ).toBe(-1);
    });

    // #endregion

    // #region /tests/booster-layer

    it('BoosterLayer (Apply without scripts)', async () => {
      const page = await createPage('/booster-layer/');

      expect(
        await page.evaluate(() => document.getElementById('nuxt-booster-layer'))
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document.getElementById('nuxt-booster-button-init-reduced-view').click()
      );
      await page.waitForLoadState('networkidle');

      await waitForSelector(page, 'html.nuxt-booster-reduced-view');

      // picture transformed
      await waitForSelector(page, '.nuxt-booster-picture');

      // active font
      await waitForSelector(page, '[data-font].font-active');
    });

    it('BoosterLayer (Apply with scripts)', async () => {
      const page = await createPage('/booster-layer/');

      expect(
        await page.evaluate(() => document.getElementById('nuxt-booster-layer'))
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document.getElementById('nuxt-booster-button-init-app').click()
      );
      await page.waitForLoadState('networkidle');

      await waitForSelector(page, '.ready');

      // active font
      await waitForSelector(page, '[data-font].font-active');
    });

    it('BoosterLayer (No Javascript)', async () => {
      const page = await createPage('/booster-layer/', true);

      expect(
        await page.evaluate(() => document.getElementById('nuxt-booster-layer'))
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document.getElementById('nuxt-booster-button-init-nojs').click()
      );

      expect(
        await page.evaluate(
          () => document.getElementById('nuxt-booster-layer-close').checked
        )
      ).toBeFalsy();
    });

    // #endregion /tests/booster-layer

    // #region /tests/weak-hardware-overlay

    it('WeakHardwareOverlay (Visible & Init App)', async () => {
      const page = await createPage('/weak-hardware-overlay/');

      expect(
        await page.evaluate(() =>
          document.querySelector('.nuxt-booster-weak-hardware-overlay')
        )
      ).not.toBeFalsy();

      await page.evaluate(() =>
        document
          .querySelector('.nuxt-booster-weak-hardware-overlay button')
          .click()
      );
      await page.waitForSelector('div.mounted');

      expect(
        await page.evaluate(() =>
          document.querySelector('.nuxt-booster-weak-hardware-overlay')
        )
      ).toBeFalsy();
    });

    // #endregion /tests/weak-hardware-overlay

    // #region /tests/booster-loader

    it('boosterHydrate', async () => {
      const page = await createPage('/booster-loader/');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyBoosterHydrate')
            .classList.contains('.active')
        )
      ).toBeFalsy();
      await waitForSelector(page, '#criticalBoosterHydrate.active');
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(page, '#lazyBoosterHydrate.active');
    });

    // #endregion /tests/booster-loader

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

    it('BoosterIframe', async () => {
      const page = await createPage('/iframe/');
      await page.waitForLoadState('networkidle');
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await waitForSelector(page, '#lazyContainer iframe[src]');
    });

    // #endregion

    // #region /tests/youtube
    it('BoosterYoutube ready, play and autoplay', async () => {
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
        '#youtube-0 .nuxt-booster-youtube.ready.playing'
      );

      // scroll to second player for autoplay
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForLoadState('networkidle');

      await waitForSelector(
        page,
        '#youtube-1 .nuxt-booster-youtube.ready.playing'
      );

      await waitForSelector(page, '#youtube-0 .nuxt-booster-youtube.ready');

      // wait for playing first player playing
      // await waitForSelector(page,
      //   '#youtube-0 .nuxt-booster-youtube.ready:not(.playing)'
      // );
    });

    // #endregion

    // #region /tests/vimeo

    // it('BoosterVimeo ready & play', async () => {
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
    //     await waitForSelector(page, '#vimeo-0 .nuxt-booster-vimeo.ready');
    //   } else {
    //     // start first player
    //     await page.evaluate(() =>
    //       document.querySelector('#vimeo-0 button').click()
    //     );
    //     await page.waitForLoadState('networkidle');

    //     // wait for playing first player playing
    //     await waitForSelector(page,
    //       '#vimeo-0 .nuxt-booster-vimeo.ready.playing'
    //     );

    //     // // wait for playing first player playing
    //     await page.evaluate(scroll, {direction: "down", speed: "slow"});
    //     // // start second player
    //     await page.evaluate(() =>
    //       document.querySelector('#vimeo-1 button').click()
    //     );
    //     await page.waitForLoadState('networkidle');

    //     await waitForSelector(page,
    //       '#vimeo-0 .nuxt-booster-vimeo.ready:not(.playing)'
    //     );
    //     await waitForSelector(page,
    //       '#vimeo-1 .nuxt-booster-vimeo.ready.playing'
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
