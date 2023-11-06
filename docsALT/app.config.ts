export default defineAppConfig({
  docus: {
    title: 'Nuxt Speedkit',
    description: 'Nuxt Speedkit takes over the Lighthouse performance optimization of your generated website.',
    url: 'https://nuxt-speedkit.grabarzundpartner.dev/',
    // eslint-disable-next-line no-secrets/no-secrets
    image: 'https://repository-images.githubusercontent.com/265295866/7e292000-5cc1-11eb-8469-1aafbf1d2727',
    socials: {
      github: 'GrabarzUndPartner/nuxt-speedkit'
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        }
      ],
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev'
      }
    },
    github: {
      dir: 'docs/content',
      edit: true,
      contributors: true,
      branch: 'main',
      owner: 'GrabarzUndPartner',
      repo: 'nuxt-speedkit'
    }
  }
});
