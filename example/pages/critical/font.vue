<template>
  <div>
    <organism-preview-container critical>
      <template>
        <article v-font="$fonts.getFont('Comic Neue', 700, 'normal')" v-html="contentA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>Font</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  layout: 'detail',
  data () {
    return {
      contentA: '<p>Lorem ipsum dolor sit amet…</p>'
    }
  }
}
</script>
