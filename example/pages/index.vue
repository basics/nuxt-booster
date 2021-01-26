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
              title: 'Max Fonts',
              to: '/max-fonts'
            }
          ]
        },
        {
          headline: 'Test',
          links: [
            {
              title: 'v-font',
              to: '/tests/v-font'
            },
            {
              title: 'v-font (media)',
              to: '/tests/v-font-media'
            },
            {
              title: 'SpeedkitPicture',
              to: '/tests/speedkit-picture'
            },
            {
              title: 'SpeedkitIframe',
              to: '/tests/speedkit-iframe'
            },
            {
              title: 'Component Import (Critical by Prop)',
              to: '/tests/component-import/critical-prop'
            },
            {
              title: 'Component Import (Critical by Parent)',
              to: '/tests/component-import/critical-parent'
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
              title: 'SpeedkitPicture (5 Pictures)',
              to: '/experimental/speedkit-picture/5/'
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
