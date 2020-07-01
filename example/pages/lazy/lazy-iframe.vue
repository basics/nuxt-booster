<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <LazyIframe v-bind="iframeA" />
      </template>
      <template v-slot:title>
        <p>LazyIframe</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  layout: 'detail',
  data () {
    return {
      iframeA: {
        src: 'https://grabarzundpartner.de'
      }
    }
  }
}
</script>
