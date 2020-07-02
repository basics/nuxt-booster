<template>
  <div>
    <organism-preview-container critical>
      <template>
        <article v-font="$fonts.getFont('Comic Neue', 700, 'normal')" v-html="contentA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>Font (700)</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template>
        <article v-font="$fonts.getFont('Comic Neue', 300, 'normal')" v-html="contentA" />
      </template>
      <template v-slot:title>
        <p>Font (300)</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      contentA: '<p>Lorem ipsum dolor sit amet…</p>'
    }
  }
}
</script>
