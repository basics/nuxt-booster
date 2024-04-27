import { promises as fsPromises } from 'fs';
import { basename, dirname, join, resolve } from 'pathe';
import { parseDocument } from 'htmlparser2';
import { load } from 'cheerio';
import { render } from 'dom-serializer';
import { isWebpackBuild, logger } from '../../utils';

export default (nuxt, options = { manifest: [] }) =>
  nitro => {
    nitro.hooks.hook('prerender:generate', async route => {
      const { manifest } = options;

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

      $('[rel="modulepreload"][as="script"]').remove();
      $('[rel="prefetch"][as="script"]').remove();

      $('[rel="preload"][as="fetch"]').remove();
      $('[rel="preload"][as="style"]').remove();
      $('[rel="prefetch"][as="style"]').remove();

      // embed css files
      await prepareLinkStylesheets($, { distNuxt, route });

      route.contents = render(document);
    });
  };

function getUrlValues(css) {
  return css.match(/url\(([^)]+)\)/g);
}

function prepareUrls(urls, relativeDir) {
  return urls
    .map(url => {
      const value = url
        .trim()
        .replace(/^url\((.*)\)$/, '$1')
        .trim();
      if (isURL(value) || isDataURI(value)) {
        return null;
      }
      return [url, `url(${resolve(relativeDir, value)})`];
    })
    .filter(Boolean);
}

function isURL(value) {
  return value.startsWith('http') || value.startsWith('//');
}
function isDataURI(value) {
  return value.startsWith('data:');
}

async function prepareLinkStylesheets($, { distNuxt, route }) {
  try {
    const css = await Promise.all(
      Array.from($('link[rel="stylesheet"]'))
        .map(el => $(el))
        .filter($el => !isURL($el.attr('href')))
        .map(async $el => {
          const dir = dirname($el.attr('href'));
          const filepath = join(distNuxt, basename($el.attr('href')));

          const fileContent = await fsPromises.readFile(filepath, 'utf-8');

          let urls = getUrlValues(fileContent);
          urls = prepareUrls(urls, dir);

          const css = urls.reduce(
            (result, [a, b]) => result.replace(a, b),
            fileContent
          );

          $el.remove();
          logger.info(
            `Embed CSS File \`${basename($el.attr('href'))}\`; Route: \`${
              route.route
            }\``
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

function getCSSFilesFromManifest($, manifest) {
  const scripts = Array.from($('script[type="module"]'));
  return scripts
    .map(el => {
      return (
        manifest[String(`_${basename($(el).attr('src'))}`)]?.dynamicImports ||
        []
      );
    })
    .flat()
    .filter(file => file.endsWith('.css'))
    .map(file => `${basename(file)}`);
}

async function addedInlinedCSS($, files, { distNuxt, route }) {
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
