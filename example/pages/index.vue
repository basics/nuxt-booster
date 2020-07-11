<template>
  <div>
    <h1>Preview</h1>
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <nuxt-link :to="link.to" :title="link.title">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <h2>Critical</h2>
    <nav>
      <ul>
        <li v-for="(link, index) in criticalLinks" :key="index">
          <nuxt-link :to="link.to" :title="link.title">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <h2>Lazy</h2>
    <nav>
      <ul>
        <li v-for="(link, index) in lazyLinks" :key="index">
          <nuxt-link :to="link.to" :title="link.title">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <h2>Both</h2>
    <nav>
      <ul>
        <li v-for="(link, index) in bothLinks" :key="index">
          <nuxt-link :to="link.to" :title="link.title">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Full Example',
          to: '/full-example'
        },
        {
          title: 'Max Fonts',
          to: '/max-fonts'
        },
        {
          title: 'Test: v-font',
          to: '/tests/v-font'
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
          title: 'LazyImageSrc',
          to: '/critical/lazy-image-src'
        },
        {
          title: 'LazyImageSrcset',
          to: '/critical/lazy-image-srcset'
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
          title: 'LazyImageSrc',
          to: '/lazy/lazy-image-src'
        },
        {
          title: 'LazyImageSrcset',
          to: '/lazy/lazy-image-srcset'
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
          title: 'LazyImageSrc',
          to: '/both/lazy-image-src'
        },
        {
          title: 'LazyImageSrcset',
          to: '/both/lazy-image-srcset'
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
h1,
h2 {
  text-align: center;
}

nav {
  text-align: center;
}

ul {
  padding: 0;
  list-style: none;

  & li {
    margin: 10px 0;
  }
}

a {
  font-size: 16px;
  color: #000;
  text-decoration: none;
}

</style>
