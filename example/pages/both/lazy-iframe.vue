<template>
  <div>
    <organism-preview-container>
      <template>
        <lazy-iframe v-bind="iframeA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>LazyIframe</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import LazyIframe from 'lazy-resources/components/LazyIframe'
export default {
  components: {
    LazyIframe
  },
  data () {
    return {
      iframeA: {
        src: 'https://grabarzundpartner.de'
      }
    }
  }
}
</script>
