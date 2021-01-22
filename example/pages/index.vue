<template>
  <div
    class="page-index"
  >
    <div v-for="({headline, links}, index) in lists" :key="index">
      <headline tag="h1" critical :content="headline" />
      <nav :aria-label="headline">
        <link-list :items="links" critical />
      </nav>
    </div>
    <br>
  </div>
</template>

<script>

import Headline from '@/components/atoms/Headline';
import LinkList from '@/components/molecules/LinkList';

export default {
  components: {
    Headline,
    LinkList
  },
  asyncData () {
    return {

      lists: [
        {
          headline: 'Preview',
          links: [
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
          ]
        },
        {
          headline: 'Critical',
          links: [
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
          ]
        },
        {
          headline: 'Lazy',
          links: [
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
          ]
        },
        {
          headline: 'Both',
          links: [
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
          ]
        },
        {
          headline: 'Experimental',
          links: [
        {
          title: 'Full Example With Components',
          to: '/experimental/full-example-with-components/'
        },
        {
          title: 'SpeedkitYoutube',
          to: '/experimental/speedkit-youtube/'
        },
        {
          title: 'ExperimentalPicture (5 Pictures)',
          to: '/experimental/experimental-picture/5/'
        }
          ]
        }




      ]
    };
  },
  data () {
    return {
      lists: []
    };
  }
};
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
