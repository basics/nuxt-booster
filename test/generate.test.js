/* eslint-disable no-secrets/no-secrets */
import { join, resolve } from 'upath';
import { setupTest } from '@nuxt/test-utils';
import {
  getDom,
  getLinkPreloadHid,
  getHTML
} from './utils';

describe('generate', () => {
  let html, dom;

  const testDir = resolve(__dirname, '.generate');
  const distDir = resolve(testDir, '.nuxt-generate');
  const buildDir = resolve(testDir, '.nuxt');

  setupTest({
    generate: true,
    fixture: '../example',
    config: {
      fullstatic: true,
      modern: false,
      buildDir,
      generate: { dir: distDir, crawler: false },
      dir: {
        pages: 'pages/tests'
      }
    }
  });

  it('v-font (font assign simple) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);
    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-192c3f64"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimple[data-font="-192c3f64"]')).not.toBeNull();
  });

  it('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-646c2866"] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignBySingleSelector[data-font="-646c2866"]')).not.toBeNull();
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
    expect(dom.head.innerHTML.indexOf('[data-font="-10b9db85"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'italic', '(max-width: 479px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleByMax479[data-font="-10b9db85"]')).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-2eb28766"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'normal', '(min-width: 480px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy480[data-font="-2eb28766"]')).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-3297baf7"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 400, 'italic', '(min-width: 960px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy960[data-font="-3297baf7"]')).not.toBeNull();
  });

  it('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="--63445b1"] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Merriweather', 700, 'normal', '(min-width: 1440px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontBySingleSelectorBy1440[data-font="--63445b1"]')).not.toBeNull();
  });

  // #endregion

  // #region /tests/speedkit-picture

  it('speedkit-picture', async () => {
    html = await getHTML(join(distDir, 'speedkit-picture'));
    dom = getDom(html);

    const criticalSrcset = dom.querySelector('link[rel="preload"][imageSrcset]').getAttribute('imageSrcset');
    expect(dom.querySelector(`link[imageSrcset="${criticalSrcset}"][rel="preload"]`)).not.toBeNull();
  });

  // #endregion
});
