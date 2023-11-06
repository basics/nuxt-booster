import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({


  srcDir: 'src',

  title: "Nuxt Speedkit",
  description: "Nuxt Speedkit takes over the Lighthouse performance optimization of your generated website.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Home',
        link: '/',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      },
      {
        text: 'Concept',
        link: '/concept'
      },
      {
        text: 'Guide',
        items: [
          {text: 'Setup', link: '/guide/setup'},
          {text: 'Options', link: '/guide/options'},
          {text: 'Usage', link: '/guide/usage'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://nuxt-speedkit.grabarzundpartner.dev/' }
    ]
  }
})
