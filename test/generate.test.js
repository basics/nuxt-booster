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
    expect(dom.head.innerHTML.indexOf('[data-font="-10e6588e"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimple[data-font="-10e6588e"]')).not.toBeNull();
  });

  it('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-4d3c52af"] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignBySingleSelector[data-font="-4d3c52af"]')).not.toBeNull();
  });

  it('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="--d854631"] strong')).not.toBe(-1);
    expect(dom.head.innerHTML.indexOf('[data-font="--d854631"] em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal')}"]`)).not.toBeNull();
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleVariances[data-font="--d854631"]')).not.toBeNull();
  });

  it('v-font (font assign by multiple selectors) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-24b17869"] em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectors[data-font="-24b17869"]')).not.toBeNull();
  });

  it('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-773bc17a"] strong>em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByDeepSelector[data-font="-773bc17a"]')).not.toBeNull();
  });

  // #endregion

  // #region /tests/v-font-media

  it('v-font (media) (font assign simple by max 479px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-29e4a635"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'italic', '(max-width: 479px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleByMax479[data-font="-29e4a635"]')).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-27c3e1ae"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'normal', '(min-width: 480px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy480[data-font="-27c3e1ae"]')).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="--91b8358"]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic', '(min-width: 960px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy960[data-font="--91b8358"]')).not.toBeNull();
  });

  it('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-42ea1f4e"] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal', '(min-width: 1440px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontBySingleSelectorBy1440[data-font="-42ea1f4e"]')).not.toBeNull();
  });

  // #endregion

  // #region /tests/speedkit-picture

  it('speedkit-picture', async () => {
    html = await getHTML(join(distDir, 'speedkit-picture'));
    dom = getDom(html);

    const criticalSrcset = dom.querySelector('link[data-hid="-619e5c8"][rel="preload"]').getAttribute('imageSrcset');
    expect(dom.querySelector(`link[imageSrcset="${criticalSrcset}"][rel="preload"]`)).not.toBeNull();
    expect(dom.querySelector('link[data-hid="5c967411"][rel="preload"]')).toBeNull();
  });

  // #endregion
});
