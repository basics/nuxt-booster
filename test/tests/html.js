import { join } from 'pathe';
import { describe, it, expect } from 'vitest';
import { getDom, getLinkPreloadKey, getHTML } from '../utils.js';

export default distDir => {
  describe('🧐 inspect html', () => {
    markupTests(distDir);
  });
};

function markupTests(distDir) {
  let html, dom;

  // #region /tests/v-font

  it('v-font (font assign simple) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-15b2b0cd"]')).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey('Merriweather', 400, 'normal')}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector('#criticalFontAssignSimple[data-font="-15b2b0cd"]')
    ).not.toBeNull();
  });

  it('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="-2e9abde9"] strong')
    ).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey('Merriweather', 700, 'normal')}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector(
        '#criticalFontAssignBySingleSelector[data-font="-2e9abde9"]'
      )
    ).not.toBeNull();
  });

  it('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="-2a925cfc"] strong')
    ).not.toBe(-1);
    expect(dom.head.innerHTML.indexOf('[data-font="-2a925cfc"] em')).not.toBe(
      -1
    );
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey('Merriweather', 700, 'normal')}"]`
      )
    ).not.toBeNull();
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey('Merriweather', 400, 'italic')}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector(
        '#criticalFontAssignByMultipleVariances[data-font="-2a925cfc"]'
      )
    ).not.toBeNull();
  });

  it('v-font (font assign by multiple selectors) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-7241994b"] em')).not.toBe(
      -1
    );
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey('Merriweather', 400, 'italic')}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector(
        '#criticalFontAssignByMultipleSelectors[data-font="-7241994b"]'
      )
    ).not.toBeNull();
  });

  it('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="--53428d4"] strong > em')
    ).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey('Merriweather', 700, 'italic')}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector(
        '#criticalFontAssignByDeepSelector[data-font="--53428d4"]'
      )
    ).not.toBeNull();
  });

  // #endregion

  // #region /tests/v-font-media

  it('v-font (media) (font assign simple by max 479px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-450f5c14"]')).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey(
          'Merriweather',
          700,
          'italic',
          '(max-width: 479px)'
        )}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector(
        '#criticalFontAssignSimpleByMax479[data-font="-450f5c14"]'
      )
    ).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-12909d4b"]')).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey(
          'Merriweather',
          400,
          'normal',
          '(min-width: 480px)'
        )}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector('#criticalFontAssignSimpleBy480[data-font="-12909d4b"]')
    ).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-137ab098"]')).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey(
          'Merriweather',
          400,
          'italic',
          '(min-width: 960px)'
        )}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector('#criticalFontAssignSimpleBy960[data-font="-137ab098"]')
    ).not.toBeNull();
  });

  it('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="-38d8e85e"] strong')
    ).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey(
          'Merriweather',
          700,
          'normal',
          '(min-width: 1440px)'
        )}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector(
        '#criticalFontBySingleSelectorBy1440[data-font="-38d8e85e"]'
      )
    ).not.toBeNull();
  });

  // #endregion

  // #region /tests/picture

  it('picture', async () => {
    html = await getHTML(join(distDir, 'picture'));
    dom = getDom(html);
    const imageSrcset = dom
      .querySelector('#criticalContainer picture source:first-child')
      .getAttribute('srcset');
    expect(
      dom.querySelector(`link[imageSrcset="${imageSrcset}"][rel="preload"]`)
    ).not.toBeNull();
  });

  // #endregion

  // #region /tests/image

  it('image', async () => {
    html = await getHTML(join(distDir, 'image'));
    dom = getDom(html);
    const imageSrcset = dom
      .querySelector('#criticalContainer img')
      .getAttribute('srcset');
    expect(
      dom.querySelector(`link[imageSrcset="${imageSrcset}"][rel="preload"]`)
    ).not.toBeNull();
  });

  // #endregion
}
