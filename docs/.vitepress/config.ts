import { fileURLToPath } from 'url';
// import type { DefaultTheme, UserConfig } from 'vitepress';
import { defineConfigWithTheme } from 'vitepress';
import markdownItInlineComments from 'markdown-it-inline-comments';
import navigation from './navigation';

// 'UserConfig<Config>

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  markdown: {
    config: md => {
      md.use(markdownItInlineComments);
    }
  },

  base: getBaseUrl(),

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/VPNavBarTitle.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBarMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/VPNavBarMenu.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavScreenMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/VPNavScreenMenu.vue', import.meta.url)
          )
        }
      ]
    }
  },

  srcDir: 'src',

  title: 'Nuxt Booster',
  description:
    'Nuxt Booster takes over the Lighthouse performance optimization of your generated website.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logoComponent: true,

    ...navigation,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/basics/nuxt-booster' }
    ]
  },

  sitemap: {
    hostname: 'https://basics.github.io/nuxt-booster/'
  }
});

function getBaseUrl() {
  return process.env.npm_config_base_url || process.env.BASE_URL || '/';
}
