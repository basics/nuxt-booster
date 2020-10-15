<template>
  <div
    v-font="[
      $fonts.getFont('Quicksand', 400, 'normal').isCritical(),
      $fonts.getFont('Quicksand', 700, 'normal').addSelector('h1, h2').isCritical()
    ]"
    class="page-index"
  >
    <h1>
      Preview
    </h1>
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <lazy-link :to="link.to" :title="link.title">
            {{ link.title }}
          </lazy-link>
        </li>
      </ul>
    </nav>
    <h2>Critical</h2>
    <nav>
      <ul>
        <li v-for="(link, index) in criticalLinks" :key="index">
          <lazy-link :to="link.to" :title="link.title">
            {{ link.title }}
          </lazy-link>
        </li>
      </ul>
    </nav>
    <h2>Lazy</h2>
    <nav>
      <ul>
        <li v-for="(link, index) in lazyLinks" :key="index">
          <lazy-link :to="link.to" :title="link.title">
            {{ link.title }}
          </lazy-link>
        </li>
      </ul>
    </nav>
    <h2>Both</h2>
    <nav>
      <ul>
        <li v-for="(link, index) in bothLinks" :key="index">
          <lazy-link :to="link.to" :title="link.title">
            {{ link.title }}
          </lazy-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

import LazyLink from 'lazy-resources/components/LazyLink'

export default {
  components: {
    LazyLink
  },
  data () {
    return {
      links: [
        {
          title: 'Full Example With Components',
          to: '/full-example-with-components'
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
  },
  methods: {
    clickf (e) {
      // e.defaultPrevented = false
      console.log('test', e)
      return false
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

  & ul {
    padding: 0;
    list-style: none;

    & li {
      margin: calc(10 / 16 * 1em) 0;
    }
  }

  & a {
    font-size: 1em;
    color: currentColor;
    text-decoration: none;
  }
}

</style>
