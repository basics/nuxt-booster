export default {
  version: [{ version: 3, isDefault: true }, { version: 2 }],

  sidebar: {
    '/v2/': [
      {
        text: 'Home',
        link: '/v2/'
      },
      {
        text: 'Concept',
        link: '/v2/concept'
      },
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Setup', link: '/v2/guide/setup' },
          { text: 'Options', link: '/v2/guide/options' },
          { text: 'Usage', link: '/v2/guide/usage' },
          { text: 'Caveats', link: '/v2/guide/caveats' }
        ]
      },
      {
        text: 'Directives',
        collapsed: true,
        items: [{ text: 'v-font', link: '/v2/directives/v-font' }]
      },
      {
        text: 'Components',
        collapsed: true,
        items: [
          { text: 'BoosterLayer', link: '/v2/components/booster-layer' },
          { text: 'BoosterPicture', link: '/v2/components/booster-picture' },
          { text: 'BoosterImage', link: '/v2/components/booster-image' },
          { text: 'BoosterYoutube', link: '/v2/components/booster-youtube' },
          { text: 'BoosterVimeo', link: '/v2/components/booster-vimeo' },
          { text: 'BoosterIframe', link: '/v2/components/booster-iframe' }
          // {
          //   text: '[PR] WeakHardwareOverlay',
          //   link: '/v2/components/weak-hardware-overlay'
          // }
        ]
      },
      {
        text: 'Classes',
        collapsed: true,
        items: [{ text: 'LoadingSpinner', link: '/v2/classes/loading-spinner' }]
      }
    ],
    '/': {
      items: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'Concept',
          link: '/concept'
        },
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Setup', link: '/guide/setup' },
            { text: 'Options', link: '/guide/options' },
            { text: 'Usage', link: '/guide/usage' },
            { text: 'Caveats', link: '/guide/caveats' }
          ]
        },
        {
          text: 'Composables',
          collapsed: true,
          items: [
            {
              text: 'useBoosterHydrate',
              link: '/composables/useBoosterHydrate'
            },
            { text: 'useBoosterFont', link: '/composables/useBoosterFont' },
            {
              text: 'useBoosterCritical',
              link: '/composables/useBoosterCritical'
            },
            { text: 'useBoosterConfig', link: '/composables/useBoosterConfig' },
            {
              text: 'useBoosterComponentObserver',
              link: '/composables/useBoosterComponentObserver'
            },
            { text: '⚠️ useBoosterHead', link: '/composables/useBoosterHead' }
          ]
        },
        {
          text: 'Directives',
          collapsed: true,
          items: [{ text: 'v-font', link: '/directives/v-font' }]
        },
        {
          text: 'Components',
          collapsed: true,
          items: [
            { text: 'BoosterLayer', link: '/components/booster-layer' },
            { text: 'BoosterPicture', link: '/components/booster-picture' },
            { text: 'BoosterImage', link: '/components/booster-image' },
            { text: 'BoosterYoutube', link: '/components/booster-youtube' },
            { text: 'BoosterVimeo', link: '/components/booster-vimeo' },
            { text: 'BoosterIframe', link: '/components/booster-iframe' },
            {
              text: 'WeakHardwareOverlay',
              link: '/components/weak-hardware-overlay'
            }
          ]
        },
        {
          text: 'Migration',
          collapsed: true,
          items: [
            { text: 'v2.0.x to v2.0.13', link: '/migration/v2-0-13' },
            { text: 'v2.0.13 to v2.2.0', link: '/migration/v2-2-0' },
            { text: 'v2 to v3', link: '/migration/v3' },
            { text: 'v3 to v3.1.0', link: '/migration/v3.1.0' }
          ]
        }
      ]
    }
  }
};
