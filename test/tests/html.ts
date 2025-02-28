import { join } from 'pathe';
import { describe, it, expect } from 'vitest';
import { getDom, getLinkPreloadKey, getHTML } from '../utils.js';

export default (distDir: string) => {
  describe('🧐 inspect html', () => {
    markupTests(distDir);
  });
};

function markupTests(distDir: string) {
  let html, dom;

  // #region /tests/v-font

  it('v-font (font assign simple) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-60eac43b"]')).not.toBe(-1);
    // font link preload exists?
    expect(
      dom.head.querySelector(
        `link[data-key="${getLinkPreloadKey('Merriweather', 400, 'normal')}"]`
      )
    ).not.toBeNull();
    // element has data attribute?
    expect(
      dom.querySelector('#criticalFontAssignSimple[data-font="-60eac43b"]')
    ).not.toBeNull();
  });

  it('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="-65a35e05"] strong')
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
        '#criticalFontAssignBySingleSelector[data-font="-65a35e05"]'
      )
    ).not.toBeNull();
  });

  it('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="-2b27139c"] strong')
    ).not.toBe(-1);
    expect(dom.head.innerHTML.indexOf('[data-font="-2b27139c"] em')).not.toBe(
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
        '#criticalFontAssignByMultipleVariances[data-font="-2b27139c"]'
      )
    ).not.toBeNull();
  });

  it('v-font (font assign by multiple selectors) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-27203bd0"] em')).not.toBe(
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
        '#criticalFontAssignByMultipleSelectors[data-font="-27203bd0"]'
      )
    ).not.toBeNull();
  });

  it('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="-51d8e6af"] strong > em')
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
        '#criticalFontAssignByDeepSelector[data-font="-51d8e6af"]'
      )
    ).not.toBeNull();
  });

  // #endregion

  // #region /tests/v-font-media

  it('v-font (media) (font assign simple by max 479px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-5582e803"]')).not.toBe(-1);
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
        '#criticalFontAssignSimpleByMax479[data-font="-5582e803"]'
      )
    ).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-737b93e4"]')).not.toBe(-1);
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
      dom.querySelector('#criticalFontAssignSimpleBy480[data-font="-737b93e4"]')
    ).not.toBeNull();
  });

  it('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-font="-12315187"]')).not.toBe(-1);
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
      dom.querySelector('#criticalFontAssignSimpleBy960[data-font="-12315187"]')
    ).not.toBeNull();
  });

  it('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML(join(distDir, 'v-font-media'));
    dom = getDom(html);

    // font class exists?
    expect(
      dom.head.innerHTML.indexOf('[data-font="-6b889733"] strong')
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
        '#criticalFontBySingleSelectorBy1440[data-font="-6b889733"]'
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
      ?.getAttribute('srcset');
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
      ?.getAttribute('srcset');
    expect(
      dom.querySelector(`link[imageSrcset="${imageSrcset}"][rel="preload"]`)
    ).not.toBeNull();
  });

  // #endregion
}
