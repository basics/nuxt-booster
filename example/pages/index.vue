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
  data () {
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
          title: 'Test: LazyPicture',
          to: '/tests/lazy-picture'
        },
        {
          title: 'Test: LazyImage',
          to: '/tests/lazy-image'
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
          title: 'LazyImage',
          to: '/critical/lazy-image'
        },
        {
          title: 'LazyPicture',
          to: '/critical/lazy-picture'
        },
        {
          title: 'LazyIframe',
          to: '/critical/lazy-iframe'
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
          title: 'LazyImage',
          to: '/lazy/lazy-image'
        },
        {
          title: 'LazyPicture',
          to: '/lazy/lazy-picture'
        },
        {
          title: 'LazyIframe',
          to: '/lazy/lazy-iframe'
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
          title: 'LazyImage',
          to: '/both/lazy-image'
        },
        {
          title: 'LazyPicture',
          to: '/both/lazy-picture'
        },
        {
          title: 'LazyIframe',
          to: '/both/lazy-iframe'
        }
      ]
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
