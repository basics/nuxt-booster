<template>
  <div
    class="page-index"
  >
    <headline tag="h1" critical>
      Preview
    </headline>
    <nav>
      <link-list :items="links" critical />
    </nav>
    <headline tag="h2" critical>
      Critical
    </headline>
    <nav>
      <link-list :items="criticalLinks" critical />
    </nav>
    <headline tag="h2" critical>
      Lazy
    </headline>
    <nav>
      <link-list :items="lazyLinks" critical />
    </nav>
    <headline tag="h2" critical>
      Both
    </headline>
    <nav>
      <link-list :items="bothLinks" critical />
    </nav>
    <headline tag="h2" critical>
      Experimental
    </headline>
    <nav>
      <link-list :items="experimentalLinks" critical />
    </nav>
    <br>
  </div>
</template>

<script>

import Headline from '@/components/atoms/Headline'
import LinkList from '@/components/molecules/LinkList'

export default {
  components: {
    Headline,
    LinkList
  },
  asyncData () {
    return {
      links: [
        {
          title: 'Picture',
          to: '/picture/'
        },
        {
          title: 'Full Example With Components',
          to: '/full-example-with-components/'
        },
        {
          title: 'Full Example Without Components',
          to: '/full-example-without-components'
        },
        {
          title: 'Max Fonts',
          to: '/max-fonts'
        },
        {
          title: 'Test: v-font',
          to: '/tests/v-font'
        },
        {
          title: 'Test: v-font (media)',
          to: '/tests/v-font-media'
        },
        {
          title: 'Test: SpeedkitPicture',
          to: '/tests/speedkit-picture'
        },
        {
          title: 'Test: SpeedkitImage',
          to: '/tests/speedkit-image'
        },
        {
          title: 'Test: SpeedkitIframe',
          to: '/tests/speedkit-iframe'
        },
        {
          title: 'Test: Speedkit Function',
          to: '/tests/speedkit-function'
        },
        {
          title: 'Test: Component Import (Critical by Prop)',
          to: '/tests/component-import/critical-prop'
        },
        {
          title: 'Test: Component Import (Critical by Parent)',
          to: '/tests/component-import/critical-parent'
        }
      ],
      criticalLinks: [
        {
          title: 'Font basic usage',
          to: '/critical/font-basic'
        },
        {
          title: 'Font extended usage',
          to: '/critical/font-extended'
        },
        {
          title: 'SpeedkitImage',
          to: '/critical/speedkit-image'
        },
        {
          title: 'SpeedkitPicture',
          to: '/critical/speedkit-picture'
        },
        {
          title: 'SpeedkitIframe',
          to: '/critical/speedkit-iframe'
        }
      ],
      lazyLinks: [
        {
          title: 'Font basic usage',
          to: '/lazy/font-basic'
        },
        {
          title: 'Font extended usage',
          to: '/lazy/font-extended'
        },
        {
          title: 'SpeedkitImage',
          to: '/lazy/speedkit-image'
        },
        {
          title: 'SpeedkitPicture',
          to: '/lazy/speedkit-picture'
        },
        {
          title: 'SpeedkitIframe',
          to: '/lazy/speedkit-iframe'
        }
      ],
      bothLinks: [
        {
          title: 'Font basic usage',
          to: '/both/font-basic'
        },
        {
          title: 'Font extended usage',
          to: '/both/font-extended'
        },
        {
          title: 'SpeedkitImage',
          to: '/both/speedkit-image'
        },
        {
          title: 'SpeedkitPicture',
          to: '/both/speedkit-picture'
        },
        {
          title: 'SpeedkitIframe',
          to: '/both/speedkit-iframe'
        }
      ],
      experimentalLinks: [
        {
          title: 'SpeedkitYoutube',
          to: '/experimental/speedkit-youtube'
        },
        {
          title: 'ExperimentalPicture',
          to: '/experimental/experimental-picture'
        }]
    }
  },
  data () {
    return {
      links: []
    }
  }
}
</script>

<style lang="postcss">
.page-index {
  & h1,
  & h2 {
    text-align: center;
  }

  & nav {
    text-align: center;
  }
}

</style>
