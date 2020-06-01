<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">

body {
  margin: 0;
}

.font {
  font-family: var(--font-family, Arial);
  font-style: var(--font-style);
  font-weight: var(--font-weight);
}

@font-face {
  font-family: 'Comic Neue';
  font-style: normal;
  font-weight: 300;
  src: url('~assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Comic Neue';
  font-style: italic;
  font-weight: 300;
  src: url('~assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-300italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Comic Neue';
  font-style: normal;
  font-weight: 400;
  src: url('~assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Comic Neue';
  font-style: italic;
  font-weight: 400;
  src: url('~assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Comic Neue';
  font-style: normal;
  font-weight: 700;
  src: url('~assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-700.woff2') format('woff2');
}

@font-face {
  font-family: 'Comic Neue';
  font-style: italic;
  font-weight: 700;
  src: url('~assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-700italic.woff2') format('woff2');
}

</style>
