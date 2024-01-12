export default {
  version: [{ version: 3, isDefault: true }, { version: 2 }, { version: 1 }],

  sidebar: {
    '/v1/': [
      {
        text: 'Home',
        link: '/v1/'
      },
      {
        text: 'Concept',
        link: '/v1/concept'
      },
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Setup', link: '/v1/guide/setup' },
          { text: 'Options', link: '/v1/guide/options' },
          { text: 'Usage', link: '/v1/guide/usage' }
        ]
      },
      {
        text: 'Directives',
        collapsed: true,
        items: [{ text: 'v-font', link: '/v1/directives/v-font' }]
      },
      {
        text: 'Components',
        collapsed: true,
        items: [
          {
            text: 'Experimental',
            items: [
              {
                text: 'SpeedkitPicture',
                link: '/v1/components/experimental/speedkit-picture'
              },
              {
                text: 'SpeedkitYoutube',
                link: '/v1/components/experimental/speedkit-youtube'
              }
            ]
          },
          { text: 'SpeedkitPicture', link: '/v1/components/speedkit-picture' },
          { text: 'SpeedkitYoutube', link: '/v1/components/speedkit-youtube' },
          { text: 'SpeedkitLayer', link: '/v1/components/speedkit-layer' },
          { text: 'SpeedkitPicture', link: '/v1/components/speedkit-picture' },
          { text: 'SpeedkitYoutube', link: '/v1/components/speedkit-youtube' },
          { text: 'SpeedkitIframe', link: '/v1/components/speedkit-iframe' }
          // {
          //   text: '[PR] WeakHardwareOverlay',
          //   link: '/v1/components/weak-hardware-overlay'
          // }
        ]
      }
    ],
    '/v2/': [
      {
        text: 'Home',
        link: '/v2'
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
          { text: 'SpeedkitLayer', link: '/v2/components/speedkit-layer' },
          { text: 'SpeedkitPicture', link: '/v2/components/speedkit-picture' },
          { text: 'SpeedkitImage', link: '/v2/components/speedkit-image' },
          { text: 'SpeedkitYoutube', link: '/v2/components/speedkit-youtube' },
          { text: 'SpeedkitVimeo', link: '/v2/components/speedkit-vimeo' },
          { text: 'SpeedkitIframe', link: '/v2/components/speedkit-iframe' }
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
            { text: 'useBoosterFont', link: '/composables/useBoosterFont' },
            { text: 'useBoosterCritical', link: '/composables/useBoosterCritical' },
            { text: 'useBoosterConfig', link: '/composables/useBoosterConfig' },
            {
              text: 'useBoosterComponentObserver',
              link: '/composables/useBoosterComponentObserver'
            }
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
            { text: 'v1 to v2', link: '/migration/v2' },
            { text: 'v2.0.x to v2.0.13', link: '/migration/v2-0-13' },
            { text: 'v2.0.13 to v2.2.0', link: '/migration/v2-2-0' },
            { text: 'v2 to v3', link: '/migration/v3' }
          ]
        }
      ]
    }
  }
};
