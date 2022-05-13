/* eslint-disable no-secrets/no-secrets */
import { join, resolve } from 'path';
import { Nuxt, Builder, Generator } from 'nuxt';
import { defu } from 'defu';
import { getPort } from 'get-port-please';
import { beforeAll, afterAll, describe, it, expect } from 'vitest';
import { chromium, firefox } from 'playwright';
import { joinURL } from 'ufo';
import nuxtConfig from '../example/nuxt.config';
import {
  startStaticServer,
  getDom,
  getLinkPreloadHid,
  getHTML
} from './utils';

const BROWSERS = { CHROMIUM: 0, FIREFOX: 1 };

const browsers = new Map([
  [BROWSERS.CHROMIUM, chromium.launch()],
  [BROWSERS.FIREFOX, firefox.launch()]
]);

const generate = async (buildDir, distDir) => {
  const config = defu({
    target: 'static',
    modern: true,
    buildDir,
    env: {
      DISABLE_INFO_LAYER: true
    },
    generate: { cache: false, dir: distDir, crawler: false },
    dir: {
      pages: 'pages/tests'
    }
  }, nuxtConfig);
  const nuxt = new Nuxt(config);
  nuxt.server.listen(await getPort({ random: true }));
  await nuxt.ready();

  const builder = new Builder(nuxt);
  await new Generator(nuxt, builder).generate({ build: true, init: true });
  await nuxt.close();
};

const runtime = { serverUrl: null };

const testDir = resolve(__dirname, '.test');
const distDir = resolve(testDir, 'dist');
const buildDir = join(testDir, '.nuxt');

beforeAll(async () => {
  await generate(buildDir, distDir);
  runtime.serverUrl = (await startStaticServer(distDir)).url;
});

afterAll(async () => {
  await Promise.all(Array.from(browsers.values()).map(async browser => (await browser).close()));
});

describe('🧐 inspect browser (chromium)', () => {
  browserTests({ browser: BROWSERS.CHROMIUM, runtime });
});

describe('🧐 inspect browser (firefox)', () => {
  browserTests({ browser: BROWSERS.FIREFOX, runtime });
});

describe('🧐 inspect html', () => {
  markupTests();
});

function browserTests ({ browser = false, runtime }) {
  const createPage = async (path) => {
    const page = await (await browsers.get(browser)).newPage();
    await page.goto(joinURL(runtime.serverUrl, path));
    return page;
  };

  // #region /tests/loader

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

  // #endregion /tests/loader

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
}

function markupTests () {
  let html, dom;

  it('v-font (font assign simple) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-12e8e649"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimple[data-font="-12e8e649"]')).not.toBeNull();
  });

  it('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-3e34aeed"] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignBySingleSelector[data-font="-3e34aeed"]')).not.toBeNull();
  });

  it('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-2842d182"] strong')).not.toBe(-1);
    expect(dom.head.innerHTML.indexOf('[data-font="-2842d182"] em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'normal')}"]`)).not.toBeNull();
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleVariances[data-font="-2842d182"]')).not.toBeNull();
  });

  it('v-font (font assign by multiple selectors) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-2a653439"] em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectors[data-font="-2a653439"]')).not.toBeNull();
  });

  it('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-28fdf168"] strong>em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByDeepSelector[data-font="-28fdf168"]')).not.toBeNull();
  });

  // #endregion

  // #region /tests/v-font-media

  it('v-font (media) (font assign simple by max 479px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-43dfacd8"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'italic', '(max-width: 479px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleByMax479[data-font="-43dfacd8"]')).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-61d858b9"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'normal', '(min-width: 480px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy480[data-font="-61d858b9"]')).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="---8e165c"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'italic', '(min-width: 960px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy960[data-font="---8e165c"]')).not.toBeNull();
  });

  it('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-28c088a2"] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'normal', '(min-width: 1440px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontBySingleSelectorBy1440[data-font="-28c088a2"]')).not.toBeNull();
  });

  // #endregion

  // #region /tests/picture

  it('picture', async () => {
    html = await getHTML(join(distDir, 'picture'));
    dom = getDom(html);
    const imageSrcset = dom.querySelector('#criticalContainer picture source:first-child').getAttribute('imageSrcset');
    expect(dom.querySelector(`link[imageSrcset="${imageSrcset}"][rel="preload"]`)).not.toBeNull();
  });

  // #endregion

  // #region /tests/image

  it('image', async () => {
    html = await getHTML(join(distDir, 'picture'));
    dom = getDom(html);
    const imageSrcset = dom.querySelector('#criticalContainer img').getAttribute('srcset');
    expect(dom.querySelector(`link[imageSrcset="${imageSrcset}"][rel="preload"]`)).not.toBeNull();
  });

  // #endregion
}
