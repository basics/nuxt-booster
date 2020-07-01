<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <article v-font="$fonts.getFont('Comic Neue', 700, 'normal')" v-html="contentA" />
      </template>
      <template v-slot:title>
        <p>Font</p>
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
