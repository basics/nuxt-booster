import { promises as fsPromises } from 'fs';
import { basename, dirname, join } from 'path';
import { parseDocument } from 'htmlparser2';
import { load } from 'cheerio';
import { render } from 'dom-serializer';
import { isViteBuild, logger } from '../utils.mjs';

// eslint-disable-next-line sonarjs/cognitive-complexity
export function optimizePreloads(moduleOptions, nuxt) {
  const disableNuxtCritters = moduleOptions.disableNuxtCritters;

  if (isViteBuild(nuxt)) {
    nuxt.options.vite.build.manifest = false;
    if (disableNuxtCritters) {
      nuxt.options.vite.build.cssCodeSplit = false;
    }
  }

  nuxt.options.experimental.inlineSSRStyles = true;

  nuxt.hook('nitro:init', nitro => {
    nitro.hooks.hook('prerender:generate', async route => {
      if (!route.fileName?.endsWith('.html') || !route.contents) {
        return;
      }

      const document = parseDocument(route.contents);
      const $ = load(document);

      $('[rel="modulepreload"][as="script"]').remove();
      $('[rel="prefetch"][as="script"]').remove();

      $('[rel="preload"][as="style"]').remove();
      $('[rel="prefetch"][as="style"]').remove();

      // embed css files
      try {
        const css = await Promise.all(
          Array.from($('link[rel="stylesheet"]'))
            .map(el => $(el))
            .map(async $el => {
              const dir = dirname($el.attr('href'));

              // https://nuxt.com/docs/guide/directory-structure/output
              const publicDir = join(
                nuxt.options.rootDir,
                '.output/public',
                nuxt.options.vite.build.assetsDir
              );
              const filepath = join(publicDir, basename($el.attr('href')));
              const fileContent = await fsPromises.readFile(filepath, 'utf-8');

              if (disableNuxtCritters) {
                const css = fileContent.replace(/url\(.\//g, `url(${dir}/`);
                $el.remove();
                logger.info(
                  `Embed CSS File \`${basename($el.attr('href'))}\`; Route: \`${
                    route.route
                  }\``
                );
                return css;
              } else {
                const matches = fileContent.match(
                  /\/\*! speedkit-font-faces start \*\/(.*)\/\*! speedkit-font-faces end \*\//
                );
                if (matches) {
                  logger.info(
                    `Embed Font-Faces CSS \`${basename(
                      $el.attr('href')
                    )}\`; Route: \`${route.route}\``
                  );
                  return matches[1].replace(/url\(.\//g, `url(${dir}/`);
                }
              }
            })
        );
        if (css.length) {
          $('head').append(`<style>${css.join('')}</style>`);
        }
      } catch (error) {
        logger.error("can't embed css file.", error);
      }

      route.contents = render(document);
    });
  });
}
