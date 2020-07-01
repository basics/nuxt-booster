<template>
  <div>
    <organism-preview-container critical>
      <template>
        <LazyIframe v-bind="iframeA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyIframe</p>
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
