<template>
  <div>
    <organism-preview-container>
      <template>
        <article v-font="$fonts.getFont('Comic Neue', 700, 'normal').isCritical()" v-html="contentA" />
      </template>
      <template v-slot:title>
        <p>Critical<br>Font basic usage</p>
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
