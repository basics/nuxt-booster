import { promises as fsPromises } from 'fs';
import { basename, dirname, join, resolve } from 'pathe';
import { parseDocument } from 'htmlparser2';
import { load } from 'cheerio';
import { render } from 'dom-serializer';
import { isWebpackBuild, logger } from '../../utils';
import type { Nuxt } from 'nuxt/schema';
import type { CheerioAPI } from 'cheerio';
import type { HookOptions } from '../../module';
import type { Nitro, PrerenderRoute } from 'nitropack';

function getDefaultOptions(): HookOptions {
  return {
    manifest: undefined,
    cleanPreloads: true,
    cleanPrefetches: true,
    inlineStyles: true
  };
}
export default (nuxt: Nuxt, options: HookOptions = getDefaultOptions()) =>
  (nitro: Nitro) => {
    nitro.hooks.hook('prerender:generate', async (route: PrerenderRoute) => {
      const {
        manifest,
        cleanPreloads,
        cleanPrefetches,
        inlineStyles
      }: HookOptions = {
        ...getDefaultOptions(),
        ...options
      };

      if (!route.fileName?.endsWith('.html') || !route.contents) {
        return;
      }

      // https://nuxt.com/docs/guide/directory-structure/output
      const distNuxt = join(
        nuxt.options.buildDir,
        'dist/client',
        nuxt.options.app.buildAssetsDir
      );

      const document = parseDocument(route.contents);
      const $ = load(document);

      // webpack workaround inline css in ssr
      if (isWebpackBuild(nuxt)) {
        await addedInlinedCSS($, getCSSFilesFromManifest($, manifest), {
          distNuxt,
          route
        });
      }

      if (cleanPreloads) {
        $('[rel="modulepreload"][as="script"]').remove();
        $('[rel="preload"][as="fetch"]').remove();
        $('[rel="preload"][as="style"]').remove();
      }

      if (cleanPrefetches) {
        $('[rel="prefetch"][as="script"]').remove();
        $('[rel="prefetch"][as="style"]').remove();
      }

      if (inlineStyles) {
        // embed css files
        await prepareLinkStylesheets($, { distNuxt, route });
      }

      route.contents = render(document, { decodeEntities: false });
    });
  };

function getUrlValues(css: string) {
  return Array.from(css.match(/url\(([^)]+)\)/g) || []);
}

function prepareUrls(urls: string[], relativeDir: string) {
  return urls
    .map(url => {
      let value = url
        .trim()
        .replace(/^url\((.*)\)$/, '$1')
        .trim();

      // remove ticks
      if (value.startsWith("'") || value.startsWith('"')) {
        value = value.slice(1, -1);
      }

      if (isURL(value) || isDataURI(value)) {
        return null;
      }
      return [url, `url(${resolve(relativeDir, value)})`];
    })
    .filter(Boolean) as string[][];
}

function isURL(value: string) {
  return value.startsWith('http') || value.startsWith('//');
}
function isDataURI(value: string) {
  return value.startsWith('data:');
}

async function prepareLinkStylesheets(
  $: CheerioAPI,
  { distNuxt, route }: { distNuxt: string; route: PrerenderRoute }
) {
  try {
    const css = await Promise.all(
      Array.from($('link[rel="stylesheet"]'))
        .map(el => $(el))
        .filter($el => !isURL($el.attr('href') || ''))
        .map(async $el => {
          const href = $el.attr('href') || '';
          const dir = dirname(href);
          const filepath = join(distNuxt, basename(href));

          const fileContent = await fsPromises.readFile(filepath, 'utf-8');

          const urls = getUrlValues(fileContent);
          const preparedUrls = prepareUrls(urls, dir);

          const css = preparedUrls.reduce(
            (result, [a, b]) => result.replace(a, b),
            fileContent
          );

          $el.remove();
          logger.info(
            `Embed CSS File \`${basename(href)}\`; Route: \`${route.route}\``
          );
          return css;
        })
    );
    if (css.length) {
      $('head').append(`<style>${css.join('')}</style>`);
    }
  } catch (error) {
    logger.error("can't embed css file.", error);
  }
}

function getCSSFilesFromManifest(
  $: CheerioAPI,
  manifest: HookOptions['manifest'] | undefined
) {
  const scripts = Array.from($('script[type="module"]'));
  return scripts
    .map(el => {
      if (manifest) {
        return (
          manifest[String(`_${basename($(el).attr('src') as string)}`)]
            ?.dynamicImports || []
        );
      } else {
        return [];
      }
    })
    .flat()
    .filter(file => file.endsWith('.css'))
    .map(file => `${basename(file)}`);
}

async function addedInlinedCSS(
  $: CheerioAPI,
  files: string[],
  { distNuxt, route }: { distNuxt: string; route: PrerenderRoute }
) {
  const css = await Promise.all(
    files.map(async filename => {
      const css = await fsPromises.readFile(
        join(distNuxt, 'css', filename),
        'utf-8'
      );
      logger.info(
        `Embed CSS File \`${basename(filename)}\`; Route: \`${route.route}\``
      );
      return css;
    })
  );
  if (css.length) {
    $('head').append(`<style>${css.join('')}</style>`);
  }
}
