import { basename, resolve } from 'pathe';
import { useLogger, addTemplate, defineNuxtModule } from '@nuxt/kit';

/**
 * Generated file must be specified as `config` in the eslint config.
 *
 * File: eslint.config.js
 * import eslintGlobals from './.nuxt/.eslint.globals.mjs';
 */

export default defineNuxtModule({
  defaults: {
    filename: '.eslint.globals.mjs',
    global: [
      '$fetch',
      'useCloneDeep',
      'defineNuxtConfig',
      'definePageMeta',
      'defineI18nConfig'
    ],
    files: ['**/*.js', '**/*.vue']
  },
  setup(moduleOptions, nuxt) {
    const logger = useLogger('eslint-auto-import');

    const autoImports = {
      global: moduleOptions.global
    };

    nuxt.hook('imports:context', async context => {
      const imports = await context.getImports();
      imports.forEach(autoImport => {
        const list = autoImports[autoImport.from] || [];
        const name = autoImport.as
          ? autoImport.as?.toString()
          : autoImport.name.toString();
        autoImports[autoImport.from] = list.concat([name]);
      });
    });

    nuxt.hook('imports:extend', composableImport => {
      autoImports.composables = composableImport.map(autoImport => {
        if (autoImport.as) return autoImport?.as?.toString();
        return autoImport.name.toString();
      });
    });

    nuxt.hook('modules:done', () => {
      const filename = moduleOptions.filename;
      const outDir = basename(nuxt.options.buildDir);
      const fullPath = resolve(outDir, filename);

      const getContents = () => {
        const variables = [];
        for (const autoImport in autoImports) {
          autoImports[String(autoImport)].forEach(imp => {
            variables.push([imp, 'readonly']);
          });
        }
        return (
          'export default ' +
          JSON.stringify(
            {
              languageOptions: {
                globals: Object.fromEntries(variables)
              },
              files: moduleOptions.files
            },
            null,
            2
          )
        );
      };

      addTemplate({
        filename,
        getContents,
        write: true
      });

      logger.info(`Generate eslint global imports at \`${fullPath}\``);
    });
  }
});
