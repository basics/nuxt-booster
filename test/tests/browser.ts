import { chromium, type Page } from 'playwright';
import { afterAll, describe, it, expect } from 'vitest';
import { joinURL } from 'ufo';
import type { TestRuntime } from '../types';

const chromeBrowser = chromium.launch();

export default (runtime: TestRuntime) => {
  afterAll(async () => {
    await (await chromeBrowser).close();
  });

  describe('🧐 inspect browser (chromium)', () => {
    browserTests(runtime);
  });

  function browserTests(runtime: TestRuntime) {
    const createPage = async (path: string, nojs = false) => {
      const browser = await chromeBrowser;
      let context = await browser.newContext();
      if (nojs) {
        context = await browser.newContext({
          javaScriptEnabled: false
        });
      }
      const page = await context.newPage();
      await page.goto(
        runtime.serverUrl ? joinURL(runtime.serverUrl, path) : path
      );
      return page;
    };

    // #region /tests/useBoosterHead

    it('Transition (Page Change)', async () => {
      const page = await createPage('/useBoosterHead/');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-2fb56a9c"] { font-family: "Montserrat Alternates fallback",sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-2fb56a9c"] { font-family: "Montserrat Alternates", sans-serif; }'
          )
        )
      ).not.toBe(-1);

      await page.waitForSelector('[data-font="-6c6f9ad7"].font-active');

      await page.waitForTimeout(2000);
      await page.getByText('Click here').click();

      await page.waitForSelector('[data-font="-60eac43b"].font-active');
      await page.waitForLoadState('networkidle');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-60eac43b"] { font-family: "Merriweather fallback",Georgia, sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-60eac43b"] { font-family: "Merriweather", Georgia, sans-serif; }'
          )
        )
      ).not.toBe(-1);

      // Go two pages to clean Head.
      await page.getByText('Empty 1').click();
      await page.waitForSelector('.empty-1.ready');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-60eac43b"] { font-family: "Merriweather fallback",Georgia, sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-60eac43b"] { font-family: "Merriweather", Georgia, sans-serif; }'
          )
        )
      ).not.toBe(-1);

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-2fb56a9c"] { font-family: "Montserrat Alternates fallback",sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-2fb56a9c"] { font-family: "Montserrat Alternates", sans-serif; }'
          )
        )
      ).not.toBe(-1);

      await page.getByText('Empty 2').click();
      await page.waitForSelector('.empty-2.ready');

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-60eac43b"] { font-family: "Merriweather fallback",Georgia, sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-60eac43b"] { font-family: "Merriweather", Georgia, sans-serif; }'
          )
        )
      ).toBe(-1);

      expect(
        await page.evaluate(() =>
          document.head.innerHTML.indexOf(
            '[data-font="-2fb56a9c"] { font-family: "Montserrat Alternates fallback",sans-serif; font-weight: 400; font-style: normal; } .font-active[data-font="-2fb56a9c"] { font-family: "Montserrat Alternates", sans-serif; }'
          )
        )
      ).toBe(-1);
    });

    // #endregion

    // #region /tests/booster-layer

    it('BoosterLayer (Apply without scripts)', async () => {
      const page = await createPage('/booster-layer/', false);

      expect(
        await page.evaluate(() => document.getElementById('nuxt-booster-layer'))
      ).not.toBeFalsy();

      await page.evaluate(() =>
        (
          document.querySelector(
            '.nuxt-booster-button-init-reduced-view'
          ) as HTMLElement
        )?.click()
      );
      await page.waitForLoadState('networkidle');

      await waitForSelector(page, 'html.nuxt-booster-reduced-view');

      // // picture transformed
      await waitForSelector(page, '.nuxt-booster-picture');

      // // active font
      await waitForSelector(page, '[data-font].font-active');
    });

    it('BoosterLayer (Apply with scripts)', async () => {
      const page = await createPage('/booster-layer/', false);

      expect(
        await page.evaluate(() => document.getElementById('nuxt-booster-layer'))
      ).not.toBeFalsy();

      await page.evaluate(() =>
        (
          document.querySelector('.nuxt-booster-button-init-app') as HTMLElement
        )?.click()
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
        (
          document.querySelector(
            '.nuxt-booster-button-init-nojs'
          ) as HTMLElement
        ).click()
      );

      expect(
        await page.evaluate(
          () =>
            (
              document.getElementById(
                'nuxt-booster-layer-close'
              ) as HTMLInputElement
            )?.checked
        )
      ).toBeFalsy();
    });

    // #endregion /tests/booster-layer

    // #region /tests/weak-hardware-overlay

    it('WeakHardwareOverlay (Visible & Init App)', async () => {
      const page = await createPage('/weak-hardware-overlay/', false);

      expect(
        await page.evaluate(() =>
          document.querySelector('.nuxt-booster-weak-hardware-overlay')
        )
      ).not.toBeFalsy();

      await page.evaluate(() =>
        (
          document.querySelector(
            '.nuxt-booster-weak-hardware-overlay button'
          ) as HTMLButtonElement
        ).click()
      );
      await page.waitForSelector('div.mounted');

      expect(
        await page.evaluate(() =>
          document.querySelector('.nuxt-booster-weak-hardware-overlay')
        )
      ).toBeFalsy();
    });

    // #endregion /tests/weak-hardware-overlay

    // #region /tests/booster-hydrate

    it('boosterHydrate', async () => {
      const page = await createPage('/booster-hydrate/', false);

      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyBoosterHydrate')
            ?.classList.contains('.active')
        )
      ).toBeFalsy();

      await waitForSelector(page, '#criticalBoosterHydrate.active');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await waitForSelector(page, '#customBoosterHydrate.active');

      await page.setViewportSize({
        width: 400,
        height: 800
      });

      await waitForSelector(page, '#mediaBoosterHydrate.active');
    });

    // #endregion /tests/booster-hydrate

    // #region /tests/v-font

    it('v-font (font assign simple) (element class)', async () => {
      const page = await createPage('/v-font/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyFontAssignSimple[data-font="-2fb56a9c"]')
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimple.font-active[data-font="-2fb56a9c"]'
      );
    });

    it('v-font (font assign by single selector) (element class)', async () => {
      const page = await createPage('/v-font/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignBySingleSelector[data-font="-794537fd"]'
            )
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignBySingleSelector.font-active[data-font="-794537fd"]'
      );
    });

    it('v-font (font assign by multiple variances) (element class)', async () => {
      const page = await createPage('/v-font/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignByMultipleVariances[data-font="-46d97114"]'
            )
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignByMultipleVariances.font-active[data-font="-46d97114"]'
      );
    });

    it('v-font (font assign by multiple selectors) (element class)', async () => {
      const page = await createPage('/v-font/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignByMultipleSelectors[data-font="-21b06e70"]'
            )
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignByMultipleSelectors.font-active[data-font="-21b06e70"]'
      );
    });

    it('v-font (font assign by deep selector) (element class)', async () => {
      const page = await createPage('/v-font/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignByDeepSelector[data-font="-3581ca77"]'
            )
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignByDeepSelector.font-active[data-font="-3581ca77"]'
      );
    });

    // #endregion

    // #region /tests/v-font-media

    it('v-font (media) (font assign simple by max 479px) (element class)', async () => {
      const page = await createPage('/v-font-media', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontAssignSimpleByMax479[data-font="--8e6ef60"]'
            )
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimpleByMax479.font-active[data-font="--8e6ef60"]'
      );
    });

    it('v-font (media) (font assign simple by 480px) (element class)', async () => {
      const page = await createPage('/v-font-media/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyFontAssignSimpleBy480[data-font="-50ba1a90"]')
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimpleBy480.font-active[data-font="-50ba1a90"]'
      );
    });

    it('v-font (media) (font assign simple by 960px) (element class)', async () => {
      const page = await createPage('/v-font-media/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#lazyFontAssignSimpleBy960[data-font="-20322b8b"]')
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontAssignSimpleBy960.font-active[data-font="-20322b8b"]'
      );
    });

    it('v-font (media) (font assign with selector by 1440px) (element class)', async () => {
      const page = await createPage('/v-font-media/', false);
      await page.waitForLoadState('networkidle');
      // element has no font class?
      expect(
        await page.evaluate(() =>
          document
            .querySelector(
              '#lazyFontBySingleSelectorBy1440[data-font="--c4b5e14"]'
            )
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();
      // scroll to element
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // element has font class?
      await waitForSelector(
        page,
        '#lazyFontBySingleSelectorBy1440.font-active[data-font="--c4b5e14"]'
      );
    });

    // #endregion

    // #region /tests/v-font-scroll

    it('v-font (scroll) (font assign simple with horizontal & vertical offset scroll)', async () => {
      const page = await createPage('/v-font-scroll', false);
      await page.waitForLoadState('networkidle');
      expect(
        await page.evaluate(() =>
          document
            .querySelector('#horizontalScroll .item-5')
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();

      await page.evaluate(() => {
        const containerEl = document.querySelector('#horizontalScroll');
        containerEl?.scrollTo(containerEl.scrollWidth, 0);
      });

      await waitForSelector(page, '#horizontalScroll .item-5.font-active');

      expect(
        await page.evaluate(() =>
          document
            .querySelector('#verticalScroll .item-5')
            ?.classList.contains('.font-active')
        )
      ).toBeFalsy();

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.evaluate(() => {
        const containerEl = document.querySelector('#verticalScroll');
        containerEl?.scrollTo(0, containerEl.scrollHeight);
      });

      await waitForSelector(page, '#verticalScroll .item-5.font-active');
    });

    // #endregion

    // #region /tests/iframe

    // it('BoosterIframe', async () => {
    //   const page = await createPage('/iframe/', false);
    //   await page.waitForLoadState('networkidle');
    //   await page.evaluate(() => {
    //     window.scrollTo(0, document.body.scrollHeight);
    //   });
    //   await waitForSelector(page, '#lazyContainer iframe[src]');
    // });

    // // #endregion

    // #region /tests/youtube

    // it('BoosterYoutube ready, play and autoplay', async () => {
    //   const page = await createPage('/youtube/');
    //   await page.waitForLoadState('networkidle');

    //   // start first player
    //   await page.evaluate(() =>
    //     document.querySelector('#youtube-0 button').click()
    //   );
    //   await page.waitForLoadState('networkidle');

    //   // wait for playing first player playing
    //   await waitForSelector(
    //     page,
    //     '#youtube-0 .nuxt-booster-youtube.ready.playing'
    //   );

    //   // scroll to second player for autoplay
    //   await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    //   await page.waitForLoadState('networkidle');

    //   await waitForSelector(
    //     page,
    //     '#youtube-1 .nuxt-booster-youtube.ready.playing'
    //   );

    //   await waitForSelector(page, '#youtube-0 .nuxt-booster-youtube.ready');
    // });

    // #endregion
  }
};

function waitForSelector(page: Page, selector: string) {
  const locator = page.locator(selector);
  return locator.waitFor({
    state: 'attached'
  });
}
