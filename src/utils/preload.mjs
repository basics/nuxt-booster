import { parseDocument } from 'htmlparser2';
import { load } from 'cheerio';
import { render } from 'dom-serializer';
import { isViteBuild } from '../utils.mjs';

export function optimizePreloads(nuxt) {
  if (isViteBuild(nuxt)) {
    nuxt.options.vite.build.manifest = false;
  }

  nuxt.hook('nitro:init', nitro => {
    nitro.hooks.hook('prerender:generate', route => {
      if (!route.fileName?.endsWith('.html') || !route.contents) {
        return;
      }

      const document = parseDocument(route.contents);
      const $ = load(document);

      $('[rel="modulepreload"][as="script"]').remove();
      $('[rel="prefetch"][as="script"]').remove();

      $('[rel="preload"][as="style"]').remove();
      $('[rel="prefetch"][as="style"]').remove();
      $('link[rel="stylesheet"]').remove();

      route.contents = render(document);
    });
  });
}
